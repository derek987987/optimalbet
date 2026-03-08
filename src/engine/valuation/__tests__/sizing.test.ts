import { describe, it, expect } from 'vitest';
import { getRaiseSuggestions } from '../formulas';

describe('getRaiseSuggestions', () => {
  it('should return empty array if recommendation is not RAISE', () => {
    expect(getRaiseSuggestions(100, 0, 1000, 'CALL')).toEqual([]);
    expect(getRaiseSuggestions(100, 50, 1000, 'FOLD')).toEqual([]);
    expect(getRaiseSuggestions(100, 0, 1000, 'CHECK')).toEqual([]);
  });

  describe('No facing bet (Betting)', () => {
    it('should return 33%, 50%, and 100% of pot', () => {
      const pot = 100;
      const suggestions = getRaiseSuggestions(pot, 0, 1000, 'RAISE');
      expect(suggestions).toHaveLength(3);
      
      expect(suggestions[0]).toEqual({
        label: '33% Pot',
        amount: 33,
        type: 'percentage',
        isOverStack: false
      });
      
      expect(suggestions[1]).toEqual({
        label: '50% Pot',
        amount: 50,
        type: 'percentage',
        isOverStack: false
      });
      
      expect(suggestions[2]).toEqual({
        label: '100% Pot',
        amount: 100,
        type: 'percentage',
        isOverStack: false
      });
    });

    it('should mark isOverStack correctly', () => {
      const pot = 1000;
      const stack = 500;
      const suggestions = getRaiseSuggestions(pot, 0, stack, 'RAISE');
      
      expect(suggestions.find(s => s.label === '100% Pot')?.isOverStack).toBe(true);
      expect(suggestions.find(s => s.label === '33% Pot')?.isOverStack).toBe(false);
    });
  });

  describe('Facing a bet (Raising)', () => {
    it('should return 3x, 4x, and 100% Pot Raise', () => {
      const pot = 100;
      const facing = 50;
      const stack = 1000;
      // 100% Pot Raise = FacingBet + (Pot + FacingBet + CallAmount)
      // = 50 + (100 + 50 + 50) = 250
      const suggestions = getRaiseSuggestions(pot, facing, stack, 'RAISE');
      
      expect(suggestions).toHaveLength(3);
      
      expect(suggestions[0]).toEqual({
        label: '3x',
        amount: 150,
        type: 'multiple',
        isOverStack: false
      });
      
      expect(suggestions[1]).toEqual({
        label: '4x',
        amount: 200,
        type: 'multiple',
        isOverStack: false
      });
      
      expect(suggestions[2]).toEqual({
        label: '100% Pot',
        amount: 250,
        type: 'percentage',
        isOverStack: false
      });
    });

    it('should handle stack capping for call amount in pot sized raise', () => {
      const pot = 100;
      const facing = 500;
      const stack = 200;
      // Call amount is capped at stack (200)
      // 100% Pot Raise = 500 + (100 + 500 + 200) = 1300
      const suggestions = getRaiseSuggestions(pot, facing, stack, 'RAISE');
      
      const potSuggestion = suggestions.find(s => s.label === '100% Pot');
      expect(potSuggestion?.amount).toBe(1300);
      expect(potSuggestion?.isOverStack).toBe(true);
    });
  });
});
