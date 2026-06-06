"use client";

import React from 'react';

const Uav = ({
                        width = "40px",
                        height = "40px",
                        className = ""
                    }) => {
    return (
        <svg
            xmlns="http://w3.org"
            viewBox="0 0 120 100"
            width={width}
            height={height}
            className={className}
            aria-label="Military UAV Drone Blueprint"
        >
            <g id="military-uav">
                {/* Main Fuselage / Body Hull */}
                {/* Slender, aerodynamic frame widening slightly at the nose for the satcom hump */}
                <path
                    d="M60 15
                       C63 15, 64 22, 63 35
                       C62 50, 62 75, 61.5 88
                       L60 94
                       L58.5 88
                       C58 75, 58 50, 57 35
                       C56 22, 57 15, 60 15 Z"
                    fill="#2B3A4A"
                    stroke="#4F6378"
                    strokeWidth="0.5"
                    strokeLinejoin="round"
                />

                {/* Long, Slender High-Aspect Glider Wings */}
                <path
                    d="M58 40
                       L6 42
                       L6 45
                       L58 47 Z"
                    fill="#2B3A4A"
                    stroke="#4F6378"
                    strokeWidth="0.4"
                    strokeLinejoin="round"
                />
                <path
                    d="M62 40
                       L114 42
                       L114 45
                       L62 47 Z"
                    fill="#2B3A4A"
                    stroke="#4F6378"
                    strokeWidth="0.4"
                    strokeLinejoin="round"
                />

                {/* Wing Control Surfaces (Ailerons / Flaps Panel Lines) */}
                <path d="M12 44.5 L56 46" fill="none" stroke="#1E293B" strokeWidth="0.3" strokeLinecap="round" />
                <path d="M108 44.5 L64 46" fill="none" stroke="#1E293B" strokeWidth="0.3" strokeLinecap="round" />

                {/* V-Tail Stabilizers (Upside Down V-Shape Characteristic of MQ-9) */}
                <path d="M59 86 L44 96 L45.5 98 L59 90 Z" fill="#2B3A4A" stroke="#4F6378" strokeWidth="0.4" />
                <path d="M61 86 L76 96 L74.5 98 L61 90 Z" fill="#2B3A4A" stroke="#4F6378" strokeWidth="0.4" />
                {/* Ventral Ventral Fin (Bottom Rudder Line) */}
                <path d="M60 90 L60 99" fill="none" stroke="#4F6378" strokeWidth="0.5" />

                {/* Fuselage Nose Satcom Bulge Lines */}
                <path d="M57.5 25 C58.5 27, 61.5 27, 62.5 25" fill="none" stroke="#1E293B" strokeWidth="0.4" />
                <path d="M57 32 L63 32" fill="none" stroke="#1E293B" strokeWidth="0.3" />
                <path d="M60 15 L60 85" fill="none" stroke="#1E293B" strokeWidth="0.3" />

                {/* Surveillance Gimbal Camera Turret (Under Nose) */}
                <circle cx="60" cy="21" r="2.5" fill="#1E293B" stroke="#4F6378" strokeWidth="0.4" />
                {/* Multi-spectral Sensor Lens */}
                <circle cx="60" cy="21" r="1" fill="#60A5FA" />

                {/* Precision Strike Underwing Pylons */}
                <rect x="24" y="44.5" width="4" height="1.5" fill="#1E293B" />
                <rect x="92" y="44.5" width="4" height="1.5" fill="#1E293B" />

                {/* AGM-114 Hellfire Missiles */}
                <path d="M23 46 L29 46 L29 47.5 L23 47.5 Z" fill="#94A3B8" stroke="#4F6378" strokeWidth="0.2" />
                <path d="M91 46 L97 46 L97 47.5 L91 47.5 Z" fill="#94A3B8" stroke="#4F6378" strokeWidth="0.2" />

                {/* Rear Pusher Propeller Engine Hub */}
                <rect x="58.5" y="93" width="3" height="2" fill="#1E293B" />
                {/* Propeller Blades */}
                <path d="M52 94 C52 93.5, 68 93.5, 68 94 C68 94.5, 52 94.5, 52 94 Z" fill="#F8FAFC" opacity="0.4" />
            </g>
        </svg>
    );
};

export default Uav;
