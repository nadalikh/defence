"use client";

import {useEffect} from "react";
import Compass from "@/components/compass/compass";
import dynamic from "next/dynamic";
const Mapp = dynamic(() => import("@/components/map/map"), {ssr: false});

export type dv = typeof DeviceOrientationEvent & {
    requestPermission?: () => Promise<"granted" | "denied">;
};
function urlBase64ToUint8Array(base64String: string) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
}
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
