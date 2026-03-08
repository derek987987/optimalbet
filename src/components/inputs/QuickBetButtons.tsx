import React from 'react';
import { Plus, RotateCcw } from 'lucide-react';

interface QuickBetButtonsProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
  onIncrement: (amt: number) => void;
  onReset: () => void;
}

export const QuickBetButtons: React.FC<QuickBetButtonsProps> = ({
  label,
  value,
  onChange,
  onIncrement,
  onReset
}) => {
  const increments = [10, 20, 50];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{label}</label>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="number"
            inputMode="decimal"
            value={value === 0 ? '' : value}
            onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
            placeholder="0"
            className="w-full border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-xl p-3 pr-10 text-xl font-bold focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-gray-100 transition-all"
          />
          <button 
            onClick={onReset}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-red-500 transition-colors"
          >
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      <div className="flex gap-2">
        {increments.map(amt => (
          <button
            key={amt}
            onClick={() => onIncrement(amt)}
            className="flex-1 flex items-center justify-center gap-1 bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 py-2 rounded-lg text-xs font-black transition-all active:scale-95 border border-gray-200 dark:border-gray-700 hover:border-blue-400"
          >
            <Plus size={12} />
            {amt}
          </button>
        ))}
      </div>
    </div>
  );
};
