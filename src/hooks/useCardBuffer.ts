import { useState, useCallback, useMemo, useEffect } from 'react';
import { parseCardSequence, getAvailableSuitsForRank } from '../engine/utils/card-parser';

export const useCardBuffer = (onConfirm: (card: string) => void, usedCards: string[]) => {
  const [buffer, setBuffer] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const suggestions = useMemo(() => {
    const { rank } = parseCardSequence(buffer);
    if (!rank) return [];
    
    const availableSuits = getAvailableSuitsForRank(rank, usedCards);
    return availableSuits.map(suit => `${rank}${suit}`);
  }, [buffer, usedCards]);

  // Reset selectedIndex when suggestions change
  useEffect(() => {
    setSelectedIndex(0);
  }, [suggestions.length]);

  const updateBuffer = useCallback((char: string) => {
    // Only allow alphanumeric characters (ranks/suits)
    if (!/^[a-zA-Z0-9]$/.test(char)) return;

    setBuffer(prev => {
      const next = prev + char;
      const { rank, suit } = parseCardSequence(next);

      // If we have a full card (rank and suit), confirm and clear
      if (rank && suit) {
        const cardStr = `${rank}${suit}`;
        if (!usedCards.includes(cardStr)) {
          onConfirm(cardStr);
          return '';
        }
      }

      // If next results in an invalid rank start, or too long, reset or ignore
      if (next.length > 3 || (next.length > 0 && !rank && next !== '1')) {
        return '';
      }

      return next;
    });
  }, [onConfirm, usedCards]);

  const clearBuffer = useCallback(() => setBuffer(''), []);

  const onConfirmSuggestion = useCallback(() => {
    if (suggestions[selectedIndex]) {
      onConfirm(suggestions[selectedIndex]);
      clearBuffer();
    }
  }, [suggestions, selectedIndex, onConfirm, clearBuffer]);

  return {
    buffer,
    suggestions,
    selectedIndex,
    setSelectedIndex,
    updateBuffer,
    clearBuffer,
    onConfirmSuggestion
  };
};
