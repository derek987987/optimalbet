import React, { useCallback, useMemo } from 'react';
import { CardGrid } from './CardGrid';
import { CardSlot } from './CardSlot';
import { useCardSelection } from '../../hooks/useCardSelection';
import { useCardBuffer } from '../../hooks/useCardBuffer';
import { cardToString, stringToCard } from '../../engine/core/cards';

interface CardSlotGroupProps {
  holeCards: number[];
  boardCards: number[];
  onSelectCard: (type: 'hole' | 'board', index: number, card: number | null) => void;
  onClear: () => void;
}

export const CardSlotGroup: React.FC<CardSlotGroupProps> = ({
  holeCards,
  boardCards,
  onSelectCard,
  onClear
}) => {
  const { 
    isOpen, 
    activeSlotIndex, 
    openGrid, 
    closeGrid, 
    activeSlotId, 
    setActiveSlotId 
  } = useCardSelection();

  const selectedCardsStr = useMemo(() => 
    [...holeCards, ...boardCards].filter(c => c !== undefined).map(cardToString),
    [holeCards, boardCards]
  );

  const handleCardConfirm = useCallback((cardStr: string) => {
    if (activeSlotId === null) return;
    
    const cardId = stringToCard(cardStr);
    const [type, indexStr] = activeSlotId.split('-');
    const index = parseInt(indexStr);

    if (type === 'hole') {
      onSelectCard('hole', index, cardId);
    } else {
      onSelectCard('board', index, cardId);
    }
    
    // Auto-advance focus if possible
    if (type === 'hole' && index === 0) {
      setActiveSlotId('hole-1');
    } else if (type === 'hole' && index === 1) {
      setActiveSlotId('board-0');
    } else if (type === 'board' && index < 4) {
      setActiveSlotId(`board-${index + 1}`);
    } else {
      setActiveSlotId(null);
    }
  }, [activeSlotId, onSelectCard, setActiveSlotId]);

  const { 
    buffer, 
    suggestions, 
    selectedIndex, 
    setSelectedIndex, 
    updateBuffer, 
    clearBuffer, 
    onConfirmSuggestion 
  } = useCardBuffer(handleCardConfirm, selectedCardsStr);

  const handleSlotClick = (type: 'hole' | 'board', index: number) => {
    const slotId = `${type}-${index}`;
    setActiveSlotId(slotId);
    clearBuffer();
    // Open selection grid immediately on first click
    openGrid(type === 'hole' ? index : index + 2);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setActiveSlotId(null);
      clearBuffer();
    } else if (e.key === 'Backspace') {
      if (activeSlotId) {
        const [type, indexStr] = activeSlotId.split('-');
        onSelectCard(type as 'hole' | 'board', parseInt(indexStr), null);
        clearBuffer();
      }
    } else if (e.key === 'ArrowRight') {
      setSelectedIndex(prev => (prev + 1) % suggestions.length);
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      setSelectedIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
      e.preventDefault();
    } else if (e.key === 'Enter') {
      if (suggestions.length > 0) {
        onConfirmSuggestion();
        e.preventDefault();
      }
    } else if (e.key.length === 1) {
      updateBuffer(e.key);
    }
  };

  const handleGridSelect = (cardStr: string) => {
    if (activeSlotIndex === null) return;
    const cardId = stringToCard(cardStr);
    
    if (activeSlotIndex < 2) {
      onSelectCard('hole', activeSlotIndex, cardId);
    } else {
      onSelectCard('board', activeSlotIndex - 2, cardId);
    }
    closeGrid();
    setActiveSlotId(null);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xs font-bold text-gray-500 uppercase">Hole Cards</h3>
        <button onClick={onClear} className="text-[10px] text-blue-500 font-bold uppercase">Clear All</button>
      </div>
      <div className="flex gap-2">
        <CardSlot 
          id="hole-0"
          card={holeCards[0]} 
          label="H1" 
          onClick={() => handleSlotClick('hole', 0)}
          onKeyDown={handleKeyDown}
          isFocused={activeSlotId === 'hole-0'}
          buffer={activeSlotId === 'hole-0' ? buffer : undefined}
          suggestions={activeSlotId === 'hole-0' ? suggestions : []}
          selectedIndex={selectedIndex}
          onConfirmSuggestion={onConfirmSuggestion}
          className="hole-card-slot" 
        />
        <CardSlot 
          id="hole-1"
          card={holeCards[1]} 
          label="H2" 
          onClick={() => handleSlotClick('hole', 1)}
          onKeyDown={handleKeyDown}
          isFocused={activeSlotId === 'hole-1'}
          buffer={activeSlotId === 'hole-1' ? buffer : undefined}
          suggestions={activeSlotId === 'hole-1' ? suggestions : []}
          selectedIndex={selectedIndex}
          onConfirmSuggestion={onConfirmSuggestion}
          className="hole-card-slot"
        />
      </div>

      <h3 className="text-xs font-bold text-gray-500 uppercase mt-2">Board Cards</h3>
      <div className="flex gap-2">
        {[0, 1, 2, 3, 4].map(i => (
          <CardSlot 
            key={i}
            id={`board-${i}`}
            card={boardCards[i]} 
            label={`B${i+1}`} 
            onClick={() => handleSlotClick('board', i)}
            onKeyDown={handleKeyDown}
            isFocused={activeSlotId === `board-${i}`}
            buffer={activeSlotId === `board-${i}` ? buffer : undefined}
            suggestions={activeSlotId === `board-${i}` ? suggestions : []}
            selectedIndex={selectedIndex}
            onConfirmSuggestion={onConfirmSuggestion}
            className="board-card-slot"
          />
        ))}
      </div>

      <CardGrid
        isOpen={isOpen}
        onClose={closeGrid}
        selectedCards={selectedCardsStr}
        onSelect={handleGridSelect}
      />
    </div>
  );
};
