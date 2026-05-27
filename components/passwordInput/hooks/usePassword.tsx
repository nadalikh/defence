// src/components/ui/password-input/usePasswordInput.ts
import {useState, useCallback} from 'react';

export const usePasswordInput = (initialValue: string = '') => {
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState(initialValue);

    const toggleShowPassword = useCallback(() => {
        setShowPassword(prev => !prev);
    }, []);

    const handleChange = useCallback((newValue: string) => {
        setValue(newValue);
    }, []);

    return {
        showPassword,
        toggleShowPassword,
        value,
        handleChange,
        setValue,
    };
};
