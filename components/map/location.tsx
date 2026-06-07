"use client";

import React from 'react';

const CurrentLocation = ({
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
            aria-label="Current UseLocation Radar Target Blueprint"
        >
            <g id="current-location-target">
                {/* Outer Survey Grid Ring */}
                <circle
                    cx="60"
                    cy="60"
                    r="48"
                    fill="none"
                    stroke="#4F6378"
                    strokeWidth="0.4"
                    strokeDasharray="4,4"
                    opacity="0.5"
                />

                {/* Primary Outer Target Ring */}
                <circle
                    cx="60"
                    cy="60"
                    r="36"
                    fill="none"
                    stroke="#4F6378"
                    strokeWidth="0.8"
                />

                {/* Secondary Inner Target Ring */}
                <circle
                    cx="60"
                    cy="60"
                    r="22"
                    fill="none"
                    stroke="#1E293B"
                    strokeWidth="0.6"
                />

                {/* Precision Crosshair Lines */}
                {/* Vertical Axis */}
                <line x1="60" y1="10" x2="60" y2="44" stroke="#4F6378" strokeWidth="0.5" />
                <line x1="60" y1="76" x2="60" y2="110" stroke="#4F6378" strokeWidth="0.5" />
                {/* Horizontal Axis */}
                <line x1="10" y1="60" x2="44" y2="60" stroke="#4F6378" strokeWidth="0.5" />
                <line x1="76" y1="60" x2="110" y2="60" stroke="#4F6378" strokeWidth="0.5" />

                {/* Micro-Tick Reticle Marks on the Outer Ring */}
                <line x1="60" y1="20" x2="60" y2="24" stroke="#60A5FA" strokeWidth="0.6" opacity="0.7" />
                <line x1="60" y1="96" x2="60" y2="100" stroke="#60A5FA" strokeWidth="0.6" opacity="0.7" />
                <line x1="20" y1="60" x2="24" y2="60" stroke="#60A5FA" strokeWidth="0.6" opacity="0.7" />
                <line x1="96" y1="60" x2="100" y2="60" stroke="#60A5FA" strokeWidth="0.6" opacity="0.7" />

                {/* Center Core GPS Beacon Housing */}
                <circle
                    cx="60"
                    cy="60"
                    r="9"
                    fill="#2B3A4A"
                    stroke="#4F6378"
                    strokeWidth="0.5"
                />

                {/* Active Current UseLocation Core Dot */}
                <circle
                    cx="60"
                    cy="60"
                    r="4.5"
                    fill="#60A5FA"
                />
            </g>
        </svg>
    );
};

export default CurrentLocation;
