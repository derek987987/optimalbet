# Feature Specification: Logic Stability, Dev Fixes, and Accuracy Verification

**Feature Branch**: `004-fix-logic-stability`  
**Created**: 2026-03-03  
**Status**: Draft  
**Input**: User description: "1. after I have build the application, I can see the RAW EQ, EV, and the recommendation keep on blinking and changing numbers, I want your recommendation or why it keeps on blinking or what is your recommendation 2. after some time, I see an error on the web application, [vite] changed tsconfig file detected: /Users/hay/Documents/repo/optimalbet/tsconfig.app.json - Clearing cache and forcing full-reload to ensure TypeScript is compiled with updated config values. (x2), or sometimes a reload 3. check if the selection of the OOP and IP will affect the final decision of the calculation and also the range, tight, loose or random will affect the calculation because I dont see much difference"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Stable Real-time Feedback (Priority: P1)

As a player, I want the calculated results (Equity, EV, Recommendation) to be stable and flicker-free so that I can rely on them for quick decision-making under time pressure.

**Why this priority**: Flickering values and constant "..." loading states cause confusion and reduce confidence in the tool's accuracy.

**Independent Test**: Selecting a hand and observing the results for 30 seconds without changing inputs; the values must remain constant and display a final stable result.

**Acceptance Scenarios**:

1. **Given** a fixed set of cards and bet sizes, **When** the calculation is complete, **Then** the UI must NOT flash "..." or toggle numeric values unless an input change is detected.
2. **Given** a change in input, **When** the debounce period ends, **Then** the system should execute the calculation once and update the display smoothly without multiple visual clears.

---

### User Story 2 - Accurate Positional & Range Impact (Priority: P1)

As an advanced player, I want the system to correctly account for my position (IP/OOP) and specific opponent ranges (Tight, Loose, Random) so that the tactical advice provided is mathematically sound and reflects the specific game situation.

**Why this priority**: If position and ranges do not impact the core decision (Recommendation), the tool provides generic data that fails to reflect the complexity of modern poker strategy.

**Independent Test**: Toggling position from "In Position" (IP) to "Out of Position" (OOP) or changing a range preset and verifying that both Raw Equity and Recommendation change in the dashboard.

**Acceptance Scenarios**:

1. **Given** a hand with marginal equity, **When** I toggle from IP to OOP, **Then** the system MUST apply the 0.85 EQR multiplier and update the Recommendation to be more conservative (e.g., changing from CALL to FOLD).
2. **Given** a specific board, **When** I change an opponent's range from "Random" to "Tight", **Then** the Raw Equity simulation MUST use the Tight range bitmask and result in a lower equity for the user.

---

### User Story 3 - Stable Development Environment (Priority: P2)

As a developer/advanced user, I want the application to run without unexpected configuration-driven full-reloads so that I can use it continuously for analysis sessions.

**Why this priority**: Forced full-reloads clear the current game state and interrupt the analysis flow.

**Independent Test**: Running the application in development mode and interacting with all UI elements for 30 minutes without a Vite reload triggered by `tsconfig.app.json` file changes.

**Acceptance Scenarios**:

1. **Given** the application is running, **When** I interact with the UI, **Then** the system MUST NOT trigger an external write to configuration files that causes a browser reload.

---

### Edge Cases

- **Rapid Input Changes**: How does the system handle a user rapidly changing cards or sliders? (System must cancel previous worker requests and only process the most recent stable input).
- **All-In vs Tight Range**: What happens if an opponent is all-in but has a "Tight" range? (System must still respect the range bitmask during the Monte Carlo rollout).

## Clarifications

### Session 2026-03-03

- Q: How should the interface visually indicate that a calculation is in progress while showing "stale" (previous) data? → A: Lower opacity (0.5) with a subtle pulse effect on numeric values.
- Q: Should we maintain the current heuristic for switching between Monte Carlo and Enumeration (Heads-up post-flop = Enumeration, otherwise Monte Carlo)? → A: Yes, maintain current logic.
- Q: Should we increase the Monte Carlo iteration count (currently 10,000) when ranges are very tight to ensure statistical significance? → A: No, maintain 10,000 iterations for performance stability.
- Q: Should the gameState reset to defaults if a full browser reload occurs (manual or PWA update)? → A: No, maintain existing LocalStorage persistence for all inputs.
- Q: Should we implement a global error boundary to capture and display these system-level issues to the user? → A: Yes, implement a global Error Boundary with a "Restore & Reload" UI.

## User Scenarios & Testing *(mandatory)*
...
### Functional Requirements

- **FR-001**: System MUST implement a stable state-management pattern for `gameState` in `App.tsx` (e.g., using `useMemo` or stable refs) to prevent unnecessary calculation re-triggers on every render. It MUST continue to respect existing LocalStorage auto-persistence for all game state components (cards, pot, stack, position, opponents).
- **FR-002**: Hand Equity Calculator MUST incorporate user-selected opponent ranges (Tight, Loose, Random) into simulations. It MUST maintain the current strategy: use exhaustive Enumeration for heads-up post-flop and Monte Carlo (fixed at 10,000 iterations) for all other states, applying RangeBitmask filtering in both methods.
- **FR-003**: EV Engine MUST use the **Adjusted Equity** (incorporating Position/EQR) instead of Raw Equity when generating decision recommendations (FOLD, CHECK, CALL, RAISE).
- **FR-004**: UI MUST implement a "stale data" or "ghosting" pattern where previous values are shown at 0.5 opacity with a subtle pulse effect during calculations instead of clearing to "...".
- **FR-005**: System MUST ensure that build-time or runtime plugins do NOT programmatically modify `tsconfig.app.json` in a way that triggers Vite's file watcher.
- **FR-006**: Opponent simulations MUST use the fixed preset percentages (Tight: 15%, Loose: 40%, Random: 100%) for all range-based simulations to ensure consistency with existing UI categories.
- **FR-007**: System MUST implement a global Error Boundary to capture runtime failures and provide a "Restore & Reload" UI that leverages LocalStorage persistence to return to the last known state.

### Key Entities *(include if feature involves data)*

- **Opponent Range**: A bitmask representing a subset of the 1326 possible hole card combinations.
- **Equity Realization (EQR)**: A static multiplier (1.15 for IP, 0.85 for OOP) applied to raw equity to reflect positional advantage.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Once an input is stable, the dashboard values remain static for the duration of the state (zero "blinking").
- **SC-002**: Switching position from IP to OOP for a hand with 40% raw equity results in a measurable drop in Adjusted Equity (from 46% down to 34%).
- **SC-003**: The application maintains 100% session persistence (zero config-driven reloads) during a 30-minute usage window.
- **SC-004**: Simulation logic correctly filters out at least 85% of possible hands when a "Tight" (15%) range is selected.
