# Quickstart: Input Speed Optimization

## Feature Overview

This feature optimizes card and betting input through three primary methods:
1.  **Keyboard Shortcuts**: Fast card entry (e.g., 'As') with real-time suggestions.
2.  **Two-Step Modal**: Mobile-optimized "Rank then Suit" card selection.
3.  **Additive Quick Bets**: Instant pot/bet adjustments with +10, +20, +50 buttons.

## Setup & Integration

### 1. Card Input Components
- `CardSlot`: Focusable slot with a visual highlight (`ring-2 ring-blue-500`).
- `CardSuggestion`: Floating popup above the active slot.
- `useCardBuffer`: Hook to parse keyboard sequences and filter valid cards.

### 2. Betting Components
- `QuickBetButtons`: Replaces/Extends the existing betting UI.
- Use `onIncrement` for additive behavior (`+10`, `+20`, `+50`).

### 3. State Hooks
- `useCardSelection`: Track the `activeSlotId` and `buffer`.
- `useBettingState`: Provide increment/reset actions for pot and facing amounts.

## Keyboard Reference

- **Ranks**: `2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A`
- **Suits**: `s` (Spades), `h` (Hearts), `c` (Clubs), `d` (Diamonds)

## Testing Strategy

### Unit Tests (Vitest)
- Test `card-parser.ts` for rank/suit sequence mapping.
- Test `useCardBuffer` for suggestion filtering and duplicate prevention.
- Test `useBettingState` for additive increments.

### E2E Tests (Playwright)
- Focus slot, type "As", verify slot contains Ace of Spades.
- Click "50", click "10", verify pot size is 60.
- Open modal, click "Q", verify suit view appears.
