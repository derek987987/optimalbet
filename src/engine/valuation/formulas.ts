import { classifyTexture } from '../core/texture';
import type { RaiseSuggestion } from '../../types/calculation';

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

export function getRaiseSuggestions(
  potSize: number, 
  facingBetSize: number, 
  stackSize: number,
  recommendation: string
): RaiseSuggestion[] {
  if (recommendation !== 'RAISE') return [];

  const suggestions: RaiseSuggestion[] = [];
  const callAmount = Math.min(facingBetSize, stackSize);

  if (facingBetSize === 0) {
    // No bet: standard bet sizing (33%, 50%, 100% of pot)
    const percentages = [0.33, 0.5, 1.0];
    const labels = ['33% Pot', '50% Pot', '100% Pot'];

    percentages.forEach((pct, i) => {
      const amount = Math.round(potSize * pct);
      suggestions.push({
        label: labels[i],
        amount,
        type: 'percentage',
        isOverStack: amount > stackSize
      });
    });
  } else {
    // Facing bet: standard raise sizing (3x, 4x, 100% Pot)
    // 3x and 4x of the facing bet
    const multiples = [3, 4];
    multiples.forEach(m => {
      const amount = Math.round(facingBetSize * m);
      suggestions.push({
        label: `${m}x`,
        amount,
        type: 'multiple',
        isOverStack: amount > stackSize
      });
    });

    // 100% Pot Raise: FacingBet + (Pot + FacingBet + CallAmount)
    const potSizedRaise = Math.round(facingBetSize + (potSize + facingBetSize + callAmount));
    suggestions.push({
      label: '100% Pot',
      amount: potSizedRaise,
      type: 'percentage',
      isOverStack: potSizedRaise > stackSize
    });
  }

  return suggestions;
}
