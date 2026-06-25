// utils/fetch.ts
import {cache} from 'react';

export const baseUrl = 'https://api.haras-samin.ir/api/v1';
// ----- Types -----
type FetchOptions = Omit<RequestInit, 'signal'> & {
    timeout?: number;       // ms before aborting
    retries?: number;       // number of retry attempts
    retryDelay?: number;    // base delay in ms (exponential backoff)
    cacheDuration?: number; // seconds (in‑memory TTL)
    dedupe?: boolean;       // deduplicate concurrent identical requests
};


type JangoError = { detail: string };

type FetchResult<T> = {
    data: T;
    response: Response;
};

// ----- In‑memory cache (server & client) -----
interface CacheEntry {
    data: unknown;          // stored as unknown, cast when retrieved
    timestamp: number;
    ttl: number;            // seconds
}

const memoryCache = new Map<string, CacheEntry>();

// ----- Request deduplication (client & server) -----
const pendingRequests = new Map<string, Promise<Response>>();

// ----- Core fetch function -----
export async function fetchData<T = unknown>(
    url: string,
    options: FetchOptions = {}
): Promise<FetchResult<T>> {
    const {
        timeout = 10000,
        retries = 2,
        retryDelay = 300,
        cacheDuration = 0,
        dedupe = true,
        ...fetchOptions
    } = options;

    const cacheKey = `${baseUrl}${url}_${JSON.stringify(fetchOptions)}`;

    // 1. Check memory cache (only if cacheDuration > 0)
    if (cacheDuration > 0) {
        const cached = memoryCache.get(cacheKey);
        if (cached && Date.now() - cached.timestamp < cached.ttl * 1000) {
            // Cast cached data to T – we trust the cache type
            return {
                data: cached.data as T,
                response: new Response(JSON.stringify(cached.data), {
                    status: 200,
                    headers: {'Content-Type': 'application/json'},
                }),
            };
        }
    }

    // 2. Deduplicate concurrent identical requests
    if (dedupe && pendingRequests.has(cacheKey)) {
        const response = await pendingRequests.get(cacheKey)!;
        const data = (await response.clone().json()) as T;
        return {data, response};
    }

    // Helper to perform a single fetch with timeout and retries
    const performFetch = async (attempt = 0): Promise<FetchResult<T>> => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        try {
            const response = await fetch(baseUrl + url, {
                ...fetchOptions,
                signal: controller.signal,
                headers: {
                    'Content-Type': 'application/json',
                    ...(fetchOptions.headers || {}),
                },
                // Use Next.js built‑in cache on the server (App Router)
                ...(typeof window === 'undefined' && {
                    next: {
                        revalidate: cacheDuration > 0 ? cacheDuration : undefined,
                    },
                }),
            });

            clearTimeout(timeoutId);
            const data = (await response.json()) as (T | JangoError);

            if (!response.ok) {
                throw new Error(`${(data as JangoError).detail}`);
            }


            // Cache the result
            if (cacheDuration > 0) {
                memoryCache.set(cacheKey, {
                    data,
                    timestamp: Date.now(),
                    ttl: cacheDuration,
                });
            }
            return {data: (data as T), response};

        } catch (error: unknown) {
            clearTimeout(timeoutId);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            // Retry logic (only for network errors or 5xx)
            const isRetriable =
                error instanceof Error &&
                (error.name === 'AbortError' ||
                    error.message?.toLowerCase().includes('fetch') ||
                    error.message?.toLowerCase().includes('network'));

            if (attempt < retries && isRetriable) {
                const delay = retryDelay * Math.pow(2, attempt);
                await new Promise((resolve) => setTimeout(resolve, delay));
                return performFetch(attempt + 1);
            }

            throw new Error(`${errorMessage}`);
        }
    };

    // Start the request and store promise for deduplication
    const requestPromise = performFetch();
    if (dedupe) {
        pendingRequests.set(cacheKey, requestPromise.then((res) => res.response));
        // Clean up after resolution
        void requestPromise.finally(() => {
            pendingRequests.delete(cacheKey);
        });
    }

    return await requestPromise;
}

// ----- Convenience wrapper (returns only data) -----
export async function fetchJson<T = unknown>(url: string,
                                             options?: FetchOptions
): Promise<T> {
    const {data} = await fetchData<T>(url, options);
    return data;
}

// ----- React Server Component helper (with `cache()`) -----
export const cachedFetchJson = cache(async <T = unknown>(
    url: string,
    options?: FetchOptions
): Promise<T> => {
    // `cache()` deduplicates across server renders; combine with our TTL if needed
    return fetchJson<T>(url, options);
});
