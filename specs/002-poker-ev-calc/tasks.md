# Tasks: Poker EV and Equity Calculator

**Input**: Design documents from `/specs/002-poker-ev-calc/`
**Prerequisites**: plan.md, spec.md, data-model.md, contracts/engine-api.md, research.md

**Tests**: Included as per project requirements (100% unit test coverage target for logic).

**Organization**: Tasks are grouped by user story to enable incremental delivery and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- File paths are relative to repository root.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and tool configuration.

- [X] T001 Initialize Vite project with React and TypeScript
- [X] T002 Install dependencies: Tailwind CSS, Comlink, vite-plugin-pwa, Vitest, Playwright
- [X] T003 [P] Configure Tailwind CSS in `tailwind.config.js` and `src/index.css`
- [X] T004 [P] Setup Vitest configuration for unit testing in `vitest.config.ts`
- [X] T005 [P] Setup Playwright configuration for E2E testing in `playwright.config.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core data structures and infrastructure.

- [X] T006 Define bitwise Card constants and Rank/Suit mappings in `src/engine/constants/cards.ts`
- [X] T007 [P] Implement LocalStorage persistence service in `src/services/persistence.ts`
- [X] T008 [P] Setup Web Worker infrastructure with Comlink in `src/engine/worker.ts`
- [X] T009 [P] Create base CSS classes for card visuals in `src/styles/cards.css`

**Checkpoint**: Foundation ready - user story implementation can begin.

---

## Phase 3: User Story 1 - Basic EV Calculation (Priority: P1) 🎯 MVP

**Goal**: Calculate equity and EV for 2 hole cards and 3 board cards against 1-9 random opponents.

**Independent Test**: Select 2 hole cards, 3 flop cards, enter pot/bet, set 1 opponent, and verify the Call/Fold/Check advice and math details display.

### Tests for User Story 1

- [X] T010 [P] [US1] Unit test for hand evaluator (Quads, Full House, etc.) in `src/engine/utils/__tests__/evaluator.test.ts`
- [X] T011 [P] [US1] Unit test for Monte Carlo simulation logic in `src/engine/simulators/__tests__/monte-carlo.test.ts`

### Implementation for User Story 1

- [X] T012 [P] [US1] Implement bitwise 5-card hand evaluator in `src/engine/utils/evaluator.ts`
- [X] T013 [US1] Implement Monte Carlo simulator (10k iterations) in `src/engine/simulators/monte-carlo.ts`
- [X] T014 [P] [US1] Create 52-card touch-optimized `CardGrid` component (supporting 2 hole and 5 board cards) in `src/components/CardGrid.tsx`
- [X] T015 [P] [US1] Create numeric `BettingInputs` component in `src/components/BettingInputs.tsx`
- [X] T016 [P] [US1] Create `OpponentSlider` (1-9) component in `src/components/OpponentSlider.tsx`
- [X] T017 [P] [US1] Create `ResultsDisplay` with precision (EV 2 dec, Equity 1 dec) in `src/components/ResultsDisplay.tsx`
- [X] T018 [US1] Implement `useCalculations` hook for Worker interaction in `src/hooks/useCalculations.ts`
- [X] T019 [US1] Integrate components and simulation logic in `src/App.tsx`
- [X] T020 [US1] Add E2E test for basic EV calculation flow in `tests/e2e/basic-ev.spec.ts`

**Checkpoint**: User Story 1 functional and testable (MVP reached).

---

## Phase 4: User Story 2 - Real-time Recommendation Updates (Priority: P2)

**Goal**: Update calculations automatically and persist state.

**Independent Test**: Change a bet size or select a card and see the recommendation update instantly; refresh the app and see the state restored.

### Implementation for User Story 2

- [X] T021 [US2] Implement `useAutoPersistence` hook for state syncing in `src/hooks/useAutoPersistence.ts`
- [X] T022 [US2] Setup `useEffect` hooks in `src/App.tsx` for automatic re-calculation on input changes
- [X] T023 [US2] Add E2E test for persistence and real-time updates in `tests/e2e/real-time.spec.ts`

**Checkpoint**: User Stories 1 and 2 work together seamlessly.

---

## Phase 5: User Story 3 - Full Board Analysis (Priority: P3)

**Goal**: Support 4-5 board cards and Exact Enumeration for heads-up.

**Independent Test**: Select 2 hole cards and 5 board cards and verify the exact win probability matches expected GTO values.

### Implementation for User Story 3

- [X] T024 [P] [US3] Implement Exact Enumeration algorithm in `src/engine/simulators/enumeration.ts`
- [X] T025 [US3] Update `src/engine/worker.ts` to switch to Exact mode for 1 opponent post-flop
- [X] T026 [US3] Expand `CardGrid` and `HandState` to support 5 board cards
- [X] T027 [US3] Add unit test for Exact Enumeration accuracy in `src/engine/simulators/__tests__/enumeration.test.ts`

**Checkpoint**: All user stories functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Performance, offline support, and final checks.

- [X] T028 Configure `vite-plugin-pwa` service worker and manifest in `vite.config.ts`
- [X] T029 [P] Add loading indicators and "Calculating..." UI feedback
- [X] T030 [P] Implement automated performance benchmark (target <100ms) in `src/engine/__tests__/performance.bench.ts`
- [X] T031 Perform mathematical accuracy audit against industry solvers to verify 99% accuracy (SC-004)
- [X] T032 Conduct UX timing tests to verify <20s task completion for card/value entry (SC-002)
- [X] T033 Run final validation against all criteria in `spec.md`

---

## Dependencies & Execution Order

### Phase Dependencies

1. **Setup (Phase 1)**: Must complete first.
2. **Foundational (Phase 2)**: Depends on Setup.
3. **User Story 1 (Phase 3)**: Depends on Foundational.
4. **User Stories 2 & 3 (Phases 4 & 5)**: Depend on US1. Can be done in parallel but US1 is the backbone.
5. **Polish (Phase 6)**: Final steps.

### Parallel Opportunities

- T003, T004, T005 (Setup configs)
- T007, T008, T009 (Foundational services/styles)
- T010, T011 (Logic tests)
- T014, T015, T016, T017 (UI components for US1)
- T024, T027 (US3 Enumeration logic)

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup and Foundational.
2. Build US1 logic (Evaluator + MC Simulator).
3. Build US1 UI (Grid, Inputs, Results).
4. Verify with US1 E2E tests.

### Incremental Delivery

- Add US2 for auto-persistence and "live" feel.
- Add US3 for exact math on the turn/river.
- Finish with PWA and performance benchmarking.
