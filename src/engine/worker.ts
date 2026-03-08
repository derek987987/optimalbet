import * as Comlink from 'comlink';
import { simulateMonteCarlo } from './simulators/monte-carlo';
import { simulateEnumeration } from './simulators/enumeration';
import { getRecommendation } from './valuation/formulas';
import { getRangeBitmask } from './core/ranges';
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
    
    // Generate range bitmasks for all opponents
    const opponentRanges = (gameState.opponents || []).map(o => 
      getRangeBitmask(o.rangePreset, o.rangePercentage)
    );

    let simResult;
    
    // Switch to exact enumeration for heads-up post-flop (Turn and River only)
    const isLateStreet = boardCards.length >= 4;
    const isHeadsUp = gameState.opponentCount === 1;

    if (isHeadsUp && isLateStreet && options.mode !== 'monte-carlo') {
      simResult = simulateEnumeration(holeCards, boardCards, opponentRanges);
    } else {
      simResult = simulateMonteCarlo(
        holeCards,
        boardCards,
        gameState.opponentCount,
        options.iterations,
        opponentRanges
      );
    }

    const valuation = getRecommendation(
      { 
        potSize: gameState.potSize, 
        facingBetSize: gameState.facingBetSize, 
        stackSize: gameState.stackSize, 
        isIP: gameState.isIP,
        boardCards: boardCards
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
