# Implementation Plan: Suggest Raise Sizes

**Branch**: `008-suggest-raise-sizes` | **Date**: 2026-03-09 | **Spec**: [specs/008-suggest-raise-sizes/spec.md]
**Input**: Feature specification from `/specs/008-suggest-raise-sizes/spec.md`

## Summary

This feature enhances the `AnalyticsDashboard` by providing actionable raise sizing suggestions when the engine recommendation is "RAISE". It introduces a new `RaiseSuggestions` component that displays hybrid sizing (Pot % and Bet Multiples) and allows users to set the `facingBet` value by clicking a suggestion.

## Technical Context

**Language/Version**: TypeScript 5.x, React 18+  
**Primary Dependencies**: Lucide React (for UI icons)  
**Storage**: N/A (Transient UI state derived from existing game state)  
**Testing**: Vitest (Unit tests for sizing logic), Playwright (E2E for click-to-apply interaction)  
**Target Platform**: Mobile-optimized Web  
**Project Type**: Web  
**Performance Goals**: Suggestions must calculate and render in <10ms after engine results are received.  
**Constraints**: Calculation logic must correctly account for both Pot Size and the Facing Bet (if any).  
**Scale/Scope**: Extension of the `AnalyticsDashboard` and integration with `useGameState`.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

1. **Mathematical Accuracy**: Calculations will follow standard poker sizing rules (Pot % and Multiples). (PASS)
2. **Extreme Performance**: Derived UI state is computationally trivial. (PASS)
3. **Mobile-Optimized UX**: Suggestions will be presented as clear, tap-friendly buttons. (PASS)
4. **Architectural Separation**: Sizing logic will be encapsulated in a utility function, keeping it separate from the rendering logic. (PASS)
5. **Rigorous Modularity**: A new `RaiseSuggestions` component will be created. (PASS)
6. **Heuristic Intelligence**: N/A.
7. **Actionable Clarity**: Directly addresses the "Actionable Clarity" principle by adding specific numbers to the "RAISE" advice. (PASS)
8. **Privacy and Integrity**: Local processing only. (PASS)

## Project Structure

### Documentation (this feature)

```text
specs/008-suggest-raise-sizes/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
src/
├── components/
│   └── analytics/
│       ├── AnalyticsDashboard.tsx  # Integrate RaiseSuggestions
│       └── RaiseSuggestions.tsx    # NEW: Component for sizing UI
├── engine/
│   └── valuation/
│       └── formulas.ts             # Update to export sizing utility
├── types/
│   └── calculation.ts              # NEW: Define RaiseSuggestion interface
```

**Structure Decision**: Integrated within existing `src/components/analytics` structure. Logic extension in `formulas.ts`.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None      |            |                                     |
