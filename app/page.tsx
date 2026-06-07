"use client";

import {useEffect} from "react";
import Compass from "@/components/compass/compass";
import dynamic from "next/dynamic";
const Mapp = dynamic(() => import("@/components/map/map"), {ssr: false});

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
        <div className="w-full min-h-screen bg-[linear-gradient(64deg,#0c0368a8,#0000ff96)] flex flex-col">
            <Compass/>
            <Mapp/>
        </div>
    );
}
