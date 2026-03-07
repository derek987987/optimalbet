import React from 'react';
import { QuickBetRow } from './inputs/QuickBetRow';

interface BettingInputsProps {
  potSize: number;
  facingBet: number;
  onUpdatePot: (val: number) => void;
  onUpdateBet: (val: number) => void;
  selectedRatio: number | null;
  onSelectRatio: (ratio: number) => void;
}

export const BettingInputs: React.FC<BettingInputsProps> = ({
  potSize,
  facingBet,
  onUpdatePot,
  onUpdateBet,
  selectedRatio,
  onSelectRatio
}) => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="pot-input" className="text-xs font-semibold text-gray-500 uppercase mb-1">Current Pot ($)</label>
          <input
            id="pot-input"
            type="number"
            inputMode="decimal"
            value={potSize === 0 ? '' : potSize}
            onChange={(e) => onUpdatePot(parseFloat(e.target.value) || 0)}
            placeholder="0.00"
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md p-2 text-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-gray-100"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="facing-bet-input" className="text-xs font-semibold text-gray-500 uppercase mb-1">Facing Bet ($)</label>
          <input
            id="facing-bet-input"
            type="number"
            inputMode="decimal"
            value={facingBet === 0 ? '' : facingBet}
            onChange={(e) => onUpdateBet(parseFloat(e.target.value) || 0)}
            placeholder="0.00"
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md p-2 text-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>
      
      <QuickBetRow onSelectRatio={onSelectRatio} selectedRatio={selectedRatio} />
    </div>
  );
};
