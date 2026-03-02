# Data Model: Poker EV Calculator

## Entities

### Card (Bitwise Representation)
- **Structure**: 32-bit Integer
- **Bits 0-3**: Suit (2^0: Spades, 2^1: Hearts, 2^2: Diamonds, 2^3: Clubs)
- **Bits 4-16**: Rank (Bit set at position `rank_index`, where 2=0, A=12)
- **Bits 17-22**: Rank Value (Binary representation of rank 2-14 for high-card tie-breaking)
- **Bit 23-31**: Prime Number mapping (Used for unique hand product calculation)

### Hand State
- **holeCards**: `[Card, Card]` (exactly 2)
- **boardCards**: `Card[]` (0 to 5)
- **opponentCount**: `number` (1 to 9)
- **deadCards**: Set of all selected cards to prevent duplicates.

### Betting State
- **potSize**: `number` (Positive float)
- **facingBet**: `number` (Positive float)

## Validation Rules
- `holeCards` must have unique cards.
- `boardCards` must have unique cards and not overlap with `holeCards`.
- Total cards in `deadCards` <= 7.
- `potSize` and `facingBet` must be >= 0.
- `opponentCount` must be within 1-9.

## State Transitions
- **SelectCard**: Adds card to `holeCards` (if < 2) or `boardCards` (if < 5) and updates `deadCards`.
- **RemoveCard**: Removes card and frees it in the 52-card grid.
- **UpdateBetting**: Recalculates EV and recommendation based on input changes.
