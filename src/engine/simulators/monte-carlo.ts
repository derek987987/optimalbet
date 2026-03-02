import { evaluate7Cards } from '../core/evaluator';
import { isHandInRange } from '../core/ranges';

export interface MonteCarloResult {
  rawEquity: number;
  combinationsProcessed: number;
  isMonteCarlo: true;
}

const ALL_CARDS: number[] = Array.from({ length: 52 }, (_, i) => i);

export const simulateMonteCarlo = (
  heroHole: number[],
  board: number[],
  opponentCount: number,
  iterations: number = 10000,
  opponentRanges?: Uint8Array[]
): MonteCarloResult => {
  let wins = 0;
  let ties = 0;
  
  const deadCards = new Set([...heroHole, ...board]);
  const deck = ALL_CARDS.filter(c => !deadCards.has(c));
  
  for (let i = 0; i < iterations; i++) {
    const currentDeck = [...deck];
    
    // Fill board to 5 cards
    const currentBoard = [...board];
    while (currentBoard.length < 5) {
      const idx = Math.floor(Math.random() * currentDeck.length);
      currentBoard.push(currentDeck.splice(idx, 1)[0]);
    }
    
    // Give opponents hole cards
    let bestOpponentScore = -1;
    for (let j = 0; j < opponentCount; j++) {
      let c1: number, c2: number;
      const range = opponentRanges?.[j];

      if (range) {
        // Validation approach for range filtering
        let valid = false;
        let attempts = 0;
        c1 = -1; c2 = -1;

        while (!valid && attempts < 50) {
          const idx1 = Math.floor(Math.random() * currentDeck.length);
          const t1 = currentDeck[idx1];
          const idx2 = Math.floor(Math.random() * currentDeck.length);
          const t2 = currentDeck[idx2];

          if (idx1 !== idx2 && isHandInRange(t1, t2, range)) {
            c1 = t1;
            c2 = t2;
            valid = true;
            // Remove from currentDeck
            currentDeck.splice(Math.max(idx1, idx2), 1);
            currentDeck.splice(Math.min(idx1, idx2), 1);
          }
          attempts++;
        }

        if (!valid) {
          // Fallback to random if no valid hand found in 50 attempts
          c1 = currentDeck.splice(Math.floor(Math.random() * currentDeck.length), 1)[0];
          c2 = currentDeck.splice(Math.floor(Math.random() * currentDeck.length), 1)[0];
        }
      } else {
        c1 = currentDeck.splice(Math.floor(Math.random() * currentDeck.length), 1)[0];
        c2 = currentDeck.splice(Math.floor(Math.random() * currentDeck.length), 1)[0];
      }

      const score = evaluate7Cards([c1, c2, ...currentBoard]);
      if (score > bestOpponentScore) bestOpponentScore = score;
    }
    
    const heroScore = evaluate7Cards([...heroHole, ...currentBoard]);
    
    if (heroScore > bestOpponentScore) wins++;
    else if (heroScore === bestOpponentScore) ties++;
  }
  
  return {
    rawEquity: (wins + (ties / 2)) / iterations,
    combinationsProcessed: iterations,
    isMonteCarlo: true
  };
};
