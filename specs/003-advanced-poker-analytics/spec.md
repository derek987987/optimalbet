# Feature Specification: Advanced Poker Analytics and UI/UX improvements

**Feature Branch**: `003-advanced-poker-analytics`  
**Created**: 2026-02-26  
**Status**: Draft  
**Input**: User description: "add the following new features and UI/UX to the existing project, Hand Equity Calculator: Simulates win probability against opponent ranges.Pot Odds Analyzer: Converts table bets into required break-even percentages.Expected Value (EV) Engine: Determines the long-term profitability of decisions.Positional Awareness (IP vs. OOP): Adjusts logic based on table seating.Dynamic Bet Sizing Recommender: Suggests optimal bets based on pot, position, and EV.Optimized UI/UX: Fast input mechanisms and clear data visualization for real-time decision-making.Detailed Logic & Mathematical Rules:1. Hand Equity Calculator LogicMethodology: Use exhaustive enumeration for post-flop scenarios (calculating all exact remaining card combinations) and Monte Carlo simulations for pre-flop scenarios (running 10,000+ random rollouts to save processing power).Output: Express raw equity as a percentage from 0% to 100%.2. Pot Odds Analyzer LogicContext: Determines the mathematical threshold needed to make a profitable call.Formula: Calculate using the ratio of the call amount to the total final pot.$Pot\ Odds = \frac{Call\ Amount}{Current\ Pot + Incoming\ Bet + Call\ Amount}$Action Rule: If Adjusted Hand Equity > Pot Odds, the call is mathematically profitable.3. Expected Value (EV) Engine LogicContext: Calculates the average expectation of a specific action over the long run in dollars or big blinds (BB).Formula: $EV = (P_{win} \times \$_{win}) - (P_{lose} \times \$_{lose})$(Where $P$ is probability and $\$ is the chip amount)Action Rule: Only recommend actions where $EV > 0$. If multiple actions yield $+EV$, recommend the action with the highest $+EV$ value.4. Positional Awareness Logic (IP vs. OOP)Equity Realization (EQR): Calculate Adjusted Hand Strength = Raw Equity * EQR. If user is In Position (IP), set EQR to 1.15. If Out of Position (OOP), set EQR to 0.85.Bet Sizing: If OOP, increase the baseline recommended bet size by 15% to 25% of the pot to deny equity. If IP, use the baseline or reduce by 10% for value bets.Action Thresholds: If OOP, increase the required pot odds threshold to call by +5%. If IP, decrease the required threshold by -5%.UI/UX Improvement Requirements:1. Rapid Input InterfaceReplace standard text inputs with visual card selectors (a standard 52-card deck grid) and predefined quick-buttons for standard bet sizes (e.g., 1/3 Pot, 1/2 Pot, Full Pot, All-In). Speed is critical for a poker tool.2. Color-Coded Decision FeedbackImplement universal traffic-light color coding for instant cognitive processing:Green: $+EV$ decisions, mathematically sound calls, or highly profitable raises.Red: $-EV$ decisions, mathematically incorrect calls.Yellow/Orange: Marginal decisions (close to break-even EV).3. Visual Bet SlidersProvide a responsive drag-slider for testing custom bet sizes. The slider must dynamically update the EV Engine and Pot Odds Analyzer outputs in real-time as it moves.4. Dark Mode DefaultDesign the interface with a dark theme as the default to reduce eye strain, mimicking the aesthetics of standard digital poker environments."

## Clarifications

### Session 2026-03-02

- Q: Supported Poker Variants? → A: No-Limit Texas Hold'em (NLHE) only.
- Q: Opponent Range Specification? → A: Presets + Simple Percentage Slider (e.g., Top 10%, Top 50%).
- Q: Baseline Recommended Bet Size? → A: 50% of the pot.
- Q: Multi-way Equity Logic? → A: Use Raw Equity (P_win vs. all combined).
- Q: Individual Opponent Ranges? → A: Yes, individual ranges for each opponent.

### Session 2026-02-26

- Q: Game state persistence? → A: Automatic (LocalStorage) - State persists across reloads/restarts
- Q: Interaction with units ($, BB, chips)? → A: Global Toggle - User selects a unit that applies globally to all inputs and outputs.
- Q: Evaluation engine display detail level? → A: Summary Only - Display aggregate raw % and recommendation only to minimize clutter.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Real-time Decision Support (Priority: P1)

As a poker player, I want to quickly input the board and my hand so that I can see if calling a bet is mathematically profitable in real-time.

**Why this priority**: This is the core utility of the tool.

**Independent Test**: Can be fully tested by selecting 2 hole cards and 3 flop cards via the grid, entering a bet size, and observing the color-coded recommendation and equity display.

**Acceptance Scenarios**:

1. **Given** a dry board and a strong hand, **When** I input a small facing bet, **Then** the UI should show a Green "Call" recommendation and a positive EV.
2. **Given** I am Out of Position (OOP), **When** I check equity, **Then** the Adjusted Hand Strength should be lower than Raw Equity (using EQR 0.85).

---

### User Story 2 - Rapid Input & Bet Exploration (Priority: P2)

As a player, I want to use quick-buttons and sliders to explore different bet sizes so that I can find the optimal amount to bet or raise.

