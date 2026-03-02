# Engine API Contract: Advanced Poker Analytics

## API Specifications

### `calculateEquity(hand, board, opponents)`

**Purpose**: Principal math engine for win probability (Hand Equity Calculator Logic).

**Parameters**:
- `hand`: `Card[2]` (user's hole cards)
- `board`: `Card[0-5]` (community cards)
- `opponents`: `Opponent[]` (1 to 9 actors with range percentages)

**Response**:
- `rawEquity`: Number (0-1.0)
- `combinationsProcessed`: Number (total rollouts or exact counts)
- `isMonteCarlo`: Boolean (true if 10k rollout used)

---

### `getRecommendation(gameState, equity)`

**Purpose**: Valuation engine for decision-making (EV Engine + Pot Odds Analyzer).

**Parameters**:
- `gameState`: `GameState` (pot, stack, facing bet, position)
- `equity`: Number (raw win probability)

**Response**:
- `ev`: Number (Expected Value in user's unit)
- `potOdds`: Number (break-even % threshold)
- `adjustedEquity`: Number (rawEquity * EQR)
- `recommendation`: Enum (FOLD, CHECK, CALL, RAISE)
- `suggestedBetSize`: Number (optimal bet based on FR-007)

---

### `getRangeBitmask(preset, percentage)`

**Purpose**: Helper for simulation engine (Opponent Range Specification).

**Parameters**:
- `preset`: Enum (TIGHT, LOOSE, RANDOM)
- `percentage`: Number (0.0 to 1.0)

**Response**:
- `bitmask`: `Uint8Array` (1326 combinations flagged as true/false)

---

## Technical Constraints
- All engine calls MUST return in < 100ms.
- Engine MUST be accessible via `Comlink` proxy for Web Worker execution.
- Calculations MUST handle "All-In" capping for `facingBetSize` via `stackSize`.
