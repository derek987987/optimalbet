# Quickstart: Poker EV Calculator

## Development Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Run Logic Tests (100% Coverage Target)**:
   ```bash
   npm run test:unit
   ```

## Key Files

- `src/engine/`: Core math logic (Bitwise evaluators).
- `src/components/CardGrid.tsx`: Touch-optimized selection UI.
- `src/hooks/useCalculations.ts`: Hook for interacting with the Web Worker.

## Verification

To verify the engine:
1. Run the test suite: `npm run test:unit`.
2. Ensure `HandEvaluator.test.ts` covers the "Quads vs Full House" and "Flush vs Straight" scenarios for exactness.
3. Benchmarks should show <100ms for post-flop enumeration and 10k Monte Carlo iterations.
