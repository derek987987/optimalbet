import { evaluate7Cards } from '../core/evaluator';

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
  iterations: number = 10000
): MonteCarloResult => {
  let wins = 0;
  let ties = 0;
  
  const deadCards = new Set([...heroHole, ...board]);
  const deck = ALL_CARDS.filter(c => !deadCards.has(c));
  
  for (let i = 0; i < iterations; i++) {
    // Shuffle or pick random? Pick random is fine for MC.
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
      const oppHole = [
        currentDeck.splice(Math.floor(Math.random() * currentDeck.length), 1)[0],
        currentDeck.splice(Math.floor(Math.random() * currentDeck.length), 1)[0]
      ];
      const score = evaluate7Cards([...oppHole, ...currentBoard]);
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
