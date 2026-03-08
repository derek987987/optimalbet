# Implementation Plan: Input Speed Optimization

**Branch**: `007-input-speed-optimization` | **Date**: 2026-03-09 | **Spec**: [specs/007-input-speed-optimization/spec.md]
**Input**: Feature specification from `/specs/007-input-speed-optimization/spec.md`

## Summary

This feature optimizes the poker input workflow by introducing multi-modal input methods: keyboard shortcuts for power users, two-step visual selection for mobile users, and quick-add buttons for betting amounts. The goal is to reduce a full 7-card input to under 10 seconds and betting adjustments to single clicks.

## Technical Context

**Language/Version**: TypeScript 5.x, React 18+ (Vite)  
**Primary Dependencies**: Tailwind CSS v4, Lucide React, Comlink (for worker communication if state updates trigger heavy re-calc)  
**Storage**: Browser LocalStorage (via existing `useAutoPersistence`)  
**Testing**: Vitest (unit tests for input parsing), Playwright (E2E for keyboard/click interactions)  
**Target Platform**: Mobile-optimized Web (PWA)
**Project Type**: Single project (Web)  
**Performance Goals**: Input transitions and suggestion popups MUST feel instantaneous (<50ms).  
**Constraints**: Offline-capable, MUST maintain 100ms limit for any triggered re-calculations.  
**Scale/Scope**: UI optimization of core input components (`BetSlider`, `CardSlotGroup`, `CardModal`).

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

1. **Mathematical Accuracy**: N/A (UI only).
2. **Extreme Performance**: Keyboard input and suggestion popups must be lag-free. (PASS)
3. **Mobile-Optimized UX**: Two-step selection and quick buttons directly address mobile ergonomics and one-handed use. (PASS)
4. **Architectural Separation**: Input logic remains in the UI layer; result state is passed to the engine. (PASS)
5. **Rigorous Modularity**: New parsing logic will be extracted into utility functions with 100% test coverage. (PASS)
6. **Heuristic Intelligence**: N/A.
7. **Actionable Clarity**: Visual focus borders and clear button labels ensure the user knows the state of their input. (PASS)
8. **Privacy and Integrity**: Local-only processing of inputs. (PASS)

## Project Structure

### Documentation (this feature)

```text
specs/007-input-speed-optimization/
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
│   ├── common/
│   │   ├── CardModal.tsx      # Update for two-step selection
│   │   └── CardSuggestion.tsx # NEW: Suggestion popup
│   └── inputs/
│       ├── CardSlot.tsx       # NEW: Individual slot with focus/keyboard logic
│       ├── QuickBetRow.tsx    # Update/Replace BetSlider
│       └── CardSlotGroup.tsx  # Orchestrate slot focus
├── engine/
│   └── utils/
│       └── card-parser.ts     # NEW: Keyboard sequence parsing logic
├── hooks/
│   ├── useKeyboardInput.ts    # NEW: Handle global/local key events
│   └── useBettingState.ts     # Update for additive behavior
└── types/
    └── input.ts               # NEW: Input types/interfaces
```

**Structure Decision**: Single project structure as identified in `GEMINI.md`. Logic is localized to `src/components/inputs` and `src/engine/utils`.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None      |            |                                     |
