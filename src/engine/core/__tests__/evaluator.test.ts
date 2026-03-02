import { describe, it, expect } from 'vitest';
import { stringToCard } from '../cards';
import { getHandScore, HAND_TYPES, evaluate5Cards } from '../evaluator';

describe('Hand Evaluator', () => {
  it('identifies a Royal Flush (as a Straight Flush)', () => {
    const hand = [
      stringToCard('As'),
      stringToCard('Ks'),
      stringToCard('Qs'),
      stringToCard('Js'),
      stringToCard('Ts'),
    ];
    // evaluate5Cards returns a score now, not just the type index.
    // Score starts with handType shifted by 20.
    expect(evaluate5Cards(hand) >> 20).toBe(HAND_TYPES.STRAIGHT_FLUSH);
  });

  it('identifies Four of a Kind', () => {
    const hand = [
      stringToCard('As'),
      stringToCard('Ah'),
      stringToCard('Ad'),
      stringToCard('Ac'),
      stringToCard('Ks'),
    ];
    expect(evaluate5Cards(hand) >> 20).toBe(HAND_TYPES.FOUR_OF_A_KIND);
  });

  it('identifies a Full House', () => {
    const hand = [
      stringToCard('As'),
      stringToCard('Ah'),
      stringToCard('Ad'),
      stringToCard('Kc'),
      stringToCard('Ks'),
    ];
    expect(evaluate5Cards(hand) >> 20).toBe(HAND_TYPES.FULL_HOUSE);
  });

  it('compares Full House vs Flush correctly', () => {
    const fullHouse = [
      stringToCard('2s'), stringToCard('2h'), stringToCard('2d'),
      stringToCard('3c'), stringToCard('3s'),
    ];
    const flush = [
      stringToCard('Ah'), stringToCard('Jh'), stringToCard('8h'),
      stringToCard('5h'), stringToCard('2h'),
    ];
    
    // Full house is stronger, so score should be larger
    expect(getHandScore(fullHouse)).toBeGreaterThan(getHandScore(flush));
  });
});
