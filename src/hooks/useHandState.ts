import { useState, useCallback, useMemo } from 'react';
import { loadState } from '../services/persistence';

export const useHandState = () => {
  const [holeCards, setHoleCards] = useState<number[]>(loadState('hole_cards') || []);
  const [boardCards, setBoardCards] = useState<number[]>(loadState('board_cards') || []);

  const toggleCard = useCallback((card: number) => {
    if (holeCards.includes(card)) {
      setHoleCards(prev => prev.filter(c => c !== card));
      return;
    }
    if (boardCards.includes(card)) {
      setBoardCards(prev => prev.filter(c => c !== card));
      return;
    }

    if (holeCards.length < 2) {
      setHoleCards(prev => [...prev, card]);
    } else if (boardCards.length < 5) {
      setBoardCards(prev => [...prev, card]);
    }
  }, [holeCards, boardCards]);

  const clearHand = useCallback(() => {
    setHoleCards([]);
    setBoardCards([]);
  }, []);

  const setCardAt = useCallback((type: 'hole' | 'board', index: number, card: number | null) => {
    if (type === 'hole') {
      setHoleCards(prev => {
        const next = [...prev];
        if (card === null) {
          next.splice(index, 1);
        } else {
          next[index] = card;
        }
        return next.filter(c => c !== undefined);
      });
    } else {
      setBoardCards(prev => {
        const next = [...prev];
        if (card === null) {
          next.splice(index, 1);
        } else {
          next[index] = card;
        }
        return next.filter(c => c !== undefined);
      });
    }
  }, []);

  return useMemo(() => ({
    holeCards,
    boardCards,
    toggleCard,
    setCardAt,
    clearHand
  }), [holeCards, boardCards, toggleCard, setCardAt, clearHand]);
};
