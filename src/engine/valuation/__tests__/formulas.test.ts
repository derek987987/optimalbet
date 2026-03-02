import { describe, it, expect } from 'vitest';
import { calculatePotOdds } from '../formulas';

describe('calculatePotOdds', () => {
  it('calculates exact pot odds for a call', () => {
    // Call 50 into 100 pot
    // Odds = 50 / (100 + 50 + 50) = 0.25
    expect(calculatePotOdds(100, 50, 50)).toBe(0.25);
  });

  it('handles zero facing bet', () => {
    expect(calculatePotOdds(100, 0, 0)).toBe(0);
  });

  it('handles stack capping in calling logic (should be done before calling this)', () => {
    // If stack is 10, call is 10
    expect(calculatePotOdds(100, 50, 10)).toBe(10 / (100 + 50 + 10));
  });
});