**Why this priority**: Speed and exploration are key for making decisions under time pressure.

**Independent Test**: Using the visual slider to change bet sizes and verifying that EV and Pot Odds update instantly.

**Acceptance Scenarios**:

1. **Given** a specific hand state, **When** I move the bet slider, **Then** the EV value should update in real-time.
2. **Given** the UI is in Dark Mode, **When** I select cards from the 52-card grid, **Then** the selections should be clearly visible and rapid.

---

### User Story 3 - Multi-way Equity Analysis (Priority: P3)

As an advanced player, I want to simulate my equity against multiple opponent ranges to understand my win probability in complex pots.

**Why this priority**: Covers more complex game states beyond simple heads-up.

**Independent Test**: Adding multiple opponents with specified ranges and running a Monte Carlo simulation.

**Acceptance Scenarios**:

1. **Given** a pre-flop scenario with 3 opponents, **When** I run the simulation, **Then** the system should perform 10,000+ rollouts and output an equity percentage.

---

### Edge Cases

- **Invalid Board States**: What happens if the user selects the same card twice or inputs an impossible board? (System must prevent duplicate selections in the grid).
- **Zero Pot/Bet**: How does the system handle a $0 pot or $0 bet? (System should handle as "Check" scenarios or show "N/A" for pot odds).
- **All-In Scenarios**: How are pot odds calculated when the user has fewer chips than the facing bet? (System MUST include a 'Stack Size' input; 'Call Amount' is capped at the user's stack size for all math calculations).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide a visual 52-card grid for rapid card selection, appearing as a pop-up/modal when a card slot is tapped.
- **FR-002**: Hand Equity Calculator MUST use exhaustive enumeration for post-flop states.
- **FR-003**: Hand Equity Calculator MUST use Monte Carlo simulations (min 10,000 iterations) for pre-flop states.
- **FR-004**: Pot Odds Analyzer MUST calculate the break-even percentage using the formula: `Call / (Pot + Incoming Bet + Call)`.
- **FR-005**: EV Engine MUST calculate expected value in dollars or BB using: `(P_win * $win) - (P_lose * $lose)`, where P_win is the raw equity against all combined opponents.
- **FR-006**: System MUST adjust Raw Equity by an Equity Realization (EQR) factor: 1.15 for IP, 0.85 for OOP.
- **FR-007**: Bet Sizing Recommender MUST use a baseline of 50% of the pot, then increase the recommended bet by 15-25% if OOP and decrease/maintain if IP.
- **FR-008**: UI MUST implement traffic-light background color coding: Green (+EV), Red (-EV), Yellow (Marginal).
- **FR-018**: UI MUST prioritize speed by displaying aggregate raw equity and decision recommendations using canonical terms from Constitution Principle VII: FOLD, CHECK, CALL, or RAISE. Detailed hand breakdowns MUST be hidden by default to minimize visual clutter.
- **FR-009**: System MUST provide quick-buttons for 1/3, 1/2, Full Pot, and All-In bet sizes.
- **FR-010**: System MUST support a responsive drag-slider for custom bet sizing with real-time updates.
- **FR-011**: Dark Mode MUST be the default theme.
- **FR-012**: System MUST allow users to toggle between In Position (IP) and Out of Position (OOP) status.
- **FR-013**: System MUST support simulation of up to 9 opponents simultaneously, each with an individually specified range.
- **FR-014**: System MUST provide opponent range presets (e.g., Tight, Loose, Random) and a simple percentage slider (e.g., Top 10%, Top 50%) for fast simulation configuration.
- **FR-015**: System MUST provide a 'Stack Size' input field to correctly handle All-In math.
- **FR-016**: System MUST automatically persist the Game State (cards, pot, stack, position) to LocalStorage to ensure data is restored after page reloads or app restarts.
- **FR-017**: System MUST provide a global unit toggle ($, BB, or Chips) that applies the selected symbol and formatting to all numeric inputs and Expected Value (EV) outputs.

### Key Entities *(include if feature involves data)*

- **Card**: Rank and Suit (standard 52-card deck).
- **Hand**: Set of 2 hole cards and 0-5 community cards.
- **Game State**: Current Pot, Facing Bet, Position (IP/OOP), Number of Opponents.
- **Simulation Result**: Raw Equity, Adjusted Hand Strength, Pot Odds, EV.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Monte Carlo simulations (10k iterations) complete in under 100ms (per Constitution Principle II).
- **SC-002**: Users can input a full hand (2 hole, 3 board) and bet size in under 5 seconds.
- **SC-003**: EV and Pot Odds calculations are 100% mathematically accurate based on the provided formulas.
- **SC-004**: 90% of users can identify the "correct" mathematical action based on color coding within 1 second of data appearing.
- **SC-005**: The UI remains responsive (60fps) while dragging the bet slider and updating math outputs.

## Assumptions

- **Poker Variant**: The system exclusively supports No-Limit Texas Hold'em (NLHE).
- **Currency**: The system treats units ($, BB, chips) interchangeably unless a currency conversion is required.
- **Opponent Strength**: By default, opponents are assumed to have a random range unless otherwise specified.
- **Equity Realization**: The 1.15 and 0.85 factors are applied as static multipliers to raw equity.
