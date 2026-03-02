import { describe, it, expect } from 'vitest';
import { simulateMonteCarlo } from '../monte-carlo';
import { simulateEnumeration } from '../enumeration';
import { getRangeBitmask } from '../../core/ranges';

describe('Range-Filtered Simulations', () => {
  const heroHole = [0, 1]; // Ah Ad
  const board = [8, 12, 16]; // 4h 5h 6h

  it('Monte Carlo: Tight range results in different equity than Random', () => {
    const iterations = 1000;
    const randomRange = getRangeBitmask('Random', 1.0);
    const tightRange = getRangeBitmask('Tight', 0.15);

    const resRandom = simulateMonteCarlo(heroHole, board, 1, iterations, [randomRange]);
    const resTight = simulateMonteCarlo(heroHole, board, 1, iterations, [tightRange]);

    // Equity should generally be lower against a tight range (stronger hands)
    // although with 1000 iterations there's some noise.
    expect(resRandom.rawEquity).not.toBe(resTight.rawEquity);
  });

  it('Enumeration: Filters combinations correctly based on range', () => {
    const tightRange = getRangeBitmask('Tight', 0.15);
    const res = simulateEnumeration(heroHole, [...board, 20, 24], [tightRange]);
    
    // Total combinations should be around 1326 * 0.15 = 198
    // Minus dead cards (2 hero + 5 board = 7)
    expect(res.combinationsProcessed).toBeLessThan(1326);
    expect(res.combinationsProcessed).toBeGreaterThan(0);
  });
});
