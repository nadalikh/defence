"use client";

import React from 'react';

const F35Jet = ({
                           width = "40px",
                           height = "40px",
                           className = ""
                       }) => {
    return (
        <svg
            xmlns="http://w3.org"
            viewBox="0 0 100 130"
            width={width}
            height={height}
            className={className}
            aria-label="F-35 Lightning II Fighter Jet Blueprint"
        >
            <g id="f35-fighter">
                {/* Engine Afterburner Glow */}
                <polygon
                    points="48 116, 52 116, 50 126"
                    fill="#F97316"
                    opacity="0.8"
                />
                {/* Engine Nozzle */}
                <rect
                    x="47.5"
                    y="112"
                    width="5"
                    height="4"
                    fill="#1E293B"
                />

                {/* Main Airframe Silhouette & Wings */}
                <path
                    d="M50 8
             L51.5 16 L53 26 L53 38
             L88 74 L88 78 L54.5 68
             L54.5 98 L72 112 L72 116 L50 110 L28 116 L28 112 L45.5 98
             L45.5 68 L12 78 L12 74
             L47 38 L47 26 L48.5 16 Z"
                    fill="#2B3A4A"
                    stroke="#4F6378"
                    strokeWidth="0.4"
                    strokeLinejoin="round"
                />

                {/* Wing Flap / Aileron Details */}
                <path d="M54.5 64 L84 74.5 M54.5 67 L80 75.5" fill="none" stroke="#1E293B" strokeWidth="0.3" strokeLinecap="round" />
                <path d="M45.5 64 L16 74.5 M45.5 67 L20 75.5" fill="none" stroke="#1E293B" strokeWidth="0.3" strokeLinecap="round" />

                {/* Horizontal Tail / Stabilizer Panels */}
                <path d="M45.5 102 L31 111.5 M54.5 102 L69 111.5" fill="none" stroke="#1E293B" strokeWidth="0.3" strokeLinecap="round" />

                {/* Fuselage Spine & Structural Panel Lines */}
                <path d="M50 26 L50 96" fill="none" stroke="#1E293B" strokeWidth="0.3" strokeLinecap="round" />
                <path d="M47 38 L50 42 L53 38" fill="none" stroke="#1E293B" strokeWidth="0.3" strokeLinecap="round" />
                <path d="M45.5 52 L50 55 L54.5 52" fill="none" stroke="#1E293B" strokeWidth="0.3" strokeLinecap="round" />

                {/* Weapon Bay / Engine Nacelle Creases */}
                <path d="M43 55 L43 85 L47 94" fill="none" stroke="#1E293B" strokeWidth="0.3" strokeLinecap="round" />
                <path d="M57 55 L57 85 L53 94" fill="none" stroke="#1E293B" strokeWidth="0.3" strokeLinecap="round" />

                {/* Twin Vertical Tails */}
                <path d="M43 88 L34 106 L34 112" fill="none" stroke="#1E293B" strokeWidth="0.3" strokeLinecap="round" />
                <path d="M57 88 L66 106 L66 112" fill="none" stroke="#1E293B" strokeWidth="0.3" strokeLinecap="round" />

                {/* Cockpit Canopy */}
                <path
                    d="M50 20
             C51.5 20, 52.5 24, 52.5 30
             C52.5 35, 51.5 37, 50 37
             C48.5 37, 47.5 35, 47.5 30
             C47.5 24, 48.5 20, 50 20 Z"
                    fill="#60A5FA"
                    opacity="0.7"
                    stroke="#3B82F6"
                    strokeWidth="0.3"
                />

                {/* Canopy Center Seam */}
                <path d="M50 20 L50 37" stroke="#2563EB" strokeWidth="0.2" fill="none" />
            </g>
        </svg>
    );
};

export default F35Jet;
