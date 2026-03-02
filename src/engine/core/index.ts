export * from './cards';
export { CardFactory, getRankBit, getRankValue } from './card-factory';
export * from './evaluator';
export * from './ranges';

export interface GameState {
  potSize: number;
  facingBetSize: number;
  stackSize: number;
  isIP: boolean;
  unit: 'USD' | 'BB' | 'CHIPS';
  opponentCount: number;
  opponents: Array<{
    id: string;
    rangePreset: string;
    rangePercentage: number;
  }>;
}

export interface SimulationResult {
  rawEquity: number;
  adjustedEquity: number;
  potOdds: number;
  ev: number;
  recommendation: 'FOLD' | 'CHECK' | 'CALL' | 'RAISE';
  combinationsProcessed: number;
  isMonteCarlo: boolean;
  timeMs: number;
}
