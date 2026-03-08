import React from 'react';
import { QuickBetButtons } from './inputs/QuickBetButtons';
import { QuickBetRow } from './inputs/QuickBetRow';

interface BettingInputsProps {
  potSize: number;
  facingBet: number;
  onUpdatePot: (val: number) => void;
  onUpdateBet: (val: number) => void;
  onIncrementPot: (amt: number) => void;
  onIncrementBet: (amt: number) => void;
  onResetPot: () => void;
  onResetBet: () => void;
  selectedRatio: number | null;
  onSelectRatio: (ratio: number) => void;
}

export const BettingInputs: React.FC<BettingInputsProps> = ({
  potSize,
  facingBet,
  onUpdatePot,
  onUpdateBet,
  onIncrementPot,
  onIncrementBet,
  onResetPot,
  onResetBet,
  selectedRatio,
  onSelectRatio
}) => {
  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="flex flex-col gap-6 bg-gray-50/50 dark:bg-gray-900/20 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
        <QuickBetButtons
          label="Current Pot ($)"
          value={potSize}
          onChange={onUpdatePot}
          onIncrement={onIncrementPot}
          onReset={onResetPot}
        />
        
        <QuickBetButtons
          label="Facing Bet ($)"
          value={facingBet}
          onChange={onUpdateBet}
          onIncrement={onIncrementBet}
          onReset={onResetBet}
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider px-1">Facing Bet Ratio</label>
        <QuickBetRow onSelectRatio={onSelectRatio} selectedRatio={selectedRatio} />
      </div>
    </div>
  );
};
