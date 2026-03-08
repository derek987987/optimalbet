# Research: Input Speed Optimization

## Keyboard Card Input

**Decision**: Implement a state-based buffer hook `useCardBuffer` that attaches to `CardSlot` components.

**Rationale**: 
- A buffer (e.g., `['A', '']` -> `['A', 's']`) allows for natural typing.
- Using a global hook ensures only one slot is "active" at a time, preventing double inputs.
- Mapping 'T' to '10' and handling case-insensitivity ('k' vs 'K') improves UX.

**Alternatives Considered**:
- Global window listener: Rejected because it's harder to manage focus and cleanup.
- Standard HTML `<input>`: Rejected because it triggers mobile keyboards which we want to avoid in favor of our custom UI.

## Suggestion Popup

**Decision**: Use a Tailwind-styled absolute container positioned relative to the focused `CardSlot`.

**Rationale**:
- `absolute -top-12 left-0` ensures it appears above the slot.
- `z-50` ensures it stays above other board elements.
- Filtering happens in real-time as the buffer updates.

## Two-Step Card Selection

**Decision**: Refactor `CardGrid` into a stateful modal with `view: 'rank' | 'suit'`.

**Rationale**:
- Rank-first selection reduces 52 options to 13, then 4.
- Larger tap targets (48x48px min) improve mobile ergonomics.
- Smooth transition (CSS `transform: translateX`) makes the flow feel faster.

## Additive Quick Bet Buttons

**Decision**: Update `useBettingState` to include an `incrementAmount` action.

**Rationale**:
- Decouples the "addition" logic from the UI component.
- Ensures consistency between Pot Size and Facing Bet inputs.
- Manual entry remains available via numeric inputs.

## Technical Unknowns Resolved

- **Duplicate Card Prevention**: I will use the existing `selectedCards` array from `useCardSelection` to filter suggestions and modal options.
- **Focus Management**: I will use a custom `activeSlotId` in `useCardSelection` to manage which slot receives keyboard events and shows the focus border.
