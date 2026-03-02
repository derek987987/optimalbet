interface CalculationRequest {
  holeCards: number[];
  boardCards: number[];
  gameState: {
    potSize: number;
    facingBetSize: number;
    stackSize: number;
    isIP: boolean;
    unit: 'USD' | 'BB' | 'CHIPS';
    opponentCount: number;
    opponents: {
      id: string;
      rangePreset: 'Tight' | 'Loose' | 'Random';
      rangePercentage: number;
    }[];
  };
  options: {
    iterations: number;
    mode: 'auto' | 'monte-carlo' | 'exact';
  };
}

interface CalculationResult {
  rawEquity: number;
  adjustedEquity: number;
  potOdds: number;
  ev: number;
  recommendation: 'FOLD' | 'CHECK' | 'CALL' | 'RAISE';
  combinationsProcessed: number;
  isMonteCarlo: boolean;
  timeMs: number;
}

/**
 * The PokerEngine is exposed via Comlink in the Web Worker.
 */
interface PokerEngine {
  calculate(request: CalculationRequest): Promise<CalculationResult>;
}
