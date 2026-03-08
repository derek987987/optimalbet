import React from 'react';
import { getSuitSymbol, getSuitColorClass } from '../../engine/utils/card-naming';

interface CardSuggestionProps {
  suggestions: string[];
  selectedIndex: number;
  onSelect: (card: string) => void;
}

export const CardSuggestion: React.FC<CardSuggestionProps> = ({ 
  suggestions, 
  selectedIndex,
  onSelect 
}) => {
  if (suggestions.length === 0) return null;

  return (
    <div className="absolute -top-14 left-1/2 -translate-x-1/2 flex gap-1 p-1.5 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
      {suggestions.map((card, i) => {
        const suitChar = card[1];
        const suitIndex = ['c', 'd', 'h', 's'].indexOf(suitChar);
        const symbol = getSuitSymbol(suitIndex);
        const colorClass = getSuitColorClass(suitIndex);
        const rank = card[0];

        return (
          <button
            key={card}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(card);
            }}
            className={`
              w-10 h-10 rounded-lg flex flex-col items-center justify-center transition-all
              ${i === selectedIndex 
                ? 'bg-blue-500 text-white scale-110 shadow-lg' 
                : 'bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
              }
            `}
          >
            <span className="text-[10px] font-black leading-none">{rank}</span>
            <span className={`text-xl leading-none ${i === selectedIndex ? 'text-white' : colorClass}`}>{symbol}</span>
          </button>
        );
      })}
    </div>
  );
};
