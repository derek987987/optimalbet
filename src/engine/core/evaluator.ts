/**
 * Optimized Poker Hand Evaluator with full tie-breaking.
 * Scores larger values for stronger hands.
 */

import { getSuit, getRankValue } from './card-factory';

export const HAND_TYPES = {
  STRAIGHT_FLUSH: 9,
  FOUR_OF_A_KIND: 8,
  FULL_HOUSE: 7,
  FLUSH: 6,
  STRAIGHT: 5,
  THREE_OF_A_KIND: 4,
  TWO_PAIR: 3,
  PAIR: 2,
  HIGH_CARD: 1,
} as const;

export type HandType = typeof HAND_TYPES[keyof typeof HAND_TYPES];

const RANKS_BUFFER = new Int32Array(5);
const COUNTS_BUFFER = new Int32Array(15);
const SORTED_BUFFER = new Int32Array(5);

export const getHandScore = (cards: number[]): number => {
  let rankBits = 0;
  let firstSuit = getSuit(cards[0]);
  let isFlush = true;

  for (let i = 0; i < 5; i++) {
    const c = cards[i];
    const s = getSuit(c);
    const r = getRankValue(c);
    rankBits |= (1 << r);
    if (s !== firstSuit) isFlush = false;
    RANKS_BUFFER[i] = r;
  }

  // Frequency analysis
  COUNTS_BUFFER.fill(0);
  for (let i = 0; i < 5; i++) {
    COUNTS_BUFFER[RANKS_BUFFER[i]]++;
  }

  let maxFreq = 0;
  let secondFreq = 0;
  for (let i = 0; i < 15; i++) {
    const freq = COUNTS_BUFFER[i];
    if (freq >= maxFreq) {
      secondFreq = maxFreq;
      maxFreq = freq;
    } else if (freq > secondFreq) {
      secondFreq = freq;
    }
  }

  // Straight check
  let isStraight = false;
  let topStraightRank = -1;
  
  // Normal straights
  const lsbit = rankBits & -rankBits;
  if (rankBits / lsbit === 31) {
    isStraight = true;
    for (let r = 12; r >= 4; r--) {
        if ((rankBits >> (r - 4)) === 31) {
            topStraightRank = r;
            break;
        }
    }
  } else if (rankBits === 0x100F) { // A2345
    isStraight = true;
    topStraightRank = 3; // Rank index for '5'
  }

  let handType: HandType = HAND_TYPES.HIGH_CARD;
  if (isStraight && isFlush) handType = HAND_TYPES.STRAIGHT_FLUSH;
  else if (maxFreq === 4) handType = HAND_TYPES.FOUR_OF_A_KIND;
  else if (maxFreq === 3 && secondFreq === 2) handType = HAND_TYPES.FULL_HOUSE;
  else if (isFlush) handType = HAND_TYPES.FLUSH;
  else if (isStraight) handType = HAND_TYPES.STRAIGHT;
  else if (maxFreq === 3) handType = HAND_TYPES.THREE_OF_A_KIND;
  else if (maxFreq === 2 && secondFreq === 2) handType = HAND_TYPES.TWO_PAIR;
  else if (maxFreq === 2) handType = HAND_TYPES.PAIR;

  // Tie-breaker packing:
  // Sort ranks by frequency then by value
  for (let i = 0; i < 5; i++) SORTED_BUFFER[i] = RANKS_BUFFER[i];
  SORTED_BUFFER.sort((a, b) => (COUNTS_BUFFER[b] - COUNTS_BUFFER[a]) || (b - a));

  let score = (handType as number) << 20;
  
  if (handType === HAND_TYPES.STRAIGHT || handType === HAND_TYPES.STRAIGHT_FLUSH) {
    score |= (topStraightRank << 16);
  } else {
    for (let i = 0; i < 5; i++) {
      score |= (SORTED_BUFFER[i] << (16 - i * 4));
    }
  }

  return score;
};

export const evaluate7Cards = (cards: number[] | Int32Array): number => {
  let bestScore = -1;
  const c = cards;
  const h5 = [0, 0, 0, 0, 0];
  
  // 21 combinations
  for (let i = 0; i < 3; i++) {
    for (let j = i + 1; j < 4; j++) {
      for (let k = j + 1; k < 5; k++) {
        for (let l = k + 1; l < 6; l++) {
          for (let m = l + 1; m < 7; m++) {
            h5[0] = c[i]; h5[1] = c[j]; h5[2] = c[k]; h5[3] = c[l]; h5[4] = c[m];
            const score = getHandScore(h5);
            if (score > bestScore) bestScore = score;
          }
        }
      }
    }
  }
  return bestScore;
};

export const evaluate5Cards = (cards: number[]): number => {
    return getHandScore(cards);
};
