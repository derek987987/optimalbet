import { describe, it, expect } from 'vitest';
import { getAdjustedEquity, calculatePotOdds, calculateEV } from '../../src/engine/valuation/formulas';

describe('Valuation Formulas', () => {
  it('calculates Pot Odds correctly', () => {
    // Pot 100, Bet 50, Call 50 -> 50 / (100 + 50 + 50) = 50 / 200 = 0.25 (25%)
    expect(calculatePotOdds(50, 100, 50)).toBe(0.25);
  });

  it('calculates EV correctly', () => {
    // Equity 50%, Pot 100, Bet 50 -> Win 150 * 0.5 - Lose 50 * 0.5 = 75 - 25 = 50
    expect(calculateEV(0.5, 100, 50, 50)).toBe(50);
  });

  it('applies Equity Realization (EQR) based on position', () => {
    // Raw 50% * 1.15 = 57.5%
    expect(getAdjustedEquity(0.5, true)).toBe(0.575);
    // Raw 50% * 0.85 = 42.5%
    expect(getAdjustedEquity(0.5, false)).toBe(0.425);
  });
});
