# Data Model: Advanced Simulation Engine and Enhanced UI

## Entities

### BoardTexture
Classification of community cards.
- `id`: `number` (Bitmask or enum)
- `name`: `'DRY' | 'WET' | 'MONOTONE' | 'PAIRED' | 'COORDINATED'`
- `connectivity`: `number` (0.0 to 1.0)
- `flushDanger`: `number` (0.0 to 1.0)

### BayesianRange
Dynamic range configuration.
- `opponentId`: `string`
- `initialPreset`: `'Tight' | 'Loose' | 'Random'`
- `dynamicPercentage`: `number` (Calculated based on action)
- `bitmask`: `Uint8Array` (1326 combinations)

### HandCategory (WASM Internal)
Heuristic classification for EQR adjustment.
- `category`: `'NONE' | 'PAIR' | 'TWO_PAIR' | 'SET' | 'STRAIGHT' | 'FLUSH' | 'FULL_HOUSE' | 'QUADS'`
- `drawType`: `'NONE' | 'GUTSHOT' | 'OESD' | 'FLUSH_DRAW' | 'COMBO_DRAW'`

## Interaction Logic
1. **Action Input**: User adjusts "Facing Bet".
2. **Bayesian Processor**: Calculates `dynamicPercentage` for each opponent.
3. **Range Generator**: Updates `RangeBitmask` based on new percentage.
4. **Texture Analyzer**: Evaluates `boardCards` to determine `BoardTexture`.
5. **WASM Simulator**: Performs 100k iterations using ranges and texture context.
6. **EQR Engine**: Applies dynamic multipliers to raw equity.
