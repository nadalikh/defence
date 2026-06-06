"use client";

import React from 'react';

const Rocket = ({
                           width = "40px",
                           height = "40px",
                           className = ""
                       }) => {
    return (
        <svg
            xmlns="http://w3.org"
            viewBox="0 0 100 120"
            width={width}
            height={height}
            className={className}
            aria-label="Space Launch Vehicle Rocket Blueprint"
        >
            <g id="orbital-rocket">
                {/* Engine Fire Thrust / Exhaust Plume */}
                <polygon
                    points="44 104, 56 104, 50 118"
                    fill="#F97316"
                    opacity="0.9"
                />
                <polygon
                    points="47 104, 53 104, 50 114"
                    fill="#FBBF24"
                />

                {/* Main Rocket Booster Body Core */}
                {/* Tall, slender multi-stage cylinder with a pointed aerodynamic nose cone */}
                <path
                    d="M50 10
                       L55 22
                       L55 100
                       L45 100
                       L45 22 Z"
                    fill="#2B3A4A"
                    stroke="#4F6378"
                    strokeWidth="0.5"
                    strokeLinejoin="round"
                />

                {/* Core Interstage and Panel Lines */}
                <path d="M50 10 L50 100" fill="none" stroke="#1E293B" strokeWidth="0.3" />
                <path d="M45 32 L55 32" fill="none" stroke="#1E293B" strokeWidth="0.5" /> {/* Payload Fairing Seam */}
                <path d="M45 56 L55 56" fill="none" stroke="#1E293B" strokeWidth="0.5" /> {/* Stage 2 Separation Line */}
                <path d="M45 82 L55 82" fill="none" stroke="#1E293B" strokeWidth="0.5" /> {/* Stage 1 Tank Line */}

                {/* Aerodynamic Base Stabilizing Fins */}
                {/* Left Fin */}
                <path
                    d="M45 84
                       L36 100
                       L45 100 Z"
                    fill="#2B3A4A"
                    stroke="#4F6378"
                    strokeWidth="0.4"
                    strokeLinejoin="round"
                />
                {/* Right Fin */}
                <path
                    d="M55 84
                       L64 100
                       L55 100 Z"
                    fill="#2B3A4A"
                    stroke="#4F6378"
                    strokeWidth="0.4"
                    strokeLinejoin="round"
                />

                {/* Rocket Engine Bell Nozzles */}
                <rect x="46" y="100" width="3" height="4" fill="#1E293B" rx="0.5" />
                <rect x="51" y="100" width="3" height="4" fill="#1E293B" rx="0.5" />

                {/* Roll Control Grid Fins (Folded near the top of Stage 1) */}
                <rect x="43.5" y="58" width="1.5" height="4" fill="#1E293B" rx="0.2" />
                <rect x="55" y="58" width="1.5" height="4" fill="#1E293B" rx="0.2" />

                {/* USA / Mission Iconography Graphic on Hull */}
                <rect x="48.5" y="40" width="3" height="6" fill="#60A5FA" opacity="0.4" rx="0.5" />
            </g>
        </svg>
    );
};

export default Rocket;
