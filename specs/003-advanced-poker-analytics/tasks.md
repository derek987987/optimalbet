# Tasks: Advanced Poker Analytics

**Input**: Design documents from `/specs/003-advanced-poker-analytics/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create project structure per implementation plan (src/engine, src/components, src/hooks)
- [X] T002 [P] Configure Vitest and Playwright in vitest.config.ts and playwright.config.ts
- [X] T003 [P] Configure Tailwind CSS v4 in vite.config.ts and index.css
- [X] T004 [P] Setup Comlink and Web Worker template in src/engine/worker.ts

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [X] T005 Implement bitwise Card and Hand entities in src/engine/core/cards.ts
- [X] T006 [P] Implement CardFactory for string-to-bitwise conversion in src/engine/core/card-factory.ts
- [X] T007 Implement basic Hand Evaluator (7-card bitwise) in src/engine/core/evaluator.ts
- [X] T008 [P] Implement range bitmask generator in src/engine/core/ranges.ts (FR-014)
- [X] T009 Implement base GameState and SimulationResult types in src/engine/core/index.ts
- [X] T010 Setup useGameState hook with LocalStorage persistence in src/hooks/useGameState.ts (FR-016)

---

## Phase 3: User Story 1 - Real-time Decision Support (Priority: P1) 🎯 MVP

**Goal**: Quickly input board/hand to see if calling is profitable.

**Independent Test**: Input 2 hole cards, 3 flop cards, and a bet; verify color-coded recommendation and EV appear.

### Tests for User Story 1 (REQUIRED per Constitution V)

- [X] T011 [P] [US1] Unit tests for Pot Odds formula in src/engine/valuation/__tests__/formulas.test.ts
- [X] T012 [P] [US1] Unit tests for EV calculation logic in src/engine/valuation/__tests__/ev.test.ts
- [X] T013 [P] [US1] Unit tests for Exhaustive Enumeration in src/engine/simulators/__tests__/enumeration.test.ts
- [ ] T014 [US1] E2E test for "Call" recommendation flow in tests/e2e/decision-support.spec.ts

### Implementation for User Story 1

- [X] T015 [US1] Implement Pot Odds Analyzer logic in src/engine/valuation/formulas.ts (FR-004)
- [X] T016 [US1] Implement EV Engine logic in src/engine/valuation/formulas.ts (FR-005)
- [X] T017 [US1] Implement Exhaustive Enumeration simulator in src/engine/simulators/enumeration.ts (FR-002)
- [X] T018 [US1] Implement EquityRealization (EQR) adjustments in src/engine/valuation/formulas.ts (FR-006)
- [X] T019 [US1] Create useEquityEngine hook to interface with Web Worker in src/hooks/useEquityEngine.ts
- [X] T020 [US1] Implement CardGrid component (52-card modal) in src/components/CardGrid.tsx (FR-001)
- [X] T021 [US1] Implement ResultsDisplay with traffic-light coding in src/components/ResultsDisplay.tsx (FR-008)
- [X] T022 [US1] Assemble AnalyticsDashboard with core P1 inputs in src/components/analytics/AnalyticsDashboard.tsx

---

## Phase 4: User Story 2 - Rapid Input & Bet Exploration (Priority: P2)

**Goal**: Use quick-buttons and sliders to explore bet sizes and optimize decisions.

**Independent Test**: Move bet slider and verify EV/Pot Odds update instantly (60fps).

### Tests for User Story 2

- [ ] T023 [P] [US2] Unit tests for Positional Bet Sizing logic in src/engine/valuation/__tests__/bet-sizing.test.ts
- [ ] T024 [US2] E2E test for bet slider real-time updates in tests/e2e/bet-exploration.spec.ts

### Implementation for User Story 2

- [ ] T025 [US2] Implement Bet Sizing Recommender with positional logic in src/engine/valuation/formulas.ts (FR-007)
- [ ] T026 [US2] Create BetSlider component with real-time feedback in src/components/inputs/BetSlider.tsx (FR-010)
- [ ] T027 [US2] Create QuickBetButtons (1/3, 1/2, Pot, All-In) in src/components/inputs/QuickBetButtons.tsx (FR-009)
- [ ] T028 [US2] Implement Position Toggle (IP/OOP) in src/components/inputs/OpponentConfig.tsx (FR-012)
- [ ] T029 [US2] Implement Stack Size input and All-In math capping in src/hooks/useGameState.ts (FR-015)

---

## Phase 5: User Story 3 - Multi-way Equity Analysis (Priority: P3)

**Goal**: Simulate equity against up to 9 opponents with individual ranges.

**Independent Test**: Add 3 opponents with 10% ranges and verify Monte Carlo returns ~100ms.

### Tests for User Story 3

- [ ] T030 [P] [US3] Unit tests for Monte Carlo simulator (accuracy check) in src/engine/simulators/__tests__/monte-carlo.test.ts
- [ ] T031 [US3] Performance benchmark for 10k rollouts (<100ms) in src/engine/__tests__/performance.bench.ts (SC-001)

### Implementation for User Story 3

- [ ] T032 [US3] Implement Monte Carlo simulator (10k iterations) in src/engine/simulators/monte-carlo.ts (FR-003)
- [ ] T033 [US3] Implement OpponentConfig component with Range Slider (Top X%) in src/components/inputs/OpponentConfig.tsx (FR-014)
- [ ] T034 [US3] Update useEquityEngine to support multiple opponents in src/hooks/useEquityEngine.ts (FR-013)
- [ ] T035 [US3] Implement dynamic adding/removing of opponents in AnalyticsDashboard.tsx

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T036 [P] Implement Global Unit Toggle ($, BB, Chips) in src/services/units.ts (FR-017)
- [ ] T037 Ensure Dark Mode default styling across all components (FR-011)
- [ ] T038 Implement PWA offline manifest and service worker in src/services/pwa.ts (Constitution II)
- [ ] T039 [P] Final documentation update in README.md and internal engine docs
- [ ] T040 Run full validation via quickstart.md scenarios

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Phase 1. BLOCKS all user stories.
- **User Stories (Phases 3-5)**: Depend on Phase 2. Can run in parallel if logic is decoupled.
- **Polish (Phase 6)**: Final step.

### Parallel Opportunities

- T002, T003, T004 (Setup)
- T006, T008 (Foundational logic)
- T011, T012, T013 (US1 Tests)
- T023 (US2 Tests)
- T030 (US3 Tests)

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup + Foundational.
2. Complete US1 (Decision Support).
3. **VALIDATE**: Verify "Call" recommendation works for flop scenarios.

### Incremental Delivery

1. Foundation (Cards/Evaluator)
2. US1: Basic Equity + EV (The "Core")
3. US2: Bet Exploration (The "UX")
4. US3: Multi-way (The "Advanced")
5. Polish: PWA + Units
