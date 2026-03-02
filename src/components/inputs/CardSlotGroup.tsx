import React, { useState } from 'react';
import { getCardName, getSuitSymbol, getSuitColorClass } from '../../engine/utils/card-naming';
import { CardModal } from '../common/CardModal';

interface CardSlotGroupProps {
  holeCards: number[];
  boardCards: number[];
  onSelectCard: (card: number) => void;
  onClear: () => void;
}

const CardSlot: React.FC<{ card?: number; label: string; onClick: () => void; isActive?: boolean; className?: string }> = ({ 
  card, label, onClick, isActive, className = ''
}) => {
  const suit = card !== undefined ? card % 4 : 0;
  const symbol = card !== undefined ? getSuitSymbol(suit) : null;
  const colorClass = card !== undefined ? getSuitColorClass(suit) : '';
  const name = card !== undefined ? getCardName(card).slice(0, -1) : '';

  return (
    <div 
      onClick={onClick}
      className={`
        w-14 h-20 rounded-lg border-2 flex flex-col items-center justify-center cursor-pointer transition-all active:scale-95 ${className}
        ${card !== undefined ? 'bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-600' : 'bg-gray-100 border-dashed border-gray-300 dark:bg-gray-900 dark:border-gray-700'}
        ${isActive ? 'ring-2 ring-blue-500 border-blue-500' : ''}
      `}
    >
      {card !== undefined ? (
        <>
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{name}</span>
          <span className={`text-2xl leading-none ${colorClass}`}>{symbol}</span>
        </>
      ) : (
        <span className="text-[10px] text-gray-400 font-bold uppercase">{label}</span>
      )}
    </div>
  );
};

export const CardSlotGroup: React.FC<CardSlotGroupProps> = ({
  holeCards,
  boardCards,
  onSelectCard,
  onClear
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlot, setActiveSlot] = useState<'hole' | 'board' | null>(null);

  const handleSlotClick = (type: 'hole' | 'board') => {
    setActiveSlot(type);
    setIsModalOpen(true);
  };

  const handleCardSelect = (card: number) => {
    onSelectCard(card);
  };

  const allSelected = [...holeCards, ...boardCards];

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xs font-bold text-gray-500 uppercase">Hole Cards</h3>
        <button onClick={onClear} className="text-[10px] text-blue-500 font-bold uppercase">Clear</button>
      </div>
      <div className="flex gap-2">
        <CardSlot 
          card={holeCards[0]} 
          label="H1" 
          onClick={() => handleSlotClick('hole')}
          className="hole-card-slot" 
        />
        <CardSlot 
          card={holeCards[1]} 
          label="H2" 
          onClick={() => handleSlotClick('hole')}
          className="hole-card-slot"
        />
      </div>

      <h3 className="text-xs font-bold text-gray-500 uppercase mt-2">Board Cards</h3>
      <div className="flex gap-2">
        {[0, 1, 2, 3, 4].map(i => (
          <CardSlot 
            key={i}
            card={boardCards[i]} 
            label={`B${i+1}`} 
            onClick={() => handleSlotClick('board')}
            className="board-card-slot"
          />
        ))}
      </div>

      <CardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCards={allSelected}
        onSelectCard={handleCardSelect}
      />
    </div>
  );
};
