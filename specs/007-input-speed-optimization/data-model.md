# Data Model: Input Speed Optimization

## Entities

### CardInputSession
Represents a temporary state for a card slot being edited via keyboard.

| Field | Type | Description |
|-------|------|-------------|
| slotId | string | Unique ID for the slot (e.g., 'hole-0', 'board-2') |
| buffer | string | 1-2 character sequence (e.g., 'A', 'As') |
| suggestions | string[] | Array of valid card strings (e.g., ['As', 'Ah']) |
| isFocused | boolean | Whether this slot is active for keyboard input |

### CardSuggestion
Calculated set of available cards based on the `buffer`.

- **Rules**: 
  - If buffer is 1 char (Rank): Suggest all available suits for that rank.
  - If buffer is 2 chars (Rank+Suit): Auto-select and clear buffer if valid.
  - EXCLUDE any card already present in `selectedCards`.

### BettingAdjustment
State update for Pot Size or Facing Bet.

- **Action**: `INCREMENT(amount: number, target: 'pot' | 'facing')`
- **Validation**:
  - Result must be non-negative.
  - Result must be an integer.
  - Max value constraint (e.g., 999,999) to prevent UI overflow.

## State Transitions

### Card Selection Flow
1. **Focus Slot**: `isFocused: true`, `buffer: ""`
2. **Type Rank**: `buffer: "A"`, `suggestions: ["As", "Ah", "Ac", "Ad"]` (minus any already used)
3. **Type Suit OR Click Suggestion**: 
   - `onSelectCard(card)`
   - `isFocused: false`
   - `buffer: ""`
   - `suggestions: []`

### Two-Step Visual Selection
1. **Open Modal**: `view: 'rank'`
2. **Click Rank**: `selectedRank: "Q"`, `view: 'suit'`
3. **Click Suit**: `onSelectCard("Qs")`, `closeModal()`
