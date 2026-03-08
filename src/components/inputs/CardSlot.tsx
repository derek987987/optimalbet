import React, { useRef, useEffect } from 'react';
import { getCardName, getSuitSymbol, getSuitColorClass } from '../../engine/utils/card-naming';
import { CardSuggestion } from '../common/CardSuggestion';

interface CardSlotProps {
  id: string;
  card?: number;
  label: string;
  onClick: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onBlur?: () => void;
  isFocused?: boolean;
  className?: string;
  buffer?: string;
  suggestions?: string[];
  selectedIndex?: number;
  onConfirmSuggestion?: () => void;
}

export const CardSlot: React.FC<CardSlotProps> = ({ 
  id, card, label, onClick, onKeyDown, onBlur, isFocused, className = '', 
  buffer, suggestions = [], selectedIndex = 0, onConfirmSuggestion
}) => {
  const slotRef = useRef<HTMLDivElement>(null);

  const suit = card !== undefined ? card % 4 : 0;
  const symbol = card !== undefined ? getSuitSymbol(suit) : null;
  const colorClass = card !== undefined ? getSuitColorClass(suit) : '';
  const name = card !== undefined ? getCardName(card).slice(0, -1) : '';

  useEffect(() => {
    if (isFocused && slotRef.current) {
      slotRef.current.focus();
    }
  }, [isFocused]);

  return (
    <div 
      ref={slotRef}
      tabIndex={0}
      id={id}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      className={`
        relative w-14 h-20 rounded-lg border-2 flex flex-col items-center justify-center cursor-pointer transition-all outline-none
        ${card !== undefined ? 'bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-600' : 'bg-gray-100 border-dashed border-gray-300 dark:bg-gray-900 dark:border-gray-700'}
        ${isFocused ? 'ring-2 ring-blue-500 border-blue-500 scale-105 z-10 shadow-lg' : 'active:scale-95'}
        ${className}
      `}
    >
      {isFocused && (
        <CardSuggestion 
          suggestions={suggestions} 
          selectedIndex={selectedIndex} 
          onSelect={() => {
            if (onConfirmSuggestion) onConfirmSuggestion();
          }}
        />
      )}

      {card !== undefined ? (
        <>
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{name}</span>
          <span className={`text-2xl leading-none ${colorClass}`}>{symbol}</span>
        </>
      ) : (
        <>
          <span className="text-[10px] text-gray-400 font-bold uppercase">{label}</span>
          {isFocused && buffer && (
            <div className="absolute inset-0 flex items-center justify-center bg-blue-500/10 rounded-lg">
              <span className="text-xl font-black text-blue-600 dark:text-blue-400 animate-pulse uppercase">
                {buffer}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};
