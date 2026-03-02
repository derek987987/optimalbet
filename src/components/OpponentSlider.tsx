import React from 'react';

interface OpponentSliderProps {
  count: number;
  onChange: (val: number) => void;
}

export const OpponentSlider: React.FC<OpponentSliderProps> = ({ count, onChange }) => {
  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between items-center mb-2">
        <label className="text-xs font-semibold text-gray-500 uppercase">Random Opponents</label>
        <span className="text-lg font-bold text-blue-600">{count}</span>
      </div>
      <input
        type="range"
        min="1"
        max="9"
        step="1"
        value={count}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
      <div className="flex justify-between text-[10px] text-gray-400 mt-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => <span key={n}>{n}</span>)}
      </div>
    </div>
  );
};
