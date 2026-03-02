# Implementation Plan: Poker EV and Equity Calculator

**Branch**: `002-poker-ev-calc` | **Date**: 2026-02-26 | **Spec**: [/specs/002-poker-ev-calc/spec.md]
**Input**: Feature specification from `/specs/002-poker-ev-calc/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Build a mobile-first Progressive Web App (PWA) using React and Tailwind CSS that calculates poker equity and Expected Value (EV) locally. The application features a 52-card touch-optimized grid for hand selection and support for multi-way pots (up to 9 opponents). Performance is prioritized via a decoupled math engine using Monte Carlo simulations (pre-flop/multi-way) and exact enumeration (heads-up post-flop), targeting <100ms response times for all states.

## Technical Context

**Language/Version**: TypeScript 5.x / React 18+  
**Primary Dependencies**: React, Tailwind CSS, Vite (Build tool/PWA plugin)  
**Storage**: Browser LocalStorage (Persistence)  
**Testing**: Vitest (Unit/Logic), Playwright (E2E)  
**Target Platform**: Mobile-first PWA (iOS/Android compatible)
**Project Type**: Web  
**Performance Goals**: <100ms for all equity calculations (10,000 simulations for Monte Carlo)  
**Constraints**: Offline-capable (Service Workers), No backend server, Local processing only  
**Scale/Scope**: Single-screen utility app focused on speed and mathematical accuracy

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **I. Mathematical Accuracy**: All engine logic will be validated against industry solvers (e.g., Equilab); post-flop enumeration is exact.
- [x] **II. Extreme Performance**: Local processing, bitwise card representation, and Web Workers ensure <100ms response.
- [x] **III. Mobile-Optimized UX**: Tailwind-powered, touch-optimized selection grid designed for one-handed use.
- [x] **IV. Architectural Separation**: Math engine decoupled from React components, running in a dedicated Worker.
- [x] **V. Rigorous Modularity**: Engine logic will have 100% unit test coverage using Vitest.
- [x] **VIII. Privacy**: All player data is processed locally and persisted in LocalStorage; no remote logging.

## Project Structure

### Documentation (this feature)

```text
specs/002-poker-ev-calc/
├── spec.md              # Feature specification
├── plan.md              # Implementation plan
├── research.md          # Algorithm and performance research
├── data-model.md        # Bitwise card representation and state schema
├── quickstart.md        # Setup and local development guide
├── contracts/           # Internal engine interfaces
│   └── engine-api.md    # Decoupled math engine interface
└── tasks.md             # Implementation tasks
```

### Source Code (repository root)

```text
src/
├── components/          # React UI components (Grid, Inputs, Results)
├── engine/              # Decoupled math engine (Monte Carlo, Enumeration)
│   ├── constants/       # Card bitmasks, rank/suit mappings
│   ├── simulators/      # Monte Carlo and Exact evaluators
│   └── utils/           # Hand evaluation logic
├── hooks/               # React hooks for state and persistence
├── services/            # Persistence and service worker setup
└── App.tsx              # Main entry point

tests/
├── unit/                # 100% coverage for engine/
└── e2e/                 # Playwright tests for mobile flows
```

**Structure Decision**: Single React project with strict directory separation between UI (`src/components`) and Math Engine (`src/engine`) to satisfy Constitution Principle IV.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
