"use client";

import {useEffect, useState} from "react";
import Compass from "@/components/compass/compass";

export type dv = typeof DeviceOrientationEvent & {
    requestPermission?: () => Promise<"granted" | "denied">;
};
export default function CompassPage() {

    async function enableCompass() {
        try {
            const DeviceOrientationEventIOS =
                DeviceOrientationEvent as dv

            if (
                typeof DeviceOrientationEventIOS.requestPermission === "function"
            ) {
                const permission =
                    await DeviceOrientationEventIOS.requestPermission();

                if (permission !== "granted") {

                }
            }
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        enableCompass()
    }, []);

    return (
        <div className="w-full h-screen bg-[linear-gradient(64deg,#0c0368a8,#0000ff96)]">
            <Compass/>
        </div>
    );
}
