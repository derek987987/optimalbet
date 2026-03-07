# Feature Specification: Betting UX & Strategy Optimization

**Feature Branch**: `006-betting-ux-optimization`  
**Created**: 2026-03-08  
**Status**: Draft  
**Input**: User description: "check for the current implementation and see if there are any furthur improvements can be done to be more user-friendly, increase the chances of winning the bet and show better UI/UX"

## Clarifications

### Session 2026-03-08
- Q: How should the card selection grid handle cards that are already assigned to other slots? → A: Disable/Hide already selected cards in the grid.
- Q: Should the "Facing Bet" value update dynamically if the user modifies the "Current Pot" size *after* having clicked a quick bet button? → A: Dynamic/Relative: Re-calculate if pot changes.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Rapid Hand Entry (Priority: P1)

As a poker player in a live game, I want to quickly input my hand and the board cards so that I can get real-time analysis without missing any action.

**Why this priority**: Speed of entry is critical for real-time utility. If it takes too long to input cards, the user won't use it during a game.

**Independent Test**: Can be fully tested by selecting 2 hole cards and 3-5 board cards using the new card selection UI and verifying that analysis starts immediately.

**Acceptance Scenarios**:

1. **Given** the app is open, **When** I tap a card slot, **Then** a card selection grid appears.
2. **Given** the card selection grid is open, **When** I select a card, **Then** the grid closes and the card is assigned to the slot.
3. **Given** cards are selected, **When** I tap "Clear", **Then** all card slots are reset.
4. **Given** one or more cards are already assigned to other slots, **When** I open the card selection grid, **Then** those cards are disabled or hidden to prevent duplicate selection.

---

### User Story 2 - Informed Decision Making (Priority: P1)

As a strategic player, I want to see a clear recommendation with the underlying math (EV, Equity vs. Pot Odds) so that I can make the most profitable (highest EV) decision.

**Why this priority**: This is the core value proposition. Increasing the "chances of winning" (long-term profitability) depends on these calculations.

**Independent Test**: Can be tested by entering a specific hand (e.g., AA) against a random range on a dry board and verifying that the recommendation is "RAISE" or "CALL" with positive EV.

**Acceptance Scenarios**:

1. **Given** a hand is analyzed, **When** I look at the dashboard, **Then** I see a prominent recommendation (FOLD/CALL/RAISE) with a color-coded indicator.
2. **Given** a recommendation is shown, **When** I look at the details, **Then** I see a comparison between "Adjusted Equity" and "Pot Odds".
3. **Given** a facing bet is entered, **When** I change the bet size, **Then** the EV and recommendation update in real-time.

---

### User Story 3 - Interactive Betting Scenarios (Priority: P2)

As a player facing a bet, I want to quickly test different bet sizes (1/3 pot, 1/2 pot, etc.) to see how they impact my EV and what my response should be.

**Why this priority**: Players often face standard bet sizes. Quick buttons improve UX and allow for "what-if" analysis.

**Independent Test**: Can be tested by clicking the "1/2 Pot" button and verifying that the "Facing Bet" input updates to exactly half the current pot size.

**Acceptance Scenarios**:

1. **Given** a pot size is entered, **When** I tap a quick bet button (e.g., "1/2"), **Then** the "Facing Bet" input is updated to 50% of the pot.
2. **Given** a facing bet is set via a button, **When** the pot size changes, **Then** the facing bet value is automatically re-calculated relative to the new pot size (e.g., maintaining the 50% ratio).

---

### User Story 4 - Interactive Learning (Priority: P2)

As a new poker player, I want to see simple definitions of professional terms (like EV, Equity, Pot Odds) directly next to the data so that I can understand the analysis and improve my game knowledge.

**Why this priority**: Improves accessibility for recreational players and ensures the app is "user-friendly" for all skill levels.

**Independent Test**: Can be tested by tapping an "info" icon next to the "EV" label and verifying that a pop-up appears with a clear definition.

**Acceptance Scenarios**:

1. **Given** the analysis dashboard is visible, **When** I tap an information icon next to a technical term, **Then** a pop-up/tooltip appears with a concise definition.
2. **Given** an info pop-up is open, **When** I tap anywhere outside the pop-up or on a "Close" button, **Then** the pop-up disappears.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST provide a high-visibility "Recommendation" dashboard that updates in real-time.
- **FR-002**: The system MUST include a "Decision Rationale" section explaining why a recommendation was made (e.g., "Equity (45%) > Pot Odds (33%) = Profitable Call").
- **FR-003**: The system MUST implement a modal-based or full-screen card selection grid to replace simple toggling, grouped by suit and rank.
- **FR-003a**: The card selection grid MUST disable or hide cards that are already assigned to other slots to prevent invalid states.
- **FR-004**: The system MUST provide quick-action buttons for common betting percentages: 25%, 33%, 50%, 66%, 75%, and 100% of the pot.
- **FR-004a**: Quick-bet buttons MUST establish a relative relationship with the pot size; updating the pot size MUST re-calculate the facing bet accordingly.
- **FR-005**: The system MUST support a dark mode theme with high-contrast elements for visibility in various lighting conditions.
- **FR-006**: The system MUST show a visual progress bar or gauge for Equity vs. Pot Odds to make the comparison intuitive.
- **FR-007**: The system MUST allow users to toggle their position (In Position vs. Out of Position) and have it reflected in the EV calculation if applicable.
- **FR-008**: The system MUST include interactive information icons (ⓘ) next to professional terms: Equity, EV, Pot Odds, IP/OOP, and Ranges.
- **FR-009**: The system MUST display term definitions in a non-intrusive pop-up (tooltip or small modal) that does not reload the page.

### Edge Cases

- **Multiple Opponents**: How does the UI handle recommendations when multiple opponents are active? (Default: Aggregate equity vs. all ranges).
- **Invalid Inputs**: How does the system handle non-numeric or negative values in pot/bet fields? (Default: Reset to 0 or previous valid value).
- **Disconnected Engine**: How does the UI indicate that calculations are currently unavailable or stalled? (Default: Show "Reconnecting" or "Engine Offline" status).
- **Overlapping Modals**: Ensure that the card selection modal and the glossary pop-up do not conflict if triggered simultaneously.

### Assumptions

- **A-001**: Users have a basic understanding of poker terms like Equity, EV, and Pot Odds, but may need quick reminders.
- **A-002**: The device has sufficient processing power to run the equity engine in the background without causing UI lag.
- **A-003**: Position (IP/OOP) primarily affects decision-making via implied odds adjustments (if implemented).
- **A-004**: Glossary definitions should be kept under 150 characters for readability on mobile screens.

### Key Entities *(include if feature involves data)*

- **Hand State**: Represents the current 2 hole cards and 0-5 board cards.
- **Betting State**: Represents the pot size, facing bet, and stack size.
- **Analysis Result**: The output of the engine including raw equity, adjusted equity, pot odds, EV, and the final recommendation.
- **Glossary Entry**: A pairing of a professional term (key) and its plain-language definition (value).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can select a full 5-card board and 2-card hand in under 10 seconds.
- **SC-002**: 100% of recommendations are accompanied by a clear "EV > 0" or "Equity > Pot Odds" explanation.
- **SC-003**: The application maintains a 60fps UI responsiveness even while the engine is calculating in the background.
- **SC-004**: Recommendation colors (Green/Red/Gray) are accessible and clearly distinguishable in both light and dark modes.
- **SC-005**: 100% of technical terms in the primary dashboard have an associated definition accessible via a single tap.
