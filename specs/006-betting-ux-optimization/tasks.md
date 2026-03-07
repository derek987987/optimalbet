# Tasks: Betting UX & Strategy Optimization

**Input**: Design documents from `/specs/006-betting-ux-optimization/`
**Prerequisites**: plan.md, spec.md, data-model.md, contracts/ui-contracts.ts, research.md

**Tests**: Tests are NOT explicitly requested as a separate TDD phase in the spec, but will be integrated into implementation tasks for verification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create component directories `src/components/education` and `src/components/inputs`
- [x] T002 Verify `lucide-react` is available in `package.json` or add it via `npm install lucide-react`
- [x] T003 [P] Configure global Tailwind v4 theme variables for dark mode in `src/index.css` or `tailwind.config.js`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 [P] Define `GlossaryTerm` and `GlossaryEntry` types in `src/types/glossary.ts`
- [x] T005 [P] Create `GLOSSARY_DATA` constant with all definitions in `src/constants/glossary.ts`
- [x] T006 [P] Implement `useBettingState` hook with dynamic ratio logic in `src/hooks/useBettingState.ts`
- [x] T007 [P] Implement `useCardSelection` hook for managing modal state in `src/hooks/useCardSelection.ts`
- [x] T008 [P] Implement `useGlossary` hook for managing pop-up state in `src/hooks/useGlossary.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Rapid Hand Entry (Priority: P1) 🎯 MVP

**Goal**: Modal-based card selection grid that disables already selected cards for fast, error-free entry.

**Independent Test**: Tapping a card slot opens a 52-card grid; selecting a card updates the slot and closes the modal; already used cards are grayed out.

### Implementation for User Story 1

- [x] T009 [P] [US1] Create `CardGrid` component with 52-card layout in `src/components/inputs/CardGrid.tsx`
- [x] T010 [US1] Implement card disabling logic in `CardGrid.tsx` using `selectedCards` prop
- [x] T011 [US1] Integrate `CardGrid` with `CardSlotGroup` in `src/components/inputs/CardSlotGroup.tsx`
- [x] T012 [US1] Replace current card toggling logic with `useCardSelection` modal triggers in `src/App.tsx`
- [x] T013 [US1] Add "Clear All" functionality to reset all slots in `src/hooks/useHandState.ts`

**Checkpoint**: User Story 1 functional - Card entry is now via a fast modal grid with duplicate prevention.

---

## Phase 4: User Story 2 - Informed Decision Making (Priority: P1)

**Goal**: Provide a clear "Decision Rationale" dashboard comparing Equity vs. Pot Odds.

**Independent Test**: Analysis display shows a breakdown of why a recommendation (CALL/FOLD) was made using a visual gauge.

### Implementation for User Story 2

- [x] T014 [P] [US2] Create `DecisionRationale` component in `src/components/analytics/DecisionRationale.tsx`
- [x] T015 [US2] Implement visual progress bar/gauge for Equity vs. Pot Odds comparison in `DecisionRationale.tsx`
- [x] T016 [US2] Integrate `DecisionRationale` into `AnalyticsDashboard` in `src/components/analytics/AnalyticsDashboard.tsx`
- [x] T017 [US2] Ensure recommendation colors (Green/Red/Gray) are high-contrast in `AnalyticsDashboard.tsx`

**Checkpoint**: User Story 2 functional - Users see clear mathematical justification for every recommendation.

---

## Phase 5: User Story 3 - Interactive Betting Scenarios (Priority: P2)

**Goal**: Quick bet buttons that maintain a relative ratio when the pot size is adjusted.

**Independent Test**: Clicking "1/2 Pot" sets the bet to 50%; changing the pot from 100 to 200 automatically updates the facing bet to 100.

### Implementation for User Story 3

- [x] T018 [P] [US3] Create `QuickBetRow` component with 25%, 33%, 50%, 66%, 75%, 100% buttons in `src/components/inputs/QuickBetRow.tsx`
- [x] T019 [US3] Integrate `QuickBetRow` into `src/components/BettingInputs.tsx`
- [x] T020 [US3] Connect `QuickBetRow` to `useBettingState` to handle ratio selection
- [x] T021 [US3] Implement dynamic re-calculation logic in `useBettingState.ts` so `facingBet` updates when `potSize` changes in `ratio` mode

**Checkpoint**: User Story 3 functional - Betting scenarios can be tested rapidly using relative percentages.

---

## Phase 6: User Story 4 - Interactive Learning (Priority: P2)

**Goal**: Educational pop-ups for professional terms to help new players understand the analysis.

**Independent Test**: Tapping an (i) icon next to "EV" opens a pop-up with its definition; tapping outside closes it.

### Implementation for User Story 4

- [x] T022 [P] [US4] Create `GlossaryPopup` component using `GLOSSARY_DATA` in `src/components/education/GlossaryPopup.tsx`
- [x] T023 [P] [US4] Create `TermHighlight` wrapper for info icons in `src/components/education/TermHighlight.tsx`
- [x] T024 [US4] Add info icons to technical terms in `AnalyticsDashboard.tsx` and `OpponentConfig.tsx`
- [x] T025 [US4] Implement "tap-outside-to-close" and z-index management for `GlossaryPopup.tsx`

**Checkpoint**: User Story 4 functional - Terminology is now accessible via interactive help triggers.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T026 [P] Ensure dark mode compatibility for all new components in `src/styles/theme.css`
- [x] T027 [P] Implement `createPortal` for `CardGrid` and `GlossaryPopup` in `src/main.tsx` or `index.html` to avoid stacking context issues
- [x] T028 Performance audit: Ensure 60fps UI animations during modal transitions
- [x] T029 [P] Create E2E tests for the "Happy Path" (Entry -> Analysis -> Learning) in `tests/e2e/ux-optimization.spec.ts`
- [x] T030 Final validation against `SC-001` through `SC-005` in `specs/006-betting-ux-optimization/spec.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories.
- **User Stories (Phase 3-6)**: All depend on Foundational phase completion.
  - US1 and US2 are P1 and should be prioritized.
  - US3 and US4 are P2 and can follow.
- **Polish (Final Phase)**: Depends on all user stories being complete.

### User Story Dependencies

- **US1**: Independent.
- **US2**: Independent.
- **US3**: Independent.
- **US4**: Independent.
*Note: While they are independent in implementation, they should be released together for the full UX upgrade.*

### Parallel Opportunities

- T004-T008 in Foundational can be implemented in parallel.
- Once Foundational is done, Developers can work on US1, US2, US3, and US4 in parallel as they touch different component directories.
- All Polish tasks marked [P] can run in parallel.

---

## Implementation Strategy

### MVP First (User Stories 1 & 2)

1. Complete Phase 1 & 2.
2. Complete Phase 3 (Rapid Entry) and Phase 4 (Decision Rationale).
3. **STOP and VALIDATE**: Test the core loop of "Input Hand -> See Rationale".

### Incremental Delivery

1. Add Phase 5 (Quick Bets) for advanced users.
2. Add Phase 6 (Glossary) for new users.
3. Final Polish and E2E verification.

---

## Notes

- [P] tasks = different files, no dependencies.
- [Story] label maps task to specific user story for traceability.
- All components must follow the architectural separation of concerns (UI only, math in worker).
- Mobile-first approach: Ensure all buttons and touch targets are adequately sized for one-handed use.
