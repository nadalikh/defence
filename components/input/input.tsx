// src/components/ui/password-input/Input.tsx
'use client';


import React, {forwardRef} from "react";
import {PasswordInputProps} from "@/components/passwordInput/types";

const sizeClasses = {
    sm: 'px-2 py-1.5 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-2.5 text-lg',
};

export const Input = forwardRef<HTMLInputElement, PasswordInputProps>(
    (
        {
            value,
            onChange,
            label,
            error,
            helperText,
            required = false,
            disabled = false,
            placeholder = 'Enter password',
            className = '',
            containerClassName = '',
            inputSize = 'md',
            id,
            name,
            autoComplete = 'current-password',
            ...restProps
        },
        ref
    ) => {
        const inputId = id || name || 'mobile-input';
        const hasError = !!error;

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
        };

        return (
            <div className={`w-full ${containerClassName}`}>
                {/* Label */}
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-right text-sm font-medium text-gray-300 mb-1"
                    >
                        {label}
                        {required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                )}

                {/* Input wrapper */}
                <div className="relative">
                    <input
                        ref={ref}
                        id={inputId}
                        name={name}
                        type={'text'}
                        value={value}
                        onChange={handleChange}
                        placeholder={placeholder}
                        disabled={disabled}
                        required={required}
                        autoComplete={autoComplete}
                        aria-invalid={hasError}
                        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
                        className={`
              w-full
              ltr
              ${sizeClasses[inputSize]}
              pr-10
              rounded-lg
              border
              ${hasError
                            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                            : 'border-gray-300 dark:border-gray-600 '
                        }
              ${disabled
                            ? 'bg-gray-100 cursor-not-allowed text-gray-500'
                            : 'bg-white text-gray-900 '
                        }
              focus:outline-none focus:ring-2 focus:ring-opacity-50
              transition-all duration-200
              ${className}
            `}
                        {...restProps}
                    />
                </div>

                {/* Error message */}
                {error && (
                    <p id={`${inputId}-error`} className="text-right mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                        {error}
                    </p>
                )}

                {/* Helper text */}
                {helperText && !error && (
                    <p id={`${inputId}-helper`} className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
