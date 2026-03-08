import { useState, useCallback } from 'react';

export const useCardSelection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlotIndex, setActiveSlotIndex] = useState<number | null>(null);
  
  /**
   * activeSlotId is a string like 'hole-0', 'board-2', etc.
   * This is used for keyboard focus management.
   */
  const [activeSlotId, setActiveSlotId] = useState<string | null>(null);

  /**
   * lastTypedCard is used to pass a card from the global buffer 
   * to the current slot when a sequence is completed.
   */
  const [lastTypedCard, setLastTypedCard] = useState<string | null>(null);

  const openGrid = useCallback((slotIndex: number) => {
    setActiveSlotIndex(slotIndex);
    setIsOpen(true);
  }, []);

  const closeGrid = useCallback(() => {
    setIsOpen(false);
    setActiveSlotIndex(null);
  }, []);

  const clearLastTypedCard = useCallback(() => setLastTypedCard(null), []);

  return {
    isOpen,
    activeSlotIndex,
    openGrid,
    closeGrid,
    activeSlotId,
    setActiveSlotId,
    lastTypedCard,
    setLastTypedCard,
    clearLastTypedCard
  };
};
