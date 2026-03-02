import { evaluate7Cards } from '../core/evaluator';

export interface EnumerationResult {
  rawEquity: number;
  combinationsProcessed: number;
  isMonteCarlo: false;
}

const ALL_CARDS: number[] = Array.from({ length: 52 }, (_, i) => i);

export const simulateEnumeration = (
  heroHole: number[],
  board: number[]
): EnumerationResult => {
  const deadCards = new Set([...heroHole, ...board]);
  const deck = ALL_CARDS.filter(c => !deadCards.has(c));
  const deckLength = deck.length;
  
  let wins = 0;
  let ties = 0;
  let total = 0;

  if (board.length === 5) {
    // River: Calculate vs 100% random range (all possible 2-card opponent hands)
    for (let i = 0; i < deckLength; i++) {
      for (let j = i + 1; j < deckLength; j++) {
        const heroScore = evaluate7Cards([...heroHole, ...board]);
        const oppScore = evaluate7Cards([deck[i], deck[j], ...board]);
        
        if (heroScore > oppScore) wins++;
        else if (heroScore === oppScore) ties++;
        total++;
      }
    }
  } else if (board.length === 4) {
    // Turn: All possible 1-card board outcomes (Heads-up)
    // Actually, exhaustive enumeration for post-flop usually means board outcomes.
    // Let's stick to board outcomes as it's more common for "Simulates win probability".
    for (let i = 0; i < deckLength; i++) {
        const river = deck[i];
        const newBoard = [...board, river];
        // For each river, calculate equity vs random range? 
        // No, that's too slow. 
        // Usually it's Hero vs Random Range across all board outcomes.
        // Simplified: Hero vs 100% range, all Turn+River combinations.
        const deck2 = deck.filter((_, idx) => idx !== i);
        for (let j = 0; j < deck2.length; j++) {
            for (let k = j + 1; k < deck2.length; k++) {
                const heroScore = evaluate7Cards([...heroHole, ...newBoard]);
                const oppScore = evaluate7Cards([deck2[j], deck2[k], ...newBoard]);
                if (heroScore > oppScore) wins++;
                else if (heroScore === oppScore) ties++;
                total++;
            }
        }
    }
  }

  return {
    rawEquity: (wins + (ties / 2)) / total,
    combinationsProcessed: total,
    isMonteCarlo: false
  };
};
