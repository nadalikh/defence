// hooks/useCompass.ts
import {useEffect, useState} from "react";

interface IOSDeviceOrientationEvent extends DeviceOrientationEvent {
    webkitCompassHeading?: number;
}

export function useCompass() {
    const [heading, setHeading] = useState<number | null>(null);

    useEffect(() => {

        const handleOrientation = (event: DeviceOrientationEvent) => {
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

        window.addEventListener(
            "deviceorientation",
            handleOrientation,
            true
        );
        return () => {
            window.removeEventListener(
                "deviceorientation",
                handleOrientation
            );
        };
    }, []);


    return heading;
}
