import { useState, useCallback } from 'react';

export const useCardSelection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlotIndex, setActiveSlotIndex] = useState<number | null>(null);

  const openGrid = useCallback((slotIndex: number) => {
    setActiveSlotIndex(slotIndex);
    setIsOpen(true);
  }, []);

  const closeGrid = useCallback(() => {
    setIsOpen(false);
    setActiveSlotIndex(null);
  }, []);

  return {
    isOpen,
    activeSlotIndex,
    openGrid,
    closeGrid
  };
};
