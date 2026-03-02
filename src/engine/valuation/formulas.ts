export function calculatePotOdds(pot: number, facing: number, call: number): number {
  const total = pot + facing + call;
  if (total === 0) return 0;
  return call / total;
}

export function calculateEV(equity: number, pot: number, facing: number, call: number): number {
  // P_win * $win - P_lose * $lose
  // $win = pot + facing (the money currently in pot)
  // $lose = call (the amount we risk)
  return (equity * (pot + facing)) - ((1 - equity) * call);
}

export function getAdjustedEquity(equity: number, isIP: boolean): number {
  const eqr = isIP ? 1.15 : 0.85;
  return equity * eqr;
}

export function getRecommendation(gameState: { potSize: number, facingBetSize: number, stackSize: number, isIP: boolean }, equity: number) {
  const call = Math.min(gameState.facingBetSize, gameState.stackSize);
  const adjustedEquity = getAdjustedEquity(equity, gameState.isIP);
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
