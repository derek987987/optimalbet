import React from 'react';
import { RANGE_PRESETS } from '../../engine/core/ranges';
import type { RangePreset } from '../../engine/core/ranges';

interface OpponentConfigProps {
  count: number;
  rangePreset: RangePreset;
  onCountChange: (count: number) => void;
  onRangeChange: (range: RangePreset) => void;
}

export const OpponentConfig: React.FC<OpponentConfigProps> = ({
  count,
  rangePreset,
  onCountChange,
  onRangeChange
}) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="flex justify-between items-center mb-4">
        <label className="text-xs font-bold text-gray-500 uppercase">Opponents</label>
        <div className="flex gap-2">
          <button 
            onClick={() => onCountChange(Math.max(1, count - 1))}
            className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold"
          >
            -
          </button>
          <span className="text-lg font-bold w-4 text-center text-gray-800 dark:text-gray-100">{count}</span>
          <button 
            onClick={() => onCountChange(Math.min(9, count + 1))}
            className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <label className="text-xs font-bold text-gray-500 uppercase">Range</label>
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          {(Object.keys(RANGE_PRESETS) as RangePreset[]).map((preset) => (
            <button
              key={preset}
              onClick={() => onRangeChange(preset)}
              className={`text-[10px] px-3 py-1.5 rounded-md font-bold transition-all ${
                rangePreset === preset 
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                  : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
              }`}
            >
              {preset}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
