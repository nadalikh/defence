"use client";

import React from "react";

const Unknown = ({
                            width = "40px",
                            height = "40px",
                            className = ""
                        }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width={width}
            height={height}
            className={className}
            aria-label="Unknown"
        >
            <g id="unknown">
                {/* Simple Question Mark */}
                <path
                    d="M50 25
                       C35 25 30 35 30 42
                       C30 50 38 55 45 57
                       C50 58.5 52 62 52 68"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                />

                {/* Dot */}
                <circle cx="50" cy="82" r="4" fill="currentColor" />
            </g>
        </svg>
    );
};

export default Unknown;
