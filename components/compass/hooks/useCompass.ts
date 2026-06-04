// hooks/useCompass.ts
import {useCallback, useEffect, useRef, useState} from "react";
import {notif} from "@/components/utils";

interface IOSDeviceOrientationEvent extends DeviceOrientationEvent {
    webkitCompassHeading?: number;
}

const HEADING_TIMEOUT_MS = 3000; // 3 seconds


export function useCompass() {
    const [heading, setHeading] = useState<number | null>(null);
    const [isActivate, setIsActivate] = useState<boolean>(false);
    const handlerRef = useRef<(event: DeviceOrientationEvent) => void>(() => {
    });
    const prevIsActivate = useRef<boolean>(isActivate);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const alertShownRef = useRef(false); // prevent multiple alerts

    const start = useCallback(() => {
        console.log("start", isActivate)
        window.addEventListener('deviceorientation', handlerRef.current, true);
        setIsActivate(true);
    }, [isActivate]);

    const stop = useCallback(() => {
        window.removeEventListener('deviceorientation', handlerRef.current, true);
    }, [isActivate]);

    useEffect(() => {
        // alert(`${prevIsActivate.current} ${!isActivate}`)
        if (prevIsActivate.current && !isActivate)
            stop()
        else if (!prevIsActivate.current && isActivate || !prevIsActivate.current && !isActivate)
            start()
        prevIsActivate.current = isActivate;
    }, [isActivate]);

    useEffect(() => {
        handlerRef.current = (event: DeviceOrientationEvent) => {
            const iosEvent = event as IOSDeviceOrientationEvent;
            // iOS
            const iosHeading = iosEvent.webkitCompassHeading;

            if (typeof iosHeading === "number") {
                setHeading(iosHeading);
            } else if (event.alpha !== null) {
                // Android
                setHeading(360 - event.alpha);
            }
        };
    }, []);

    useEffect(() => {
        if (heading !== null && heading !== undefined) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
            alertShownRef.current = false;
            return;
        }

        console.log("heading", heading, isActivate, alertShownRef, timeoutRef);
        if (!alertShownRef.current && !timeoutRef.current) {
            timeoutRef.current = setTimeout(() => {
                if (heading === null || heading === undefined) {
                    notif(`سخت افزار قطب نما در دستگاه شما یافت نشد.`, true);
                    alertShownRef.current = true;
                    setIsActivate(false)
                }
                timeoutRef.current = null;
            }, HEADING_TIMEOUT_MS);
        }

        // Cleanup when heading changes or component unmounts
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
        };
    }, [heading]); // Re-run this effect every time heading changes


    return {heading, start, stop, isActivate, setHeading, setIsActivate};
}
