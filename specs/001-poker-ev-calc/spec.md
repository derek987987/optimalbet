# Feature Specification: Poker EV Calculator

**Feature Branch**: `001-poker-ev-calc`  
**Created**: 2026-02-26  
**Status**: Draft  
**Input**: User description: "Create an app to provide poker players with a fast, real-time calculator that determines the exact equity and Expected Value (EV) of a hand given incomplete information, advising them on the mathematically optimal betting decision. Core Feature Requirements (MVP): Card Selector (52-card touch grid), Financial Inputs (Pot Size, Facing Bet Size), Opponent Range (dropdown/slider), Calculation Engine (Monte Carlo/exact enumeration), Output Dashboard (Hero Equity, Pot Odds, EV, Call/Fold recommendation). User Flow: Input Hero Hand -> Input Board State -> Input Finances -> Trigger Calculation -> Receive Output -> Reset."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Core Equity Calculation (Priority: P1)

As a poker player, I want to select my cards and the board cards to see my current win probability (equity).

**Why this priority**: Equity calculation is the foundation of all poker strategy decisions.

**Independent Test**: Can be tested by selecting Hero cards and Flop cards, then verifying the equity percentage against a known reference.

**Acceptance Scenarios**:

1. **Given** a 52-card grid, **When** I select two cards for my hand and three for the flop, **Then** those cards should be grayed out in the grid and displayed as my current hand and board.
2. **Given** my hand and board cards are selected, **When** I trigger calculation, **Then** the system should display my equity percentage with at least 0.1% precision.

---

### User Story 2 - EV-Based Betting Advice (Priority: P2)

As a poker player, I want to input the pot size and the bet I'm facing so the app can tell me if calling is profitable (Positive EV).

**Why this priority**: Determining Expected Value (EV) is the critical step for making optimal betting decisions.

**Independent Test**: Can be tested by inputting specific pot and bet sizes with a fixed equity and verifying the EV calculation and advice.

**Acceptance Scenarios**:

1. **Given** equity is calculated, **When** I enter "Pot Size" and "Facing Bet Size", **Then** the system should display the Pot Odds.
2. **Given** Pot Odds and Equity, **When** I tap "Calculate EV", **Then** the system should display the EV in currency format and a "CALL" or "FOLD" recommendation based on whether EV is positive or negative.

---

### User Story 3 - Opponent Range Estimation (Priority: P3)

As a poker player, I want to assign my opponent a range of hands rather than a specific hand to account for incomplete information.

**Why this priority**: In real games, opponents hold a range of hands; calculating against a range is more accurate than against a single hand.

**Independent Test**: Can be tested by selecting different range presets (Tight/Loose) and observing the change in Hero equity.

**Acceptance Scenarios**:

1. **Given** a range selector, **When** I select "Top 20% Tight", **Then** the calculation engine should use that distribution for the opponent's hole cards.

---

### Edge Cases

- **Invalid Board State**: What happens when the user tries to select the same card twice? (Handled by graying out selected cards).
- **Incomplete Inputs**: How does the system handle "Calculate EV" if pot size is empty? (System should prompt for missing inputs or assume 0).
- **Impossible Hand Combinations**: Handled by disabling already selected cards in the UI.
- **Extreme Financial Values**: Handle very large pot sizes or zero-sized bets (Pot odds would be infinite).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide a 52-card touch grid for card selection.
- **FR-002**: System MUST gray out/disable cards once selected to prevent duplicates.
- **FR-003**: System MUST allow numeric input for "Current Pot Size" and "Facing Bet Size".
- **FR-004**: System MUST allow selecting opponent ranges (e.g., "Top 10%", "Any Two Cards").
- **FR-005**: System MUST calculate Hero Equity using Monte Carlo simulation for pre-flop and exact enumeration for post-flop scenarios.
- **FR-006**: System MUST output Hero Equity (%), Pot Odds (%), Expected Value (+/- currency), and a "Call/Fold" recommendation.
- **FR-007**: System MUST provide a "Reset" button to clear all inputs.

### Key Entities

- **Card**: Represents a single playing card (Rank and Suit).
- **Hand**: A collection of 2 hole cards (Hero).
- **Board**: A collection of up to 5 community cards.
- **Opponent Range**: A set of possible hand combinations for the opponent.
- **Financial Context**: Contains Pot Size and Facing Bet.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Total time from first card selection to "Call/Fold" recommendation MUST be under 10 seconds for an experienced user.
- **SC-002**: Equity calculations MUST be delivered in less than 200ms once triggered (per Constitution).
- **SC-003**: Mathematical accuracy MUST be within 0.1% of industry-standard solvers (per Constitution).
- **SC-004**: Users MUST be able to reset the state and start a new calculation in a single tap.
