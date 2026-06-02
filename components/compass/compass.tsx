"use client";

import {useEffect, useRef, useState} from "react";
import {useCompass} from "@/components/compass/hooks/useCompass";
import NumberRangeSelector from "@/components/rangeSelector/rangeSelector";
import F35Jet from "@/components/compass/f35";
import Uav from "@/components/compass/uav";
import Transportation from "@/components/compass/transportation";
import Rocket from "@/components/compass/rocket";
import Helicopter from "@/components/compass/helicopter";
import Fpv from "@/components/compass/fpv";


const renderTicks = () => {
    const ticks = [];
    for (let angle = 0; angle < 360; angle += 10) {
        let length = 6; // short tick for 10°
        let strokeWidth = 1;
        let color = "#9ca3af"; // gray-400

        // Longer ticks for every 30°, and even longer for cardinal points
        if (angle % 90 === 0) {
            continue;
        } else if (angle % 30 === 0) {
            length = 12; // intercardinal (NE, SE, SW, NW)
            strokeWidth = 1.5;
            color = "#6b7280"; // gray-500
        }

        // Calculate start and end points for the tick line
        // The SVG center is (0,0), radius ≈ 90 (since container is 200px, so 100px radius; we leave 10px margin)
        const startRadius = 86;
        const endRadius = startRadius - length;

        // In SVG, line from (0, -startRadius) to (0, -endRadius), then rotated by angle
        // We'll use a <g transform="rotate(angle)"> for each tick
        ticks.push(
            <g key={angle} transform={`rotate(${angle})`}>
                <line
                    x1={0}
                    y1={-startRadius}
                    x2={0}
                    y2={-endRadius}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                />
            </g>
        );
    }
    return ticks;
};

export default function Compass() {
    const {heading, start, isActivate, stop, setHeading, setIsActivate} = useCompass();
    const [continuousRotation, setContinuousRotation] = useState(0);
    const prevHeadingRef = useRef<number | null>(null);

    useEffect(() => {
        start()
    }, []);

    useEffect(() => {
        if (heading === null || heading === undefined) return;

        // Initialize previous heading on first valid reading
        if (prevHeadingRef.current === null) {
            prevHeadingRef.current = heading;
            setContinuousRotation(-heading);
            return;
        }

        // Calculate the smallest angular difference between new and old heading
        let delta = heading - prevHeadingRef.current;

        // Normalize delta to the range [-180, 180) to get the shortest rotation direction
        if (delta > 180) delta -= 360;
        if (delta < -180) delta += 360;

        // Update continuous rotation angle (accumulate the delta)
        setContinuousRotation(prev => prev - delta);

        // Store current heading for next update
        prevHeadingRef.current = heading;
    }, [heading]);

    return (
        <div className="flex flex-col items-center gap-6 p-4 relative">
            <div className="relative w-50 h-[200px]">
                {/* Fixed pointer (lubber line) */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                    <div
                        className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[16px] border-l-transparent border-r-transparent border-t-red-600 drop-shadow-md"></div>
                </div>

                {/* Rotating compass card with ticks */}
                <div
                    className="relative w-full h-full rounded-full bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg transition-transform duration-100 ease-linear"
                    style={{transform: `rotate(${continuousRotation}deg)`}}
                >
                    {/* Tick marks (SVG) */}
                    <svg
                        viewBox="-100 -100 200 200"
                        className="absolute inset-0 w-full h-full pointer-events-none"
                    >
                        {renderTicks()}
                    </svg>

                    {/* N S E W labels */}
                    <div
                        className="absolute top-1 left-1/2 -translate-x-1/2 text-red-600 font-bold text-lg drop-shadow-sm z-10">N
                    </div>
                    <div
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 text-gray-700 font-semibold text-lg drop-shadow-sm z-10">S
                    </div>
                    <div
                        className="absolute right-1 top-1/2 -translate-y-1/2 text-blue-600 font-semibold text-lg drop-shadow-sm z-10">E
                    </div>
                    <div
                        className="absolute left-1 top-1/2 -translate-y-1/2 text-emerald-600 font-semibold text-lg drop-shadow-sm z-10">W
                    </div>

                    {/* Center icon – compass rose */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-700 z-10">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L14 9L12 11L10 9L12 2Z" fill="currentColor"/>
                            <path d="M12 22L10 15L12 13L14 15L12 22Z" fill="currentColor"/>
                            <path d="M22 12L15 14L13 12L15 10L22 12Z" fill="currentColor"/>
                            <path d="M2 12L9 10L11 12L9 14L2 12Z" fill="currentColor"/>
                            <circle cx="12" cy="12" r="2" fill="currentColor"/>
                        </svg>
                    </div>

                    {/* Decorative inner ring */}
                    <div className="absolute inset-2 rounded-full pointer-events-none"></div>
                </div>
            </div>
            <p className="bg-gray-100 px-4 py-1.5 rounded-full shadow-inner">
                درجه: <span className="text-indigo-600 font-bold">{heading?.toFixed(0) ?? "--"}°</span>
            </p>
            <div className={'flex flex-col gap-3 absolute top-2 left-5.5'}>

                <button className={'hover:cursor-pointer rounded-2xl bg-[#d1d1d1] shadow-md shadow-gray-800 flex justify-center'}><F35Jet/></button>
                <button className={'hover:cursor-pointer rounded-2xl bg-[#d1d1d1] shadow-md shadow-gray-800 flex justify-center'}><Uav/></button>
                <button className={'hover:cursor-pointer rounded-2xl bg-[#d1d1d1] shadow-md shadow-gray-800 flex justify-center'}><Transportation/></button>
                <button className={'hover:cursor-pointer rounded-2xl bg-[#d1d1d1] shadow-md shadow-gray-800 flex justify-center'}><Rocket/></button>
                <button className={'hover:cursor-pointer rounded-2xl bg-[#d1d1d1] shadow-md shadow-gray-800 flex justify-center'}><Helicopter/></button>
                <button className={'hover:cursor-pointer rounded-2xl bg-[#d1d1d1] shadow-md shadow-gray-800 flex justify-center'}><Fpv/></button>
            </div>
            <div className={'flex flex-col gap-3 absolute top-2 right-5.5'}>
                <button
                    onClick={() => setIsActivate(!isActivate)}
                    className={'text-xs hover:cursor-pointer p-3 rounded-2xl bg-[#d1d1d1] shadow-md shadow-gray-800'}>{isActivate ? 'قطب نما دستی' : 'قطب نما خودکار'}
                </button>
            </div>
            {
                !isActivate &&
                <div className={'mt-7 w-full flex justify-center '}>
                    <NumberRangeSelector onChange={value => setHeading(value)}/>
                </div>
            }
        </div>
    );
}
