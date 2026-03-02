import React from 'react';

interface BetSliderProps {
  value: number;
  min: number;
  max: number;
  onChange: (val: number) => void;
}

export const BetSlider: React.FC<BetSliderProps> = ({
  value,
  min,
  max,
  onChange
}) => {
  return (
    <div className="px-4 mt-4">
      <div className="flex justify-between items-center mb-2">
        <label className="text-xs font-bold text-gray-500 uppercase">Bet Sizing</label>
        <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
    </div>
  );
};
