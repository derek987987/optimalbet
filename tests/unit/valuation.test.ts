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

  it('applies Equity Realization (EQR) based on position and texture', () => {
    const dryBoard = [0, 4, 8]; // Ah 2h 3h -> Monotone? No, 0, 13, 26 are same suit. Ah is 0. 2h is 1? No. Ah=0, Ad=1, Ac=2, As=3. 2h=4.
    // 0%4=0, 4%4=0, 8%4=0 -> All Hearts.
    const wetBoard = [0, 4, 8, 12, 16]; // Monotone hearts
    
    // Raw 50% * 1.15 (IP) * 1.1 (Monotone) = 0.6325
    expect(getAdjustedEquity(0.5, true, wetBoard)).toBeCloseTo(0.6325, 4);
    
    // Raw 50% * 0.85 (OOP) * 1.0 (Dry) = 0.425
    const dryBoardActual = [0, 21, 46]; // 2c 7d Kh
    expect(getAdjustedEquity(0.5, false, dryBoardActual)).toBe(0.425);
  });
});
