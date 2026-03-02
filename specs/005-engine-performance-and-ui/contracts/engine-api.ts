/**
 * WASM Engine Bridge API
 */

export interface WASMCalculationRequest {
  heroHole: number[];
  board: number[];
  opponentRanges: Uint8Array[]; // Array of 1326-length bitmasks
  iterations: number;
}

export interface WASMCalculationResult {
  rawEquity: number;
  handCategory: string;
  drawType: string;
  texture: string;
  iterationsProcessed: number;
}

/**
 * Extended PokerEngine Interface
 */
export interface EnhancedPokerEngine {
  /**
   * Main calculation entry point
   */
  calculate(request: any): Promise<any>;

  /**
   * Directly access the Rust/WASM simulation core
   */
  simulateWASM(request: WASMCalculationRequest): Promise<WASMCalculationResult>;
}
