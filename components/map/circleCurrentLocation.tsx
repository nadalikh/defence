"use client";

import React from 'react';

const CircleCurrentLocation = ({
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
            aria-label="Google Maps Current UseLocation Indicator"
        >
            <g id="google-maps-location-dot">
                {/* Translucent Blue Accuracy Shadow Radius Ring */}
                <circle
                    cx="60"
                    cy="60"
                    r="45"
                    fill="#1A73E8"
                    fillOpacity="0.15"
                    stroke="#1A73E8"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                />

                {/* Soft Drop Shadow Behind the Core White Border */}
                <circle
                    cx="60"
                    cy="60"
                    r="14"
                    fill="black"
                    opacity="0.15"
                    transform="translate(0, 2)"
                />

                {/* Crisp White Outer Ring Shield */}
                <circle
                    cx="60"
                    cy="60"
                    r="14"
                    fill="#FFFFFF"
                />

                {/* Signature Google Maps Vivid Blue Center Core Dot */}
                <circle
                    cx="60"
                    cy="60"
                    r="10"
                    fill="#1A73E8"
                />
            </g>
        </svg>
    );
};

export default CircleCurrentLocation;
