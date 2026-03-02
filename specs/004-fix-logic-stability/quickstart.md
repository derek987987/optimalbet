# Quickstart: Logic Stability and Accuracy Verification

## Development Setup
1. **Resolve tsconfig loop**: Ensure no external script is modifying `tsconfig.app.json`.
2. **Install dependencies**: `npm install`.
3. **Start dev server**: `npm run dev`.

## Implementation Flow
### 1. UI Stabilization
- In `src/App.tsx`, wrap the `gameState` passed to `useEquityEngine` in a `useMemo`.
- In `src/components/analytics/AnalyticsDashboard.tsx`, apply a `0.5` opacity and `animate-pulse` (Tailwind) when `isCalculating` is true.

### 2. Positional Logic
- In `src/engine/valuation/formulas.ts`, ensure `getRecommendation` uses `adjustedEquity` (incorporating EQR) to determine the action (`FOLD`, `CHECK`, `CALL`, `RAISE`).

### 3. Range-Based Simulation
- In `src/engine/simulators/monte-carlo.ts`:
  - Fetch range bitmasks for each opponent using `getRangeBitmask`.
  - In each iteration, when generating opponent hole cards, draw a random hand and validate against the bitmask (Retry-until-valid or draw-from-subset).
- In `src/engine/simulators/enumeration.ts`:
  - Filter the exhaustive hand space using the opponent's `RangeBitmask`.

## Verification
- **Unit Tests**: `npm run test:unit` (specifically `tests/unit/valuation.test.ts` and new range tests).
- **Stability Check**: Observe the dashboard while changing cards; values should show the ghosting state without flickering or "..." displays.
