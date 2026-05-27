// src/components/ui/password-input/Input.types.ts
import { InputHTMLAttributes } from 'react';

export interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
    /** Current password value */
    value: string;
    /** Callback when password changes */
    onChange: (value: string) => void;
    /** Label text for the input */
    label?: string;
    /** Error message to display */
    error?: string;
    /** Helper text below the input */
    helperText?: string;
    /** Whether the input is required */
    required?: boolean;
    /** Container className for additional styling */
    containerClassName?: string;
    /** Size variant */
    inputSize?: 'sm' | 'md' | 'lg';
}

export interface PasswordStrength {
    text: string;
    color: string;
}
