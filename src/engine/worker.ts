import * as Comlink from 'comlink';
import { simulateMonteCarlo } from './simulators/monte-carlo';
import { simulateEnumeration } from './simulators/enumeration';
import { getRecommendation } from './valuation/formulas';
import type { GameState } from './core';

export interface CalculationRequest {
  holeCards: number[];
  boardCards: number[];
  gameState: GameState;
  options: {
    iterations: number;
    mode: 'auto' | 'monte-carlo' | 'exact';
  };
}

export interface CalculationResult {
  rawEquity: number;
  adjustedEquity: number;
  potOdds: number;
  ev: number;
  recommendation: 'FOLD' | 'CHECK' | 'CALL' | 'RAISE';
  combinationsProcessed: number;
  isMonteCarlo: boolean;
  timeMs: number;
}

const engine = {
  async calculate(request: CalculationRequest): Promise<CalculationResult> {
    const { holeCards, boardCards, gameState, options } = request;
    const startTime = performance.now();
    
    let simResult;
    
    // Switch to exact enumeration for heads-up post-flop
    const isPostFlop = boardCards.length >= 3;
    const isHeadsUp = gameState.opponentCount === 1;

    if (isHeadsUp && isPostFlop && options.mode !== 'monte-carlo') {
      simResult = simulateEnumeration(holeCards, boardCards);
    } else {
      simResult = simulateMonteCarlo(
        holeCards,
        boardCards,
        gameState.opponentCount,
        options.iterations
      );
    }

    const valuation = getRecommendation(
      { 
        potSize: gameState.potSize, 
        facingBetSize: gameState.facingBetSize, 
        stackSize: gameState.stackSize, 
        isIP: gameState.isIP 
      }, 
      simResult.rawEquity
    );

    return {
      ...simResult,
      ...valuation,
      timeMs: performance.now() - startTime,
    } as CalculationResult;
  }
};

Comlink.expose(engine);
export type PokerEngine = typeof engine;
