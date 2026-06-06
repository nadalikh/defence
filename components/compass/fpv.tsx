"use client";

import React from 'react';

const FpvDrone = ({
                             width = "40px",
                             height = "40px",
                             className = ""
                         }) => {
    return (
        <svg
            xmlns="http://w3.org"
            viewBox="0 0 100 100"
            width={width}
            height={height}
            className={className}
            aria-label="FPV Racing Drone Blueprint"
        >
            <g id="fpv-racing-drone">
                {/* Aggressive H-Frame Carbon Fiber Arms */}
                {/* Thick structural frame rails running diagonally to withstand crashes */}
                <path d="M24 24 L42 42" stroke="#4F6378" strokeWidth="6.5" strokeLinecap="square" />
                <path d="M76 24 L58 42" stroke="#4F6378" strokeWidth="6.5" strokeLinecap="square" />
                <path d="M24 76 L42 58" stroke="#4F6378" strokeWidth="6.5" strokeLinecap="square" />
                <path d="M76 76 L58 58" stroke="#4F6378" strokeWidth="6.5" strokeLinecap="square" />

                {/* High-KV Racing Motors */}
                <circle cx="24" cy="24" r="5.5" fill="#1E293B" stroke="#4F6378" strokeWidth="1" />
                <circle cx="76" cy="24" r="5.5" fill="#1E293B" stroke="#4F6378" strokeWidth="1" />
                <circle cx="24" cy="76" r="5.5" fill="#1E293B" stroke="#4F6378" strokeWidth="1" />
                <circle cx="76" cy="76" r="5.5" fill="#1E293B" stroke="#4F6378" strokeWidth="1" />

                {/* High-Pitch 3-Blade (Tri-Blade) Racing Propellers */}
                {/* Top Left Tri-Blade */}
                <path d="M24 24 L10 18 M24 24 L36 14 M24 24 L26 38" stroke="#94A3B8" strokeWidth="2.5" opacity="0.7" strokeLinecap="round" />
                <circle cx="24" cy="24" r="1.2" fill="#F8FAFC" />

                {/* Top Right Tri-Blade */}
                <path d="M76 24 L90 18 M76 24 L64 14 M76 24 L74 38" stroke="#94A3B8" strokeWidth="2.5" opacity="0.7" strokeLinecap="round" />
                <circle cx="76" cy="24" r="1.2" fill="#F8FAFC" />

                {/* Bottom Left Tri-Blade */}
                <path d="M24 76 L10 82 M24 76 L36 86 M24 76 L26 62" stroke="#94A3B8" strokeWidth="2.5" opacity="0.7" strokeLinecap="round" />
                <circle cx="24" cy="76" r="1.2" fill="#F8FAFC" />

                {/* Bottom Right Tri-Blade */}
                <path d="M76 76 L90 82 M76 76 L64 86 M76 76 L74 62" stroke="#94A3B8" strokeWidth="2.5" opacity="0.7" strokeLinecap="round" />
                <circle cx="76" cy="76" r="1.2" fill="#F8FAFC" />

                {/* Main Narrow Carbon Fiber Top-Plate Chassis */}
                <rect x="38" y="24" width="24" height="52" rx="4" fill="#2B3A4A" stroke="#4F6378" strokeWidth="1.5" />

                {/* Flight Controller Stacks / Esc Hardware Layout Lines */}
                <rect x="42" y="38" width="16" height="16" rx="2" fill="none" stroke="#1E293B" strokeWidth="1" />
                <line x1="42" y1="46" x2="58" y2="46" stroke="#1E293B" strokeWidth="0.6" />

                {/* Lithium Polymer (LiPo) Battery Strapped to Top/Bottom Plate */}
                <rect x="44" y="56" width="12" height="18" fill="#1E293B" rx="1" />
                {/* Yellow XT60 Power Connector Cable */}
                <path d="M50 74 L50 80 L46 80" fill="none" stroke="#FBBF24" strokeWidth="1" strokeLinecap="round" />

                {/* 1) Tilted HD Action Camera Case (e.g., GoPro Mount on Nose) */}
                <rect x="42" y="22" width="16" height="10" rx="1.5" fill="#1E293B" stroke="#4F6378" strokeWidth="0.8" />
                <circle cx="50" cy="27" r="2.5" fill="#334155" />

                {/* 2) Ultra-Low Latency FPV Pilot Camera (Protruding from front structural standoffs) */}
                <rect x="47" y="14" width="6" height="8" rx="1" fill="#1E293B" />
                <circle cx="50" cy="17" r="1.5" fill="#60A5FA" stroke="#3B82F6" strokeWidth="0.4" />
                {/* Sensor Lens Glare */}
                <circle cx="49.5" cy="16.5" r="0.4" fill="#FFFFFF" />

                {/* Rear 5.8GHz Omnidirectional VTX Video Antenna (Cloverleaf / Lollipop shape) */}
                <line x1="50" y1="76" x2="50" y2="88" stroke="#1E293B" strokeWidth="1.5" />
                <circle cx="50" cy="88" r="3" fill="#EF4444" stroke="#4F6378" strokeWidth="0.5" />
            </g>
        </svg>
    );
};

export default FpvDrone;
