import { describe, it, expect } from 'vitest';
import { calculateEV } from '../formulas';

describe('calculateEV', () => {
  it('calculates positive EV correctly', () => {
    // 35% equity, call 50 into 100 pot (Total pot if win is 100 + 50 + 50 = 200)
    // EV = (0.35 * 150) - (0.65 * 50) = 52.5 - 32.5 = 20
    expect(calculateEV(0.35, 100, 50, 50)).toBeCloseTo(20);
  });

  it('calculates negative EV correctly', () => {
    // 10% equity, call 50 into 100 pot
    // EV = (0.1 * 150) - (0.9 * 50) = 15 - 45 = -30
    expect(calculateEV(0.1, 100, 50, 50)).toBeCloseTo(-30);
  });
});
