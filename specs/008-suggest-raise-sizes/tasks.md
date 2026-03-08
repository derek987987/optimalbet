# Tasks: Suggest Raise Sizes

**Branch**: `008-suggest-raise-sizes`
**Implementation Plan**: `specs/008-suggest-raise-sizes/plan.md`

## Phase 1: Setup

- [X] T001 Define `RaiseSuggestion` interface in `src/types/calculation.ts`
- [X] T002 Update `src/engine/valuation/formulas.ts` to export `getRaiseSuggestions` utility
- [X] T003 [P] Create unit tests for `getRaiseSuggestions` in `src/engine/valuation/__tests__/sizing.test.ts`

## Phase 2: Foundational

- [X] T004 Implement hybrid sizing logic in `getRaiseSuggestions` within `src/engine/valuation/formulas.ts`
- [X] T005 [P] Verify calculation accuracy for Pot % and Bet Multiples in `src/engine/valuation/__tests__/sizing.test.ts`

## Phase 3: User Story 1 - View Suggested Raise Sizes

**Goal**: Display clickable sizing suggestions when recommendation is "RAISE".
**Independent Test**: Input hand with "RAISE" recommendation and verify that suggestions (e.g., 3x, 50% Pot) appear and are clickable.

- [X] T006 [US1] Create `RaiseSuggestions` component in `src/components/analytics/RaiseSuggestions.tsx`
- [X] T007 [US1] Implement button rendering with currency formatting (handling large numbers like $1M+) in `src/components/analytics/RaiseSuggestions.tsx`
- [X] T008 [US1] Integrate `RaiseSuggestions` into `src/components/analytics/AnalyticsDashboard.tsx`, updating its interface to accept sizing callbacks
- [X] T009 [US1] Pass `setFacingBet` callback to `RaiseSuggestions` through `AnalyticsDashboard` in `src/App.tsx`

## Phase 4: User Story 2 - Dynamic Adjustment

**Goal**: Suggestions update instantly when pot size or facing bet changes.
**Independent Test**: Change pot size from 100 to 200 and verify suggested "50% Pot" value updates from 50 to 100 instantly.

- [X] T010 [US2] Ensure `RaiseSuggestions` uses memoized values derived from `potSize` and `facingBetSize` in `src/components/analytics/RaiseSuggestions.tsx`
- [X] T011 [US2] Verify reactive updates in E2E tests in `tests/e2e/sizing-suggestions.spec.ts`

## Phase 5: Polish & Validation

- [X] T012 [P] Add visual "Over Stack" indicator for theoretical suggestions in `src/components/analytics/RaiseSuggestions.tsx`
- [X] T013 [P] Ensure suggestions are mobile-responsive and tap-friendly in `src/components/analytics/RaiseSuggestions.tsx`
- [X] T014 Run full E2E test suite in `tests/e2e/sizing-suggestions.spec.ts`

## Implementation Strategy

1. **MVP**: Implement Story 1 (View and Click) with basic Pot % sizing first.
2. **Incremental**: Add Story 2 (Hybrid logic) to handle "Facing Bet" multiples.
3. **Refinement**: Add "Over Stack" warnings and UI polish.

## Dependencies

- Phase 1 -> Phase 2 (Types and Utility exported)
- Phase 2 -> Phase 3 (Logic ready for UI)
- Phase 3 -> Phase 4 (Component integrated)
