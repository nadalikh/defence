import React, { useId } from 'react';
interface RadioProps {
    label: string;
    value: string;
    name: string;
    checked: boolean;
    onChange: (value: string) => void;
    disabled?: boolean;
    className?: string;
}
export const Radio: React.FC<RadioProps> = ({
                                                label,
                                                value,
                                                name,
                                                checked,
                                                onChange,
                                                disabled = false,
                                                className = '',
                                            }) => {
    const id = useId();

    const handleChange = () => {
        if (!disabled) {
            onChange(value);
        }
    };

    return (
        <label
            htmlFor={id}
            className={`
            mt-3
        inline-flex items-center gap-2 cursor-pointer transition-all duration-200
        ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:opacity-80'}
        ${className}
      `}
        >
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={handleChange}
                disabled={disabled}
                className="peer sr-only"
            />
            <div
                className={`
          w-5 h-5 rounded-full border-2 flex items-center justify-center
          transition-all duration-200 ease-in-out
          ${checked
                    ? 'border-blue-500'
                    : 'border-gray-300 dark:border-gray-600'
                }
          ${!disabled && 'peer-focus-visible:ring-2 peer-focus-visible:ring-blue-400 peer-focus-visible:ring-offset-2'}
          ${!disabled && 'peer-active:scale-95'}
        `}
                aria-hidden="true"
            >
                <div
                    className={`
            w-2.5 h-2.5 rounded-full bg-blue-500 transition-all duration-200
            ${checked ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
          `}
                />
            </div>

            <span className={`
        text-sm font-medium text-gray-900
        ${disabled ? 'text-gray-400 dark:text-gray-500' : ''}
      `}>
        {label}
      </span>
        </label>
    );
};

export interface RadioOption {
    label: string;
    value: string;
}

interface RadioGroupProps {
    options: RadioOption[];
    value: string;
    onChange: (value: string) => void;
    name: string;
    disabled?: boolean;
    orientation?: 'horizontal' | 'vertical';
    groupLabel?: string;
    className?: string;
}
export const RadioGroup: React.FC<RadioGroupProps> = ({
                                                          options,
                                                          value,
                                                          onChange,
                                                          name,
                                                          disabled = false,
                                                          orientation = 'vertical',
                                                          groupLabel,
                                                          className = '',
                                                      }) => {
    return (
        <fieldset className={className}>
            {groupLabel && (
                <legend className="mb-2 text-sm font-semibold text-gray-800">
                    {groupLabel}
                </legend>
            )}
            <div
                className={`
          mb-3 flex px-1
          ${orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap'}
        `}
            >
                {options.map((option) => (
                    <Radio
                        key={option.value}
                        label={option.label}
                        value={option.value}
                        name={name}
                        checked={value === option.value}
                        onChange={onChange}
                        disabled={disabled}
                    />
                ))}
            </div>
        </fieldset>
    );
};
export default Radio;
