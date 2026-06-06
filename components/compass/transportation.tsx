"use client";

import React from 'react';

const TransportPlane = ({
                                   width = "40px",
                                   height = "40px",
                                   className = ""
                               }) => {
    return (
        <svg
            xmlns="http://w3.org"
            viewBox="0 0 120 120"
            width={width}
            height={height}
            className={className}
            aria-label="Cargo Transportation Plane Blueprint"
        >
            <g id="transport-plane">
                {/* Wide, Heavy Cargo Fuselage Hull */}
                <path
                    d="M60 12
                       C65 12, 67 20, 67 40
                       C67 65, 66 92, 64 102
                       L60 108
                       L56 102
                       C54 92, 53 65, 53 40
                       C53 20, 55 12, 60 12 Z"
                    fill="#2B3A4A"
                    stroke="#4F6378"
                    strokeWidth="0.5"
                    strokeLinejoin="round"
                />

                {/* Swept Cargo Main Wings (Thick and Sturdy Structure) */}
                <path
                    d="M53 38
                       L10 46
                       L10 54
                       L53 48 Z"
                    fill="#2B3A4A"
                    stroke="#4F6378"
                    strokeWidth="0.4"
                    strokeLinejoin="round"
                />
                <path
                    d="M67 38
                       L110 46
                       L110 54
                       L67 48 Z"
                    fill="#2B3A4A"
                    stroke="#4F6378"
                    strokeWidth="0.4"
                    strokeLinejoin="round"
                />

                {/* Wing Control Surfaces (Flaps & Slats Panel Lines) */}
                <path d="M16 52.5 L51 47.5" fill="none" stroke="#1E293B" strokeWidth="0.3" strokeLinecap="round" />
                <path d="M104 52.5 L69 47.5" fill="none" stroke="#1E293B" strokeWidth="0.3" strokeLinecap="round" />

                {/* Heavy Turbofan Engines Under Wings */}
                {/* Left Engines */}
                <rect x="24" y="44" width="5" height="10" rx="1.5" fill="#1E293B" stroke="#4F6378" strokeWidth="0.4" />
                <rect x="38" y="42" width="5" height="10" rx="1.5" fill="#1E293B" stroke="#4F6378" strokeWidth="0.4" />
                {/* Right Engines */}
                <rect x="77" y="42" width="5" height="10" rx="1.5" fill="#1E293B" stroke="#4F6378" strokeWidth="0.4" />
                <rect x="91" y="44" width="5" height="10" rx="1.5" fill="#1E293B" stroke="#4F6378" strokeWidth="0.4" />

                {/* Wide Horizontal Tail / Stabilizers */}
                <path d="M55 96 L28 102 L29 106 L56 100 Z" fill="#2B3A4A" stroke="#4F6378" strokeWidth="0.4" />
                <path d="M65 96 L92 102 L91 106 L64 100 Z" fill="#2B3A4A" stroke="#4F6378" strokeWidth="0.4" />

                {/* Structural Cargo Door & Fuselage Seams */}
                <path d="M60 12 L60 102" fill="none" stroke="#1E293B" strokeWidth="0.3" />
                {/* Cockpit Windows Area */}
                <path d="M56.5 22 C58 24, 62 24, 63.5 22" fill="none" stroke="#60A5FA" strokeWidth="0.6" strokeLinecap="round" />
                {/* Rear Cargo Ramp Door Lines */}
                <rect x="56" y="84" width="8" height="14" fill="none" stroke="#1E293B" strokeWidth="0.4" />

                {/* Sponson Pods (Main Landing Gear Housing on Fuselage Sides) */}
                <path d="M51 52 L51 72 C51 74, 53 74, 53 72 Z" fill="#1E293B" opacity="0.8" />
                <path d="M69 52 L69 72 C69 74, 67 74, 67 72 Z" fill="#1E293B" opacity="0.8" />
            </g>
        </svg>
    );
};

export default TransportPlane;
