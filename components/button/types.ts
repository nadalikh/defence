// src/components/ui/button/Button.types.ts
import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'ghost'
    | 'outline';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Button content */
    children: ReactNode;
    /** Visual variant */
    variant?: ButtonVariant;
    /** Size variant */
    size?: ButtonSize;
    /** Full width button */
    fullWidth?: boolean;
    /** Loading state */
    isLoading?: boolean;
    /** Left icon */
    leftIcon?: ReactNode;
    /** Right icon */
    rightIcon?: ReactNode;
    /** Rounded full (pill shape) */
    rounded?: boolean;
    /** Remove padding for icon-only buttons */
    iconOnly?: boolean;
}
