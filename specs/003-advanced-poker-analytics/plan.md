# Implementation Plan: Advanced Poker Analytics

**Branch**: `003-advanced-poker-analytics` | **Date**: 2026-03-02 | **Spec**: [specs/003-advanced-poker-analytics/spec.md]
**Input**: Feature specification from `/specs/003-advanced-poker-analytics/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary
Implement a high-performance NLHE analytics suite including Hand Equity Calculator (exhaustive + Monte Carlo), Pot Odds Analyzer, EV Engine, and Positional Recommender. The technical approach leverages Web Workers via Comlink and bitwise hand evaluation to meet the 100ms performance gate (SC-001).

## Technical Context

**Language/Version**: TypeScript 5.x, React 19.x  
**Primary Dependencies**: React 19, Vite, Tailwind CSS v4, Comlink (Web Worker RPC)  
**Storage**: Browser LocalStorage (Persistence)  
**Testing**: Vitest (Unit testing), Playwright (E2E)  
**Target Platform**: Web (Mobile-optimized PWA)
**Project Type**: Single web project  
**Performance Goals**: Math engine < 100ms response (SC-001), UI 60fps responsiveness (SC-005)  
**Constraints**: Offline-capable (Constitution II), No-Limit Hold'em focus  
**Scale/Scope**: Support up to 9 simultaneous opponents with individual ranges (FR-013)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **I. Mathematical Accuracy**: Exact formulas (Pot Odds, EV, EQR) integrated into engine contracts.
- **II. Extreme Performance & Offline Capability**: Web Worker offloading ensures 100ms math gate is met without blocking UI.
- **III. Mobile-Optimized UX**: One-handed card selection grid and slider-based range inputs.
- **IV. Architectural Separation of Concerns**: Strict boundary between UI components and the `Engine API`.
- **V. Rigorous Modularity & Testing**: 100% unit test coverage requirement for probability logic in `src/engine`.

## Project Structure

### Documentation (this feature)

```text
specs/003-advanced-poker-analytics/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── analytics/      # AnalyticsDashboard, ResultsDisplay
│   ├── common/         # CardModal (FR-001)
│   └── inputs/         # BetSlider, CardSlotGroup, OpponentConfig
├── engine/
│   ├── core/           # Math logic (Card, Hand, Evaluator)
│   ├── simulators/     # Monte Carlo, Enumeration
│   ├── valuation/      # EV, Pot Odds, Recommendation logic
│   └── worker.ts       # Comlink Entry Point
├── hooks/              # useEquityEngine, useGameState, useAutoPersistence
├── services/           # Persistence, PWA
└── styles/             # cards.css, theme.css

tests/
├── e2e/                # Playwright scenarios
└── unit/               # Vitest suite (100% engine coverage)
```

**Structure Decision**: Single React project. The structure ensures a clean separation between the mathematical core (`/engine`) and the interactive UI (`/components`).

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Web Worker Architecture | Meet 100ms gate (SC-001) | Main-thread execution causes UI jank during 10k Monte Carlo iterations. |
| Bitwise Evaluator | Performance optimization | String-based or object-based evaluation is too slow for exhaustive enumeration. |
