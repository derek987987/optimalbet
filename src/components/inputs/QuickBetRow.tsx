import React from 'react';

interface QuickBetRowProps {
  onSelectRatio: (ratio: number) => void;
  selectedRatio: number | null;
}

const BET_OPTIONS = [
  { label: '1/4', ratio: 0.25 },
  { label: '1/3', ratio: 0.33 },
  { label: '1/2', ratio: 0.5 },
  { label: '2/3', ratio: 0.66 },
  { label: '3/4', ratio: 0.75 },
  { label: 'Pot', ratio: 1.0 },
];

export const QuickBetRow: React.FC<QuickBetRowProps> = ({ onSelectRatio, selectedRatio }) => {
  return (
    <div className="grid grid-cols-6 gap-1 my-2">
      {BET_OPTIONS.map((opt) => (
        <button
          key={opt.label}
          onClick={() => onSelectRatio(opt.ratio)}
          className={`
            px-1 py-2 text-[10px] font-bold uppercase rounded transition-colors
            ${selectedRatio === opt.ratio 
              ? 'bg-blue-600 text-white shadow-inner' 
              : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }
          `}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};
