# Implementation Plan: Logic Stability, Dev Fixes, and Accuracy Verification

**Branch**: `004-fix-logic-stability` | **Date**: 2026-03-03 | **Spec**: [specs/004-fix-logic-stability/spec.md]
**Input**: Feature specification from `/specs/004-fix-logic-stability/spec.md`

## Summary

This feature addresses critical UI flickering and development environment instability while ensuring the mathematical accuracy of positional (IP/OOP) and range-based (Tight/Loose/Random) calculations. The approach involves stabilizing the `gameState` in `App.tsx` using `useMemo`, implementing a "ghosting" loading state in the UI, resolving the `tsconfig.app.json` file-watch loop in Vite, and integrating `RangeBitmask` filtering into the core simulation engines (Monte Carlo and Enumeration).

## Technical Context

**Language/Version**: TypeScript 5.x / React 18+  
**Primary Dependencies**: Vite, Comlink (Web Worker RPC), Tailwind CSS v4, Lucide React  
**Storage**: Browser LocalStorage (Persistence)  
**Testing**: Vitest (Unit), Playwright (E2E)  
**Target Platform**: Mobile-optimized Web (PWA)  
**Project Type**: Single-page Web Application  
**Performance Goals**: <100ms math engine response, 60fps UI interactions  
**Constraints**: Zero flickering on stable input, 100% session persistence, no config-driven full-reloads  
**Scale/Scope**: Logic stability, simulation accuracy, and dev experience fix

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Requirement | Status |
|-----------|-------------|--------|
| I. Mathematical Accuracy | Ensure EQR (1.15/0.85) and RangeBitmask filtering are correctly applied. | ✅ |
| II. Extreme Performance | Maintain <100ms response time with 10k MC iterations and range filtering. | ✅ |
| III. Mobile-Optimized UX | Implement "ghosting" loading state to prevent layout shift and flickering. | ✅ |
| IV. Architectural Separation | Keep simulation logic inside Web Worker; UI only handles display/inputs. | ✅ |
| V. Rigorous Modularity | Add unit tests for range-filtered simulations and positional adjustments. | ✅ |

## Project Structure

### Documentation (this feature)

```text
specs/004-fix-logic-stability/
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
├── components/          # UI Components (AnalyticsDashboard, etc.)
├── engine/              # Math Engine
│   ├── core/            # Card logic, Evaluator, Ranges
│   ├── simulators/      # Monte Carlo, Enumeration
│   ├── valuation/       # EV, Pot Odds, EQR
│   └── worker.ts        # Comlink Worker entry
├── hooks/               # React Hooks (useGameState, useEquityEngine)
└── services/            # Persistence, PWA
```

**Structure Decision**: Single project structure (standard Vite/React). No changes to the root structure, but internal logic within `src/engine` and `src/hooks` will be refined.

## Complexity Tracking

*No constitution violations identified.*
