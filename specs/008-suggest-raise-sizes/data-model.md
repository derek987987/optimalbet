# Data Model: Suggest Raise Sizes

## Entities

### RaiseSuggestion
A transient object representing a sizing option for the user.

| Field | Type | Description |
|-------|------|-------------|
| label | string | Display label (e.g., "3x", "50% Pot") |
| amount | number | The absolute value to bet/raise (e.g., 150) |
| type | string | 'multiple' (e.g., 3x) or 'percentage' (e.g., 50%) |
| isOverStack | boolean | True if amount > hero stack |

## Validation Rules

### Calculation Logic
1.  **Multiple (nx)**: `FacingBet * n`
2.  **Percentage (%)**: 
    - If FacingBet == 0: `PotSize * percentage`
    - If FacingBet > 0: `FacingBet + (PotSize + FacingBet + CallAmount) * percentage`
3.  **Result Formatting**:
    - Round to nearest integer for BB/CHIPS.
    - Round to 2 decimal places for USD.

## State Transitions

### Applying a Suggestion
1. **User Action**: Clicks a Suggestion button in `RaiseSuggestions` component.
2. **Action**: Call `setFacingBet(suggestion.amount)`.
3. **State Change**: `facingBet` state in `useGameState` is updated.
4. **Side Effect**: App re-calculates EV/Pot Odds for the new sizing.
