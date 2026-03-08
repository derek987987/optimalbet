# Feature Specification: Input Speed Optimization

**Feature Branch**: `007-input-speed-optimization`  
**Created**: 2026-03-09  
**Status**: Draft  
**Input**: User description: "I need to increase the speed to input the cards, not selecting one by one in the cards, 1. I have some options for you, for example, let user type a number or a t = ten, jqk as court cards, and s for spade, h for heart, c for clubs and d for diamonds 2. simplify the selecting of the cards into first choose the number or jqk, then select the suit to avoid everytime the user need to scroll down and select cards for the current pot, I want to add some buttons like 10/20/50 for user to quickly add to the current pot to increase the input speed, or any suggestions to increase the input speed? Do it for the same for facing bet instead of the bar"

## Clarifications

### Session 2026-03-09

- Q: How should the user select a card suggestion using only the keyboard? → A: Auto-Complete & Arrows: Typing the suit selects immediately; Arrow keys navigate the popup, Enter confirms.
- Q: What should be the default view when the two-step card selection modal opens? → A: Reset to Rank: Every time the modal opens, it starts at the rank selection view.
- Q: What should the "Clear/Reset" button do for betting amounts? → A: Reset to 0: The amount immediately becomes 0.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Fast Card Input via Keyboard (Priority: P1)

As a frequent user, I want to use my keyboard to quickly specify card ranks and suits for my hand and the board, so I can run simulations without tedious clicking or scrolling.

**Why this priority**: Keyboard input is the fastest method for power users and significantly reduces interaction time compared to UI-based selection.

**Independent Test**: Can be tested by focusing a card slot and typing "AsKh" to see if the Ace of Spades and King of Hearts are correctly assigned.

**Acceptance Scenarios**:

1. **Given** a selected card slot, **When** the user types 'A' then 's', **Then** the slot is filled with the Ace of Spades.
2. **Given** a selected card slot, **When** the user types '1', '0', 'h' (or 'T', 'h'), **Then** the slot is filled with the Ten of Hearts.
3. **Given** a card slot is filled, **When** the user types a new valid card sequence, **Then** the card is updated to the new value.

---

### User Story 2 - Rapid Betting Input via Quick Buttons (Priority: P1)

As a player calculating EV, I want to use predefined increment buttons to quickly set the Pot Size and Facing Bet amounts, so I don't have to use a precise slider or type every digit.

**Why this priority**: Betting amounts change frequently during a hand. Providing common increments (10/20/50) drastically speeds up the "current pot" and "facing bet" inputs.

**Independent Test**: Can be tested by clicking the "10" button twice and verifying the pot size increases to 20.

**Acceptance Scenarios**:

1. **Given** a Pot Size of 0, **When** the user clicks the "50" button, **Then** the Pot Size becomes 50.
2. **Given** a Facing Bet of 20, **When** the user clicks the "10" button, **Then** the Facing Bet becomes 30.
3. **Given** a Facing Bet amount, **When** the user clicks a "Clear" or "Reset" button (implied requirement), **Then** the amount returns to 0.

---

### User Story 3 - Optimized Visual Card Selection (Priority: P2)

As a mobile or tablet user, I want a simplified two-step selection process (Rank then Suit) rather than a long scrollable list, so I can find and select cards more efficiently with touch.

**Why this priority**: Improves usability on smaller screens where scrolling through 52 cards is cumbersome.

**Independent Test**: Can be tested by opening the card selector, choosing "J" from a rank grid, then "d" from a suit grid, and verifying the Jack of Diamonds is selected.

**Acceptance Scenarios**:

1. **Given** the card selection modal is open, **When** a user taps a Rank (e.g., 'Q'), **Then** a suit selection sub-menu or overlay appears.
2. **Given** the suit selection is visible, **When** a user taps a Suit (e.g., 'c'), **Then** the selection is confirmed and the modal closes.

---

### User Story 4 - Real-time Card Suggestions (Priority: P2)

As a user typing card values, I want to see a small popup of matching cards (e.g., "As, Ah, Ac, Ad") as I type, so I can quickly confirm my choice or see what's available without finishing the full sequence.

**Why this priority**: Reduces cognitive load and prevents typos by providing immediate visual feedback and a "shortcut" to completion.

**Independent Test**: Can be tested by focusing a slot and typing "A"; verifying that a popup appears showing all four Aces.

**Acceptance Scenarios**:

1. **Given** a selected card slot, **When** the user types a Rank (e.g., 'K'), **Then** a popup appears showing all available suits for that rank (Ks, Kh, Kc, Kd).
2. **Given** the suggestion popup is visible, **When** the user types a Suit (e.g., 's') OR clicks a suggestion, **Then** the card is selected and the popup closes.
3. **Given** a card is already in use elsewhere, **When** the suggestions are generated, **Then** that specific card MUST be excluded from the list.

---

### Edge Cases

- **Invalid Sequences**: What happens when a user types "Zs" or "A5"? (System should ignore invalid characters or provide immediate visual feedback).
- **Duplicate Cards**: How does the system handle selecting a card that is already present in another slot? (System MUST prevent duplicates and warn the user).
- **Suggestion Filtering**: If the Ace of Spades is already in the player's hand, it should not appear in the suggestions for the Board slots.
- **Large Increments**: If the user clicks "50" repeatedly, is there an upper limit to the pot/bet size?
- **Keyboard Focus**: How does the user know which slot is currently receiving keyboard input?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide keyboard shortcuts for card ranks: 2-9, T/t (Ten), J/j (Jack), Q/q (Queen), K/k (King), A/a (Ace).
- **FR-002**: System MUST provide keyboard shortcuts for card suits: s (Spades), h (Hearts), c (Clubs), d (Diamonds).
- **FR-003**: System MUST provide a two-step UI for card selection: Rank first, then Suit.
- **FR-004**: System MUST include quick-add buttons (+10, +20, +50) for both Pot Size and Facing Bet.
- **FR-005**: System MUST allow manual numeric entry for betting amounts as a fallback/alternative to buttons.
- **FR-006**: System MUST replace the Facing Bet slider entirely with quick-add buttons and manual numeric entry.
- **FR-007**: System MUST provide a clear visual highlight (e.g., a bright border) around the card slot currently receiving keyboard focus.
- **FR-008**: System MUST ensure quick bet buttons (+10, +20, +50) ADD to the current value rather than overwriting it.
- **FR-009**: System MUST display a real-time suggestion popup of available cards matching the user's partial keyboard input.

### Key Entities *(include if feature involves data)*

- **Card Input State**: Represents the currently selected rank and suit for a specific hand or board slot.
- **Betting State**: Represents the numeric values for Pot Size and Facing Bet, influenced by quick-add buttons and manual input.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can input a full 5-card board and 2-card hand in under 10 seconds using keyboard shortcuts.
- **SC-002**: Setting a specific pot size (e.g., 80) takes fewer than 4 clicks using quick buttons (e.g., 50 + 20 + 10).
- **SC-003**: Users report a significant reduction in perceived effort for card selection compared to the previous scrolling list.
- **SC-004**: Zero invalid card combinations (duplicates) are accepted by the input system.
