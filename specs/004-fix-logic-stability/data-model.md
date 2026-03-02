# Data Model: Logic Stability and Accuracy Verification

## Entities

### GameState (Extended)
A snapshot of the current hand and betting context.
- `holeCards`: `number[]` (Hand indices 0-51)
- `boardCards`: `number[]` (Board indices 0-51)
- `potSize`: `number`
- `facingBetSize`: `number`
- `stackSize`: `number`
- `isIP`: `boolean`
- `unit`: `'USD' | 'BB' | 'CHIPS'`
- `opponents`: `OpponentConfig[]`

### OpponentConfig
The tactical configuration for an individual opponent.
- `id`: `string`
- `rangePreset`: `'Tight' | 'Loose' | 'Random'`
- `rangePercentage`: `number` (Fixed at 15%, 40%, 100% per FR-006)
- `rangeBitmask`: `Uint8Array` (1326 combinations, derived in worker)

### SimulationResult
Output from the mathematical engines.
- `rawEquity`: `number`
- `adjustedEquity`: `number` (Raw * EQR)
- `potOdds`: `number`
- `ev`: `number`
- `recommendation`: `'FOLD' | 'CHECK' | 'CALL' | 'RAISE'`
- `combinationsProcessed`: `number`
- `isMonteCarlo`: `boolean`
- `timeMs`: `number`

## State Transitions
1. **Input Change**: UI updates `App` state → Debounced `useEquityEngine` triggered.
2. **Calculation Start**: `isCalculating` = true → UI enters "ghosting" (0.5 opacity) state.
3. **Worker Dispatch**: Current `gameState` + range bitmasks sent to Comlink worker.
4. **Worker Result**: Simulation and valuation logic complete → `SimulationResult` returned.
5. **UI Update**: `isCalculating` = false → Result displayed at 1.0 opacity.

## Validation Rules
- `holeCards` length must be 2 for a valid simulation.
- `boardCards` must be between 0 and 5 inclusive.
- `potSize` and `stackSize` must be non-negative.
- `facingBetSize` capped at `stackSize` for EV/Pot Odds.
- `rangeBitmask` must accurately reflect `rangePreset` percentages.
