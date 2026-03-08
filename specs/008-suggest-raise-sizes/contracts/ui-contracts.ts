/**
 * UI Contracts: Suggest Raise Sizes
 */

export interface RaiseSuggestion {
  label: string;
  amount: number;
  type: 'multiple' | 'percentage';
  isOverStack: boolean;
}

export interface RaiseSuggestionsProps {
  /** Current pot size from game state */
  potSize: number;
  /** Current facing bet from game state */
  facingBetSize: number;
  /** Current hero stack from game state */
  stackSize: number;
  /** Recommendation from engine */
  recommendation: 'FOLD' | 'CHECK' | 'CALL' | 'RAISE';
  /** Current unit (USD, BB, etc) */
  unit: string;
  /** Callback to update the facing bet in global state */
  onApplySizing: (amount: number) => void;
}

/**
 * Logic Exports (from formulas.ts)
 */

export interface SizingLogic {
  /** 
   * Calculates standard suggestions based on context.
   * Returns empty array if recommendation is not RAISE.
   */
  getRaiseSuggestions: (
    pot: number, 
    facing: number, 
    stack: number,
    recommendation: string
  ) => RaiseSuggestion[];
}
