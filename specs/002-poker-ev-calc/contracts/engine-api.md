# Engine API Contract

This document defines the interface between the React UI and the Math Engine (Web Worker).

## Input: `CalculationRequest`

```typescript
interface CalculationRequest {
  holeCards: number[]; // Bitwise card representations
  boardCards: number[]; // Bitwise card representations
  opponentCount: number; // 1-9
  potSize: number;
  facingBet: number;
  options: {
    iterations: number; // e.g., 10000 for Monte Carlo
    mode: 'auto' | 'monte-carlo' | 'exact';
  };
}
```

## Output: `CalculationResult`

```typescript
interface CalculationResult {
  equity: number;      // 0.0 to 1.0
  winProb: number;     // 0.0 to 1.0
  tieProb: number;     // 0.0 to 1.0
  ev: number;          // Calculated dollar value
  recommendation: 'CALL' | 'FOLD' | 'CHECK';
  iterationCount: number;
  timeMs: number;
}
```

## Communication Protocol (Web Worker via Comlink)

1. **UI → Worker**: `const result = await engine.calculate(payload: CalculationRequest)`
2. **Worker → UI (Progress)**: `engine.onProgress((percent: number) => { ... })`
