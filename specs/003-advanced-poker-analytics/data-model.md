# Data Model: Advanced Poker Analytics

## Entities

### Card (Rank & Suit)
- **rank**: Enum (2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A)
- **suit**: Enum (c, d, h, s)
- **id**: Bitwise representation (0-51) for O(1) evaluation.

### Hand (Player Cards)
- **holeCards**: `Card[2]`
- **boardCards**: `Card[0-5]`
- **isComplete**: Boolean (true if 5 cards on board).

### Opponent (Simulation Actor)
- **id**: String (unique player ID)
- **rangePreset**: Enum (TIGHT, LOOSE, RANDOM)
- **rangePercentage**: Number (0.0 to 1.0) for Top X% slider.
- **rangeBitmask**: Bitwise representation of all possible hole cards (1326 combinations).

### GameState (Context for EV Calculation)
- **potSize**: Number (total chips in pot BEFORE the facing bet).
- **facingBetSize**: Number (amount the user must call to continue).
- **stackSize**: Number (user's remaining chips to handle all-in math).
- **isIP**: Boolean (In Position status).
- **unit**: Enum ($, BB, CHIPS).

### SimulationResult (Output)
- **rawEquity**: Number (0-1.0 win probability).
- **adjustedEquity**: Number (rawEquity * EQR).
- **potOdds**: Number (Call / TotalPot).
- **ev**: Number (Expected value in current unit).
- **recommendation**: Enum (FOLD, CHECK, CALL, RAISE).

## Validation Rules
- **Duplicate Prevention**: No card ID can appear more than once in board + hole cards.
- **All-In Math**: `callAmount` = `min(facingBetSize, stackSize)`.
- **Monte Carlo Threshold**: If pre-flop or flop combinations > 10k, use Monte Carlo.
- **Enumeration Accuracy**: Turn/River MUST use exact enumeration.
