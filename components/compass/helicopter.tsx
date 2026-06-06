"use client";

import React from 'react';

const Helicopter = ({
                               width = "40px",
                               height = "40px",
                               className = ""
                           }) => {
    return (
        <svg
            xmlns="http://w3.org"
            viewBox="0 0 110 110"
            width={width}
            height={height}
            className={className}
            aria-label="Military Utility Helicopter Blueprint"
        >
            <g id="helicopter">
                {/* Main Dynamic Rotor Blades (Blurred Outer Ring for Motion Effect) */}
                <circle cx="55" cy="45" r="42" fill="none" stroke="#F8FAFC" strokeWidth="0.4" strokeDasharray="4 8" opacity="0.3" />
                <path d="M15 45 L95 45" fill="none" stroke="#94A3B8" strokeWidth="0.8" opacity="0.5" strokeLinecap="round" />
                <path d="M55 5 L55 85" fill="none" stroke="#94A3B8" strokeWidth="0.8" opacity="0.5" strokeLinecap="round" />

                {/* Rotor Mast Center Hub */}
                <circle cx="55" cy="45" r="2.5" fill="#1E293B" stroke="#4F6378" strokeWidth="0.5" />

                {/* Elongated Tail Boom */}
                <path
                    d="M53 45
                       L53 96
                       L57 96
                       L57 45 Z"
                    fill="#2B3A4A"
                    stroke="#4F6378"
                    strokeWidth="0.4"
                />

                {/* Tail Rotor Assembly */}
                <circle cx="58" cy="96" r="1" fill="#1E293B" />
                <path d="M51 96 L65 96" fill="none" stroke="#94A3B8" strokeWidth="0.5" opacity="0.7" />
                <path d="M58 91 L58 101" fill="none" stroke="#94A3B8" strokeWidth="0.5" opacity="0.7" />

                {/* Horizontal Tail Stabilizer Fin */}
                <path d="M57 82 L70 84 L70 86 L57 85 Z" fill="#2B3A4A" stroke="#4F6378" strokeWidth="0.3" />

                {/* Main Fuselage Body Hull */}
                <path
                    d="M55 16
                       C61 16, 64 24, 64 45
                       C64 62, 60 68, 55 68
                       C50 68, 46 62, 46 45
                       C46 24, 49 16, 55 16 Z"
                    fill="#2B3A4A"
                    stroke="#4F6378"
                    strokeWidth="0.5"
                    strokeLinejoin="round"
                />

                {/* Cockpit Canopy Windows */}
                <path
                    d="M51 22
                       C52.5 19, 57.5 19, 59 22
                       C60.5 25, 61 30, 61 34
                       L49 34
                       C49 30, 49.5 25, 51 22 Z"
                    fill="#60A5FA"
                    opacity="0.6"
                    stroke="#3B82F6"
                    strokeWidth="0.3"
                />
                <path d="M55 19 L55 34" fill="none" stroke="#3B82F6" strokeWidth="0.3" />

                {/* Fuselage Panel Lines & Engine Nacelles */}
                <path d="M46 45 L50 48 L55 45 L60 48 L64 45" fill="none" stroke="#1E293B" strokeWidth="0.4" />
                <rect x="42" y="44" width="4" height="12" rx="1" fill="#1E293B" stroke="#4F6378" strokeWidth="0.3" />
                <rect x="64" y="44" width="4" height="12" rx="1" fill="#1E293B" stroke="#4F6378" strokeWidth="0.3" />

                {/* Stubby Weapon Wings (Pylons) */}
                <path d="M46 52 L36 55 L36 58 L46 56 Z" fill="#2B3A4A" stroke="#4F6378" strokeWidth="0.4" />
                <path d="M64 52 L74 55 L74 58 L64 56 Z" fill="#2B3A4A" stroke="#4F6378" strokeWidth="0.4" />

                {/* Rocket Pods / Loadout */}
                <rect x="34" y="56" width="3" height="6" rx="0.5" fill="#94A3B8" />
                <rect x="73" y="56" width="3" height="6" rx="0.5" fill="#94A3B8" />

                {/* Landing Gear Skids */}
                <path d="M44 58 L40 68 L38 68" fill="none" stroke="#4F6378" strokeWidth="0.6" strokeLinecap="round" />
                <path d="M66 58 L70 68 L72 68" fill="none" stroke="#4F6378" strokeWidth="0.6" strokeLinecap="round" />
                <path d="M36 68 L74 68" fill="none" stroke="#1E293B" strokeWidth="1" strokeLinecap="round" />
            </g>
        </svg>
    );
};

export default Helicopter;
