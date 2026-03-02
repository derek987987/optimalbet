import { describe, it, expect } from 'vitest';
import { simulateEnumeration } from '../enumeration';
import { CardFactory } from '../../core/card-factory';

describe('simulateEnumeration', () => {
  it('exactly calculates river heads-up equity', () => {
    const hole = [CardFactory.fromString('As'), CardFactory.fromString('Ks')];
    const board = [
      CardFactory.fromString('Ad'), CardFactory.fromString('2s'), CardFactory.fromString('3h'),
      CardFactory.fromString('4c'), CardFactory.fromString('5s')
    ];
    // This is a straight on the board (A-2-3-4-5).
    // Opponents win if they have a 6 (making a 2-3-4-5-6 straight).
    // Total combinations = 990. Opponent wins with a 6 in 170 cases.
    // Equity = (0 wins + 820 ties / 2) / 990 = 410 / 990 = 0.414...
    const result = simulateEnumeration(hole, board);
    expect(result.rawEquity).toBeCloseTo(0.414, 3);
  });

  it('exactly calculates turn heads-up equity', () => {
    const hole = [CardFactory.fromString('As'), CardFactory.fromString('Ad')];
    const board = [
      CardFactory.fromString('2s'), CardFactory.fromString('3h'), CardFactory.fromString('4c'),
      CardFactory.fromString('5s')
    ];
    const result = simulateEnumeration(hole, board);
    expect(result.rawEquity).toBeDefined();
    // 46 board outcomes * (45 * 44 / 2) opponent hands = 45540
    expect(result.combinationsProcessed).toBe(45540); 
  });
});
