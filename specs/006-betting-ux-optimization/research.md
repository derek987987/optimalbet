# Research & Decisions: Betting UX Optimization

**Feature**: `006-betting-ux-optimization`
**Date**: 2026-03-08

## Key Decisions

### 1. Glossary Interaction Pattern
**Decision**: Use a **responsive pop-over** approach. On mobile, this acts as a bottom-sheet or centered modal for maximum readability. On larger screens (if supported), it behaves as a standard pop-over.
**Rationale**: Mobile users need focused content. Tooltips are often finicky on touch devices. A distinct "learning mode" or overlay ensures the user can read the definition without accidental dismissal or obstruction of the underlying data.
**Alternatives**:
- *Inline expansion*: Clutters the UI layout.
- *Dedicated Help Page*: Breaks the user's flow and context.

### 2. Card Selection State Management
**Decision**: **Disable** cards already selected in other slots.
**Rationale**: Prevents the user from creating invalid hand states (e.g., same card in hole and board). This is a standard pattern in poker software (e.g., Flopzilla, Equilab).
**Alternatives**:
- *Auto-swap*: If user selects As (already in Slot 1) for Slot 2, move Slot 1 content to Slot 2? Too confusing.
- *Visual warning*: Allows invalid state, requiring validation step. Adds friction.

### 3. Quick Bet Logic
**Decision**: **Dynamic Re-calculation**. When a quick-bet button (e.g., "50%") is active, the system tracks the *ratio*, not just the absolute value. If the user changes the Pot Size, the Facing Bet updates to maintain the 50% ratio.
**Rationale**: Users often adjust the pot size as the hand progresses. If they mentally committed to "he bet half pot", the calculator should respect that intent even if the pot size was initially estimated incorrectly.
**Implementation Detail**:
- State: `facingBetMode: 'manual' | 'ratio'`
- If `ratio`, `facingBet = potSize * selectedRatio`.
- If user manually edits `facingBet` input, switch mode to `manual`.

### 4. Component Structure
**Decision**: Isolate new features into `src/components/education` and `src/components/inputs`.
**Rationale**: Keeps the codebase modular and follows the "Separation of Concerns" principle. Educational content shouldn't be mixed with core betting logic files.

## Open Questions

*None. All major architectural decisions resolved.*
