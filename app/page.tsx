"use client";

import {useEffect, useState} from "react";
import Compass from "@/components/compass/compass";
import dynamic from "next/dynamic";
import {useRouter} from "next/navigation";
import {store} from "@/store/store";
import {Provider} from "react-redux";

const Mapp = dynamic(() => import("@/components/map/map"), {ssr: false});

export type dv = typeof DeviceOrientationEvent & {
    requestPermission?: () => Promise<"granted" | "denied">;
};

export default function CompassPage() {
    const router = useRouter();
    const [isAuthorized, setAuthorized] = useState(true);
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
        if (localStorage.getItem('token')) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setAuthorized(true)
            enableCompass()
        }else{}
            // router.push("/login");
    }, []);

    return (
        isAuthorized &&
        <div className="w-full min-h-screen bg-[linear-gradient(64deg,#0c0368a8,#0000ff96)] flex flex-col">
            <Provider store={store}>
                <Compass/>
                <Mapp/>
            </Provider>
        </div>
    );
}
