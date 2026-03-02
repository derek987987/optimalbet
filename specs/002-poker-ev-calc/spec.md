# Feature Specification: Poker EV and Equity Calculator

**Feature Branch**: `002-poker-ev-calc`  
**Created**: 2026-02-26  
**Status**: Draft  
**Input**: User description: "Build a Poker Expected Value (EV) and Equity Calculator. The app must allow users to select their 2 hole cards and up to 5 community board cards from a standard 52-card visual grid. Once a card is selected, it cannot be duplicated. The user must also be able to input numeric values for the 'Current Pot Size' and 'Facing Bet Size'. The app should calculate the mathematical win/loss probability (equity) against a random hand, calculate the Expected Value (EV) in dollars based on the pot sizes, and output a clear 'Call' or 'Fold' recommendation based on whether the EV is positive or negative."

## Clarifications

### Session 2026-02-26

- Q: Primary deployment platform? → A: Mobile Application (iOS/Android)
- Q: Should card selections and pot values persist across app restarts? → A: Persistence (Save state automatically)
- Q: Should equity calculations function without an internet connection? → A: Fully Offline (Calculations performed on device)
- Q: Display equity percentage and EV dollar amount prominently? → A: Display Both (Equity % and EV $)
- Q: Level of precision for EV and Equity values? → A: 2 decimals for EV, 1 for Equity (e.g., $10.55, 33.3%)
- Q: Support for multi-way pots? → A: Multi-way Support (Hero vs. Up to 9 Opponents)
- Q: Input method for number of opponents? → A: Slider or +/- Buttons (Touch-friendly)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Basic EV Calculation (Priority: P1)

As a poker player, I want to quickly calculate the EV of a call on the flop so that I can make a mathematically sound decision.

**Why this priority**: This is the core functionality of the application.

**Independent Test**: Can be fully tested by selecting 2 hole cards, 3 board cards, entering a pot and bet size, and verifying that an equity percentage and recommendation are displayed.

**Acceptance Scenarios**:

1. **Given** Hero has Ah Kh and the flop is 2h 7d Jh, **When** the current pot is $100 and the facing bet is $50, **Then** the app should show equity against a random hand and a 'Call' or 'Fold' recommendation.
2. **Given** a card is already selected as a hole card, **When** trying to select the same card for the board, **Then** the system must prevent the duplicate selection.

---

### User Story 2 - Real-time Recommendation Updates (Priority: P2)

As a player, I want the recommendation to update as I change the pot or bet size so that I can see how different bet sizes affect my decision.

**Why this priority**: Enhances usability and allows for "what-if" analysis.

**Independent Test**: Change the 'Facing Bet Size' value and observe the 'Call/Fold' recommendation update immediately.

**Acceptance Scenarios**:

1. **Given** a 'Call' recommendation, **When** the 'Facing Bet Size' is increased significantly, **Then** the recommendation should change to 'Fold' if the EV becomes negative.

---

### User Story 3 - Full Board Analysis (Priority: P3)

As a player, I want to input all 5 community cards to see my final equity at the river.

**Why this priority**: Completes the game loop analysis.

**Independent Test**: Select 2 hole cards and 5 board cards and verify calculation.

**Acceptance Scenarios**:

1. **Given** 2 hole cards and 5 board cards are selected, **When** pot values are entered, **Then** the final win/loss probability is calculated correctly.

---

### Edge Cases

- **Incomplete Board**: How does the system handle equity calculation with fewer than 5 board cards? (Assumption: It calculates based on remaining deck simulations).
- **Empty Inputs**: What happens if 'Current Pot Size' is empty or zero? (Requirement: System should treat as 0 or show validation error).
- **Invalid Card Combinations**: How does the system handle cases where no cards are selected? (Requirement: Calculation should be disabled until at least hole cards are selected).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide a touch-optimized 52-card visual grid for card selection suitable for mobile screens.
- **FR-002**: System MUST allow selection of exactly 2 hole cards.
- **FR-003**: System MUST allow selection of 0 to 5 community board cards.
- **FR-004**: System MUST prevent selection of duplicate cards across hole and board cards.
- **FR-005**: System MUST provide numeric input fields for 'Current Pot Size' and 'Facing Bet Size'.
- **FR-006**: System MUST calculate mathematical equity (win probability) against a user-defined number of random opponents (1 to 9).
- **FR-007**: System MUST calculate Expected Value (EV) in dollars using the formula: `EV = (Equity * (Current Pot + Facing Bet)) - ((1 - Equity) * Facing Bet)`.
- **FR-008**: System MUST display a "Call" recommendation if EV > 0 (or "Check" if Facing Bet is 0).
- **FR-009**: System MUST display a "Fold" recommendation if EV <= 0 (and Facing Bet > 0).
- **FR-016**: System SHOULD display a "Raise" recommendation if Equity exceeds needed pot odds by a significant margin (e.g., > 20% edge).
- **FR-013**: System MUST prominently display the calculated equity percentage and EV dollar amount alongside the recommendation.
- **FR-014**: System MUST display EV values with 2 decimal places and Equity values with 1 decimal place.
- **FR-015**: System MUST provide a touch-friendly input (Slider or +/- buttons) to select the number of random opponents (1-9).
- **FR-010**: System MUST update calculations and recommendations automatically when inputs change.
- **FR-011**: System MUST automatically persist the user's current hand and betting state across app restarts.
- **FR-012**: System MUST perform all equity and EV calculations locally on the device without requiring an internet connection.

### Key Entities *(include if feature involves data)*

- **Card**: Represents a single card with a Suit (Hearts, Diamonds, Clubs, Spades) and Rank (2-A).
- **Hand State**: The combination of 2 hole cards and 0-5 community cards currently selected.
- **Betting State**: The numeric values for pot and facing bet.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Equity calculation for any state completes in under 100ms (per Constitution Principle II).
- **SC-002**: Users can select 7 cards and enter 2 numeric values in under 20 seconds.
- **SC-003**: The visual grid clearly indicates which cards are selected and which are available.
- **SC-004**: EV calculation matches standard poker probability tables with >99% accuracy.

## Assumptions

- **Opponent Range**: The "random hand" refers to a full 100% range of all possible 2-card combinations.
- **Equity Calculation Method**: Monte Carlo simulation or exact calculation (depending on board state) will be used to determine win probability.
- **Currency**: Calculations are in dollars ($) as per the description.
