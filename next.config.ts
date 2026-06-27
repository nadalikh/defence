import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";
const withSerwist = withSerwistInit({
    swSrc: "app/sw.ts",
    swDest: "public/sw.js",
    cacheOnNavigation: true,
    reloadOnOnline: true,
});

const nextConfig: NextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    /* config options here */
    allowedDevOrigins: ['192.168.1.141'],
};

export default withSerwist(nextConfig);
