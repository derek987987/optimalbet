import React from 'react';

interface QuickBetButtonsProps {
  potSize: number;
  heroStack: number;
  onBetSelect: (amount: number) => void;
}

export const QuickBetButtons: React.FC<QuickBetButtonsProps> = ({
  potSize,
  heroStack,
  onBetSelect
}) => {
  const bets = [
    { label: '1/3 Pot', value: potSize / 3 },
    { label: '1/2 Pot', value: potSize / 2 },
    { label: 'Pot', value: potSize },
    { label: 'All-In', value: heroStack }
  ];

  return (
    <div className="grid grid-cols-4 gap-2 mt-4 px-4">
      {bets.map((bet) => (
        <button
          key={bet.label}
          onClick={() => onBetSelect(Math.round(bet.value))}
          className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold py-2 rounded-lg border border-blue-200 dark:border-blue-800 active:scale-95 transition-all"
        >
          {bet.label}
        </button>
      ))}
    </div>
  );
};
