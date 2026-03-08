# Tasks: Input Speed Optimization

**Branch**: `007-input-speed-optimization`
**Implementation Plan**: `specs/007-input-speed-optimization/plan.md`

## Phase 1: Setup

- [x] T001 Define input types and interfaces in `src/types/input.ts`
- [x] T002 Create card sequence parsing utility in `src/engine/utils/card-parser.ts`
- [x] T003 [P] Add unit tests for card-parser in `src/engine/utils/__tests__/card-parser.test.ts`

## Phase 2: Foundational

- [x] T004 Implement `useCardBuffer` hook for keyboard sequence management in `src/hooks/useCardBuffer.ts`
- [x] T005 Update `useBettingState` to include `incrementAmount` and `reset` actions in `src/hooks/useBettingState.ts`
- [x] T006 Update `useCardSelection` to track `activeSlotId` and handle buffer state in `src/hooks/useCardSelection.ts`

## Phase 3: User Story 1 - Keyboard Card Input

**Goal**: Enable rapid card entry via keyboard with focus management.
**Independent Test**: Focus a slot, type 'As', and verify the Ace of Spades is assigned.

- [x] T007 [US1] Refactor `CardSlot` to support focus state and keyboard events in `src/components/inputs/CardSlot.tsx`
- [x] T008 [US1] Implement focus ring visualization in `src/components/inputs/CardSlot.tsx`
- [x] T009 [US1] Integrate `useCardBuffer` into `CardSlotGroup` to orchestrate input in `src/components/inputs/CardSlotGroup.tsx`

## Phase 4: User Story 2 - Rapid Betting Input

**Goal**: Replace slider with additive quick-bet buttons.
**Independent Test**: Click '+10' twice and verify the value increases from 0 to 20.

- [x] T010 [US2] Create `QuickBetButtons` component with +10, +20, +50 and Reset in `src/components/inputs/QuickBetButtons.tsx`
- [x] T011 [US2] Replace `BetSlider` with `QuickBetButtons` in `src/components/ResultsDisplay.tsx` (or appropriate parent)
- [x] T012 [US2] Add manual numeric input field for precise betting in `src/components/inputs/QuickBetButtons.tsx`

## Phase 5: User Story 3 - Two-Step Visual Selection

**Goal**: Mobile-optimized Rank-then-Suit selection flow.
**Independent Test**: Open modal, click 'K', then 'd', verify King of Diamonds is selected.

- [x] T013 [US3] Refactor `CardGrid` to support `view: 'rank' | 'suit'` state in `src/components/inputs/CardGrid.tsx`
- [x] T014 [US3] Implement Rank selection grid in `src/components/inputs/CardGrid.tsx`
- [x] T015 [US3] Implement Suit selection view with auto-reset to Rank in `src/components/inputs/CardGrid.tsx`

## Phase 6: User Story 4 - Real-time Suggestions

**Goal**: Show matching available cards during keyboard input.
**Independent Test**: Type 'A' and verify a popup shows Spades, Hearts, Clubs, Diamonds (if available).

- [x] T016 [US4] Create `CardSuggestion` popup component in `src/components/common/CardSuggestion.tsx`
- [x] T017 [US4] Implement suggestion filtering logic (exclude used cards) in `src/hooks/useCardBuffer.ts`
- [x] T018 [US4] Integrate `CardSuggestion` into `CardSlot` with keyboard navigation (Arrows/Enter) in `src/components/inputs/CardSlot.tsx`

## Phase 7: Polish & Validation

- [x] T019 [P] Ensure all input transitions feel instantaneous (<50ms)
- [x] T020 [P] Verify offline persistence of new betting/card states
- [x] T021 Run final E2E test suite in `tests/e2e/input-optimization.spec.ts`

## Implementation Strategy

1. **MVP**: Complete US1 (Keyboard) and US2 (Quick Bets) first as they provide the highest speed gains.
2. **Incremental**: Add US3 (Two-step) for mobile accessibility.
3. **Refinement**: Add US4 (Suggestions) and Polish to finalize the UX.

## Dependencies

US1 -> US4 (Suggestions depend on keyboard buffer)
Phase 2 -> US1, US2, US3 (Hooks/Prereqs)
