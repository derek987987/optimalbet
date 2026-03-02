import { classifyTexture } from '../core/texture';

export function calculatePotOdds(pot: number, facing: number, call: number): number {
  const total = pot + facing + call;
  if (total === 0) return 0;
  return call / total;
}

export function calculateEV(equity: number, pot: number, facing: number, call: number): number {
  return (equity * (pot + facing)) - ((1 - equity) * call);
}

export function calculateBayesianRange(initialPercentage: number, potSize: number, facingBet: number): number {
  if (potSize === 0) return initialPercentage;
  const decay = Math.max(0.1, 1.0 - (facingBet / (potSize * 2)));
  return initialPercentage * decay;
}

export function getAdjustedEquity(equity: number, isIP: boolean, board: number[]): number {
  const baseEqr = isIP ? 1.15 : 0.85;
  const texture = classifyTexture(board);
  
  let multiplier = 1.0;
  if (texture === 'MONOTONE' || texture === 'COORDINATED') {
    multiplier = 1.1; 
  } else if (texture === 'PAIRED') {
    multiplier = 1.05;
  }

  return equity * baseEqr * multiplier;
}

export function getRecommendation(gameState: { potSize: number, facingBetSize: number, stackSize: number, isIP: boolean, boardCards: number[] }, equity: number) {
  const call = Math.min(gameState.facingBetSize, gameState.stackSize);
  const adjustedEquity = getAdjustedEquity(equity, gameState.isIP, gameState.boardCards);
  const ev = calculateEV(adjustedEquity, gameState.potSize, gameState.facingBetSize, call);
  const potOdds = calculatePotOdds(gameState.potSize, gameState.facingBetSize, call);
  
  let recommendation: 'FOLD' | 'CHECK' | 'CALL' | 'RAISE' = 'FOLD';
  
  if (gameState.facingBetSize === 0) {
    recommendation = adjustedEquity > 0.5 ? 'RAISE' : 'CHECK';
  } else {
    if (ev > 0) {
      recommendation = (adjustedEquity - potOdds > 0.15) ? 'RAISE' : 'CALL';
    } else {
      recommendation = 'FOLD';
    }
  }

  return { ev, potOdds, adjustedEquity, recommendation };
}
