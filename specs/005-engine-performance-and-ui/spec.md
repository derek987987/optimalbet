# Feature Specification: Advanced Simulation Engine and Enhanced UI

**Feature Branch**: `005-engine-performance-and-ui`  
**Created**: 2026-03-03  
**Status**: Draft  
**Input**: User description: "1. Dynamic Range Weighting (Bayesian Inference): Transition from static presets to ranges that automatically adjust based on opponent actions (e.g., narrowing a 'Loose' range to 'Tight' if they lead with a 2x pot overbet). 2. Rust/WASM Simulation Core: Port the evaluator.ts and Monte Carlo logic to Rust/WASM to achieve 10x+ speed gains, enabling 100k+ iterations within the 100ms performance budget for higher statistical confidence. 3. Texture-Aware Equity Realization (EQR): Replace the static (1.15/0.85) multipliers with dynamic EQR factors that account for hand category and board texture (e.g., Nut-Flush draws realize equity much better than 'weak' pairs on coordinated boards). 4. can you create a more user friendly interface for choosing hole cards and board cards, now there is only a clear button to clear, choose your way to be more user-friendly when choosing cards"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Ultra-High Precision Analysis (Priority: P1)

As a professional player, I want to see calculation results based on 100,000+ simulations in real-time so that I have maximum confidence in the statistical significance of the equity data.

**Why this priority**: Statistical confidence is critical for high-stakes decision making where small percentage differences matter.

**Independent Test**: Running a pre-flop simulation and verifying that the iteration count reaches 100,000 within the 100ms UI update window.

**Acceptance Scenarios**:

1. **Given** a 5-opponent pre-flop scenario, **When** calculation starts, **Then** the engine completes 100,000 iterations in less than 100ms.
2. **Given** the Rust/WASM engine is active, **When** results are returned, **Then** they match the accuracy of the previous TypeScript implementation within 0.01%.

---

### User Story 2 - Adaptive Opponent Modeling (Priority: P1)

As a strategic player, I want the system to automatically tighten or widen opponent ranges based on their bet sizes so that I don't have to manually adjust presets during a hand.

**Why this priority**: Manual adjustment is slow and prone to error under time pressure. Automation provides a competitive edge.

**Independent Test**: Inputting a 2x pot bet and observing the opponent's range preset automatically narrowing from "Loose" to "Tight".

**Acceptance Scenarios**:

1. **Given** an opponent with a "Random" range, **When** a "Facing Bet" of >1.5x pot is entered, **Then** the range is automatically narrowed to "Tight".
2. **Given** an active hand, **When** bet sizes are adjusted via the slider, **Then** the range bitmask updates dynamically using Bayesian inference logic.

---

### User Story 3 - Texture-Aware Decision Support (Priority: P2)

As an advanced player, I want the equity realization to account for the "wetness" of the board and my specific hand strength so that the recommendation reflects realistic post-flop playability.

**Why this priority**: Static EQR (1.15/0.85) is too simplistic and can lead to overestimating weak hands on dangerous boards.

**Independent Test**: Comparing the Adjusted Equity of a flush draw on a monotone board vs a dry board.

**Acceptance Scenarios**:

1. **Given** a nut flush draw on a two-tone board, **When** position is IP, **Then** the EQR factor is >1.15 (reflecting high realization).
2. **Given** a weak pair on a coordinated (wet) board, **When** position is OOP, **Then** the EQR factor is <0.85 (reflecting equity denial).

---

### User Story 4 - Rapid & Intuitive Card Selection (Priority: P1)

As a user under time pressure, I want a card selection interface that allows me to quickly add, remove, or swap cards without clearing my entire hand.

**Why this priority**: Speed of input is the primary barrier to using the tool in real-time.

**Independent Test**: Replacing a single board card with one tap/click without resetting other selections.

**Acceptance Scenarios**:

1. **Given** a full board of 5 cards, **When** I tap an existing card in the dashboard, **Then** it is removed or opens the picker for replacement.
2. **Given** the card grid, **When** I select cards in sequence, **Then** they auto-fill the next available slot (Hole 1 -> Hole 2 -> Board 1... etc).

---

### Edge Cases

- **Impossible Ranges**: What happens if Bayesian inference narrows a range to 0 combinations (e.g., impossible line)? (System must fallback to a minimum 1% range of strongest hands).
- **Extreme Boards**: How does Texture-Aware EQR handle "Quad" boards or other rare textures? (System must use neutral 1.0 EQR for undefined textures).
- **Worker Crashes**: What happens if the Rust/WASM module fails to load? (System must fallback to the TypeScript engine).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST narrow opponent ranges based on "Facing Bet" size relative to the pot using a continuous scaling mathematical model where range percentage linearly decreases as bet size increases (e.g., 100% at 0 bet down to 10% at 2x pot overbet).
- **FR-002**: Core simulation engine MUST be implemented in Rust and compiled to WebAssembly (WASM).
- **FR-003**: Hand Equity Calculator MUST support 100,000 iterations per calculation request.
- **FR-004**: System MUST implement a Texture Classification engine (Dry, Two-Tone, Monotone, Paired, Coordinated).
- **FR-005**: EQR calculation MUST be a function of (Hand Category, Position, Board Texture).
- **FR-006**: UI MUST allow removal of individual cards by tapping the card slot in the main view.
- **FR-007**: UI MUST implement an "Auto-Advance" mode where selected cards from the grid fill the next empty slot automatically.
- **FR-008**: UI MUST visually distinguish between "Selected" and "Available" cards in the 52-card grid by highlighting selected cards with a thick blue border and a checkmark overlay while maintaining their original color.

### Key Entities *(include if feature involves data)*

- **Board Texture**: Metadata about the community cards (wetness, connectivity).
- **WASM Engine**: The high-performance calculation module.
- **Bayesian Range**: A probability-weighted bitmask of hole card combinations.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100,000 Monte Carlo iterations complete in < 100ms on modern mobile devices.
- **SC-002**: Time to input a full hand (2 hole, 3 board) decreases by 30% compared to version 0.4.0.
- **SC-003**: 95% of common board textures are correctly identified by the classification engine.
- **SC-004**: System maintains 60fps UI performance during active simulation.
