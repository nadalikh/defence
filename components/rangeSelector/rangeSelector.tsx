import React, { useState } from 'react';

interface NumberRangeSelectorProps {
    /** Initial value (0-360), default 0 */
    initialValue?: number;
    /** Callback when value changes */
    onChange?: (value: number) => void;
    /** Step increment, default 1 */
    step?: number;
}

const NumberRangeSelector: React.FC<NumberRangeSelectorProps> = ({
                                                                     initialValue = 0,
                                                                     onChange,
                                                                     step = 1,
                                                                 }) => {
    const [value, setValue] = useState<number>(initialValue);

    const clamp = (num: number): number => Math.min(360, Math.max(0, num));

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVal = parseFloat(e.target.value);
        setValue(newVal);
        onChange?.(newVal);
    };

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = parseFloat(e.target.value);
        const newVal = clamp(isNaN(raw) ? 0 : raw);
        setValue(newVal);
        onChange?.(newVal);
    };

    return (
        <div className="w-full max-w-md rounded-xl border border-gray-200 bg-[#d1d1d1] p-2  shadow-md ">

            {/* Current value display */}
            <div className="mb-5 text-center">
        <span className="text-3xl font-bold text-gray-900">
          {Math.round(value)}°
        </span>
            </div>

            {/* Slider */}
            <div className="mb-6">
                <input
                    type="range"
                    min="0"
                    max="359"
                    step={step}
                    value={value}
                    onChange={handleSliderChange}
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-800 accent-blue-600 "
                />
                <div className="mt-1 flex justify-between text-xs">
                    <span>0</span>
                    <span>90</span>
                    <span>180</span>
                    <span>270</span>
                    <span>359</span>
                </div>
            </div>
        </div>
    );
};

export default NumberRangeSelector;
