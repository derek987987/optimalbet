# Implementation Plan: Betting UX & Strategy Optimization

**Branch**: `006-betting-ux-optimization` | **Date**: 2026-03-08 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/006-betting-ux-optimization/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

This feature optimizes the betting interface for speed and strategic clarity. It introduces a modal-based card input for rapid entry, quick-bet buttons with relative scaling, and an interactive glossary for educational value. The core goal is to reduce friction in live play while providing actionable, mathematically grounded advice.

## Technical Context

**Language/Version**: TypeScript 5.x, React 18+
**Primary Dependencies**: Vite, Tailwind CSS v4, Lucide React (Icons), Comlink (Web Worker RPC)
**Storage**: Browser LocalStorage (Persistence of settings/state)
**Testing**: Vitest (Unit/Component), Playwright (E2E)
**Target Platform**: Mobile Web / PWA (iOS/Android)
**Project Type**: Single Page Application (SPA)
**Performance Goals**: <100ms calculation response, 60fps UI animations
**Constraints**: Offline-capable, strict separation of UI and Math Engine
**Scale/Scope**: New UI components, updated state management, no backend changes

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **Mathematical Accuracy**: UI visualization only; underlying engine remains unchanged.
- [x] **Extreme Performance**: Calculations offloaded to Web Worker; UI updates optimized for 60fps.
- [x] **Mobile-Optimized UX**: One-handed card grid and glossary pop-ups designed for mobile context.
- [x] **Architectural Separation**: UI components (Grid, Glossary) are strictly presentation layers.
- [x] **Rigorous Modularity**: New components will be isolated in `src/components/inputs` and `src/components/education`.
- [x] **Actionable Clarity**: Decision rationale and color-coded recommendations enhance clarity.
- [x] **Privacy and Integrity**: All processing remains local; no data logging.

## Project Structure

### Documentation (this feature)

```text
specs/006-betting-ux-optimization/
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
│   ├── education/           # NEW: Glossary and educational components
│   │   ├── GlossaryPopup.tsx
│   │   └── TermHighlight.tsx
│   ├── inputs/
│   │   ├── CardGrid.tsx     # NEW: Modal-based card selector
│   │   ├── QuickBetRow.tsx  # NEW: Relative bet buttons
│   │   └── ...
│   └── analytics/
│       ├── DecisionRationale.tsx # NEW: Explainer component
│       └── ...
├── hooks/
│   ├── useCardSelection.ts  # NEW: Logic for grid interaction
│   └── useGlossary.ts       # NEW: Management of glossary state
├── constants/
│   └── glossary.ts          # NEW: Definitions data
└── ...
```

**Structure Decision**: Standard React component structure with new directories for educational content and optimized inputs.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | | |
