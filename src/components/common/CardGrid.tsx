import React from 'react';
import { RANK_NAMES, SUIT_NAMES, createCard } from '../../engine/core/cards';
import { getSuitColorClass, getSuitSymbol } from '../../engine/utils/card-naming';

interface CardGridProps {
  onToggleCard: (card: number) => void;
  selectedCards: number[];
  onClose?: () => void;
}

export const CardGrid: React.FC<CardGridProps> = ({ onToggleCard, selectedCards, onClose }) => {
  return (
    <div className="p-2">
      <div className="grid grid-cols-4 gap-2">
        {SUIT_NAMES.map((suitName, suitIdx) => (
          <div key={suitName} className="flex flex-col gap-1">
            <div className={`text-center font-bold text-[10px] uppercase mb-1 ${getSuitColorClass(suitIdx)}`}>
              {getSuitSymbol(suitIdx)}
            </div>
            {RANK_NAMES.map((rankName, rankIdx) => {
              const cardId = createCard(rankIdx, suitIdx);
              const isSelected = selectedCards.includes(cardId);
              
              return (
                <button
                  key={rankName}
                  onClick={() => onToggleCard(cardId)}
                  className={`h-9 rounded-lg font-bold text-xs transition-all relative ${
                    isSelected 
                      ? 'bg-white text-slate-900 border-2 border-blue-500 shadow-md ring-1 ring-blue-500/20' 
                      : 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100 hover:bg-blue-600 hover:text-white active:scale-95'
                  }`}
                >
                  {rankName}
                  {isSelected && (
                    <div className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full w-3 h-3 flex items-center justify-center">
                      <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      {onClose && (
        <button onClick={onClose} className="mt-4 w-full py-2 bg-slate-200 dark:bg-slate-800 text-slate-500 rounded-lg text-xs font-bold uppercase">
          Close
        </button>
      )}
    </div>
  );
};
