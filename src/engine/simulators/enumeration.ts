import { evaluate7Cards } from '../core/evaluator';
import { isHandInRange } from '../core/ranges';

export interface EnumerationResult {
  rawEquity: number;
  combinationsProcessed: number;
  isMonteCarlo: false;
}

const ALL_CARDS: number[] = Array.from({ length: 52 }, (_, i) => i);

export const simulateEnumeration = (
  heroHole: number[],
  board: number[],
  opponentRanges?: Uint8Array[]
): EnumerationResult => {
  const deadCards = new Set([...heroHole, ...board]);
  const deck = ALL_CARDS.filter(c => !deadCards.has(c));
  const deckLength = deck.length;
  const range = opponentRanges?.[0];
  
  let wins = 0;
  let ties = 0;
  let total = 0;

  if (board.length === 5) {
    // River: Calculate vs opponent range
    for (let i = 0; i < deckLength; i++) {
      for (let j = i + 1; j < deckLength; j++) {
        if (range && !isHandInRange(deck[i], deck[j], range)) continue;

        const heroScore = evaluate7Cards([...heroHole, ...board]);
        const oppScore = evaluate7Cards([deck[i], deck[j], ...board]);
        
        if (heroScore > oppScore) wins++;
        else if (heroScore === oppScore) ties++;
        total++;
      }
    }
  } else if (board.length === 4) {
    // Turn: Exhaustive across possible river cards and opponent hands
    for (let i = 0; i < deckLength; i++) {
        const river = deck[i];
        const newBoard = [...board, river];
        const deck2 = deck.filter((_, idx) => idx !== i);
        for (let j = 0; j < deck2.length; j++) {
            for (let k = j + 1; k < deck2.length; k++) {
                if (range && !isHandInRange(deck2[j], deck2[k], range)) continue;

                const heroScore = evaluate7Cards([...heroHole, ...newBoard]);
                const oppScore = evaluate7Cards([deck2[j], deck2[k], ...newBoard]);
                if (heroScore > oppScore) wins++;
                else if (heroScore === oppScore) ties++;
                total++;
            }
        }
    }
  }

  // Handle case where range might result in zero valid combinations (should not happen with Random)
  const rawEquity = total > 0 ? (wins + (ties / 2)) / total : 0;

  return {
    rawEquity,
    combinationsProcessed: total,
    isMonteCarlo: false
  };
};
