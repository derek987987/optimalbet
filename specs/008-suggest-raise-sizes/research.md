# Research: Suggest Raise Sizes

## Raise Sizing Logic

**Decision**: Implement a hybrid calculation model that adapts based on whether the user is facing a bet or not.

**Rationale**:
- **Case 1: No Bet (User is first to act or checked to)**: standard "Bet" sizing (33%, 50%, 100% of the pot).
- **Case 2: Facing a Bet**: standard "Raise" sizing (3x, 4x, 100% Pot). 
- Note: In poker, a "100% Pot" raise when facing a bet is calculated as: `FacingBet + (Pot + FacingBet + Hero's Call Amount)`. This is the most common industry-standard way to calculate a pot-sized raise.

**Alternatives Considered**:
- Fixed increments only: Rejected as it doesn't account for varying game contexts (e.g., 3-betting vs open-betting).

## Interactive UI (Clickable Suggestions)

**Decision**: Pass the `setFacingBet` callback from `useGameState` down to the `RaiseSuggestions` component.

**Rationale**: 
- Provides immediate utility (Option A in clarifications).
- Clicking a suggestion updates the app state, which then triggers a re-calculation if needed (though the recommendation will likely stay "RAISE", the EV and Pot Odds will update to the selected size).

**Alternatives Considered**:
- Tooltip display: Rejected as it lacks interactivity and requires more taps.

## Stack Constraint Handling

**Decision**: Show the theoretical calculated amount even if it exceeds the user's current stack (Option B in clarifications).

**Rationale**:
- Maintains mathematical transparency.
- The UI will display the amount (e.g., "$500"), but the user's stack remains the physical limit. 
- *Refinement*: We will add a visual indicator (e.g., "(> Stack)") if the value exceeds the hero stack to provide more context.

## Technical Unknowns Resolved

- **Currency Formatting**: We will use the existing `unit` (USD/BB/CHIPS) from the game state to ensure consistent display.
- **Precision**: We will round to the nearest integer for CHIPS/BB and 2 decimal places for USD.
