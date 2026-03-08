import { describe, it, expect } from 'vitest';
import { parseCardSequence, getAvailableSuitsForRank } from '../card-parser';

describe('card-parser', () => {
  describe('parseCardSequence', () => {
    it('should parse simple ranks', () => {
      expect(parseCardSequence('A')).toEqual({ rank: 'A', suit: null });
      expect(parseCardSequence('2')).toEqual({ rank: '2', suit: null });
      expect(parseCardSequence('T')).toEqual({ rank: 'T', suit: null });
      expect(parseCardSequence('1')).toEqual({ rank: 'T', suit: null });
    });

    it('should parse rank and suit', () => {
      expect(parseCardSequence('As')).toEqual({ rank: 'A', suit: 's' });
      expect(parseCardSequence('Kh')).toEqual({ rank: 'K', suit: 'h' });
      expect(parseCardSequence('10d')).toEqual({ rank: 'T', suit: 'd' });
    });

    it('should handle case insensitivity', () => {
      expect(parseCardSequence('as')).toEqual({ rank: 'A', suit: 's' });
      expect(parseCardSequence('KH')).toEqual({ rank: 'K', suit: 'h' });
    });

    it('should handle invalid input', () => {
      expect(parseCardSequence('X')).toEqual({ rank: null, suit: null });
      expect(parseCardSequence('')).toEqual({ rank: null, suit: null });
      expect(parseCardSequence('Az')).toEqual({ rank: 'A', suit: null });
    });
  });

  describe('getAvailableSuitsForRank', () => {
    it('should filter used cards', () => {
      const usedCards = ['As', 'Ah'];
      expect(getAvailableSuitsForRank('A', usedCards)).toEqual(['c', 'd']);
    });

    it('should return all suits if none are used', () => {
      expect(getAvailableSuitsForRank('K', [])).toEqual(['c', 'd', 'h', 's']);
    });

    it('should return empty for invalid rank', () => {
      expect(getAvailableSuitsForRank('X', [])).toEqual([]);
    });
  });
});
