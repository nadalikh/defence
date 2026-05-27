// src/components/ui/button/Button.tsx
'use client';

import React, {forwardRef} from 'react';
import {ButtonProps} from './types';
import {ButtonSize} from "@/components/button/types";

// Variant styles
const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-sm hover:shadow focus:ring-blue-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 active:bg-gray-800 text-white shadow-sm hover:shadow focus:ring-gray-500',
    success: 'bg-green-600 hover:bg-green-700 active:bg-green-800 text-white shadow-sm hover:shadow focus:ring-green-500',
    danger: 'bg-red-600 hover:bg-red-700 active:bg-red-800 text-white shadow-sm hover:shadow focus:ring-red-500',
    warning: 'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white shadow-sm hover:shadow focus:ring-yellow-500',
    info: 'bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800 text-white shadow-sm hover:shadow focus:ring-cyan-500',
    ghost: 'bg-transparent hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-400',
    outline: 'bg-transparent border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 focus:ring-gray-400',
};

// Size styles
const sizeStyles: Record<ButtonSize, string> = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
    xl: 'px-6 py-3.5 text-base',
};

// Icon only sizes (removes padding)
const iconOnlySizes: Record<ButtonSize, string> = {
    xs: 'p-1.5 text-xs',
    sm: 'p-2 text-sm',
    md: 'p-2.5 text-sm',
    lg: 'p-3 text-base',
    xl: 'p-3.5 text-base',
};

// Spinner sizes
const spinnerSizes: Record<ButtonSize, string> = {
    xs: 'w-3 h-3',
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            variant = 'primary',
            size = 'md',
            fullWidth = false,
            isLoading = false,
            leftIcon,
            rightIcon,
            rounded = false,
            iconOnly = false,
            disabled,
            className = '',
            type = 'button',
            ...restProps
        },
        ref
    ) => {
        const isDisabled = disabled || isLoading;

        const baseStyles = `
      inline-flex items-center justify-center
      font-medium relative
      transition-all duration-200 ease-in-out
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900
      disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
      active:scale-[0.98]
      ${rounded ? 'rounded-full' : 'rounded-lg'}
      ${fullWidth ? 'w-full' : ''}
      ${variantStyles[variant]}
      ${iconOnly ? iconOnlySizes[size] : sizeStyles[size]}
      ${className}
    `;

        // Loading spinner component
        const Spinner = () => (
            <svg
                className={`animate-spin ${spinnerSizes[size]} text-current`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
            </svg>
        );

        return (
            <button
                ref={ref}
                type={type}
                disabled={isDisabled}
                className={baseStyles}
                {...restProps}
            >
                {/* Loading state */}
                {isLoading && (
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><Spinner/></span>
                )}

                {/* Button content - hidden when loading */}
                <span className={`inline-flex items-center gap-2 ${isLoading ? 'invisible' : ''}`}>
                    {leftIcon && <span className="shrink-0">{leftIcon}</span>}
                    {!iconOnly && children}
                    {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </span>
            </button>
        );
    }
);

Button.displayName = 'Button';
