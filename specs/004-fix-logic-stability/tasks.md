# Tasks: Logic Stability, Dev Fixes, and Accuracy Verification

This document outlines the dependency-ordered tasks for implementing logic stability, fixing development environment issues, and verifying positional/range accuracy in OptimalBet.

## Implementation Strategy

We follow a priority-first approach, stabilizing the development environment and UI feedback loop before deep-diving into the mathematical simulation refinements. Each phase represents an independently testable increment of the feature.

- **MVP Goal**: Flicker-free UI with stable real-time feedback (User Story 1).
- **Secondary Goal**: Accurate positional adjustments and range-based simulations (User Story 2).
- **Engineering Goal**: Stable dev environment and robust error handling (User Story 3 & FR-007).

## Phase 1: Setup & Foundational (Dev Environment)

Goal: Resolve the `tsconfig.app.json` reload loop and ensure a stable starting point.

- [X] T001 Identify and disable any programmatic modification of `tsconfig.app.json` in `vite.config.ts` or build scripts
- [X] T002 Verify that `npm run dev` no longer triggers full-reloads when interacting with the UI in the browser

## Phase 2: User Story 1 (US1) - Stable Real-time Feedback

Goal: Eliminate blinking/flickering numbers by stabilizing state and implementing ghosting UI.

- [X] T003 [P] [US1] Implement `useMemo` for the `gameState` object construction in `src/App.tsx`
- [X] T004 [US1] Ensure all setters returned by `useGameState` are stable and do not cause unnecessary re-renders in `src/hooks/useGameState.ts`
- [X] T005 [P] [US1] Add `isCalculating` prop to `AnalyticsDashboard` in `src/components/analytics/AnalyticsDashboard.tsx`
- [X] T006 [US1] Implement 0.5 opacity and `animate-pulse` Tailwind classes on dashboard values when `isCalculating` is true in `src/components/analytics/AnalyticsDashboard.tsx`
- [X] T007 [US1] Verify that dashboard values remain static and "ghosted" during calculation instead of showing "..." in the browser

## Phase 3: User Story 2 (US2) - Accurate Positional & Range Impact

Goal: Update math engine and simulators to correctly handle EQR and opponent range bitmasks.

- [X] T008 [P] [US2] Update `getRecommendation` to use `adjustedEquity` for all decision logic in `src/engine/valuation/formulas.ts`
- [X] T009 [US2] Create unit tests for range-filtered equity in `src/engine/simulators/__tests__/range_sim.test.ts`
- [X] T010 [P] [US2] Integrate `RangeBitmask` filtering into `simulateMonteCarlo` by validating opponent hole cards in `src/engine/simulators/monte-carlo.ts`
- [X] T011 [P] [US2] Integrate `RangeBitmask` filtering into `simulateEnumeration` by skipping invalid card combinations in `src/engine/simulators/enumeration.ts`
- [X] T012 [US2] Update `engine.calculate` to properly pass range bitmasks from the request to the simulators in `src/engine/worker.ts`
- [X] T013 [US2] Verify SC-002: Switching IP to OOP for 40% raw equity hand results in ~34% adjusted equity in `tests/unit/valuation.test.ts`
- [X] T014 [US2] Verify SC-004: "Tight" range simulation correctly filters ~85% of possible hands in `src/engine/simulators/__tests__/range_sim.test.ts`

## Phase 4: Polish & Error Handling (FR-007)

Goal: Implement global error boundary and final UI refinements.

- [X] T015 [P] Create `ErrorBoundary` component with "Restore & Reload" UI in `src/components/common/ErrorBoundary.tsx`
- [X] T016 Wrap the main `App` component with `ErrorBoundary` in `src/main.tsx`
- [X] T017 Verify that manual session restores from LocalStorage work correctly after a simulated crash in the browser

## Dependencies

- **US1 Completion**: T003 -> T007 (Independent)
- **US2 Completion**: T008 -> T014 (Depends on worker.ts updates)
- **US3 Completion**: T001 -> T002 (Prerequisite for efficient development)

## Parallel Execution Examples

- **UI & Logic**: T003 (App.tsx) and T008 (formulas.ts) can be worked on simultaneously.
- **Simulators**: T010 (Monte Carlo) and T011 (Enumeration) are independent and can be implemented in parallel.
- **Components**: T005 (AnalyticsDashboard) and T015 (ErrorBoundary) are independent UI tasks.

## Independent Test Criteria

### US1: Stable Feedback
- **Action**: Select a hand and wait.
- **Result**: Numbers do not flicker, dashboard remains at 0.5 opacity during calculation and stays solid once finished.

### US2: Positional/Range Accuracy
- **Action**: Change position from IP to OOP.
- **Result**: Adjusted Equity drops, and Recommendation may change from CALL to FOLD.
- **Action**: Change opponent range from Random to Tight.
- **Result**: Raw Equity updates to reflect win rate against top 15% range.

### US3: Dev Stability
- **Action**: Interact with UI in `npm run dev` mode.
- **Result**: Browser console does not show Vite reloading triggered by `tsconfig.app.json`.
