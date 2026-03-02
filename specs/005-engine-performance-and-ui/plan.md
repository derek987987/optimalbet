# Implementation Plan: Advanced Simulation Engine and Enhanced UI

**Branch**: `005-engine-performance-and-ui` | **Date**: 2026-03-03 | **Spec**: [specs/005-engine-performance-and-ui/spec.md]
**Input**: Feature specification from `/specs/005-engine-performance-and-ui/spec.md`

## Summary

This feature significantly upgrades OptimalBet's simulation performance and user experience. Technically, we are porting the core Monte Carlo and enumeration logic to Rust/WASM to achieve a 10x performance gain (100k+ iterations). We are also implementing a texture-aware EQR model and Bayesian range adjustment. UX-wise, the card selection interface is being redesigned for high-speed, one-handed interaction with auto-advance and visual state feedback.

## Technical Context

**Language/Version**: TypeScript 5.x, Rust 1.7x  
**Primary Dependencies**: React 19, Vite, Comlink, Tailwind CSS v4, wasm-pack  
**Storage**: Browser LocalStorage  
**Testing**: Vitest, Playwright  
**Target Platform**: Mobile Web (PWA)  
**Project Type**: Single project (WASM integrated via Vite)  
**Performance Goals**: 100k Monte Carlo iterations in <100ms  
**Constraints**: <100ms p95 math latency, 100% offline-capable  
**Scale/Scope**: Core engine overhaul and primary UI interaction redesign

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Requirement | Status |
|-----------|-------------|--------|
| I. Mathematical Accuracy | WASM engine must match or exceed TS accuracy (within 0.01%) | ✅ |
| II. Extreme Performance | Deliver 100k iterations in <100ms using Rust/WASM | ✅ |
| III. Mobile-Optimized UX | Redesigned card selection for one-handed use | ✅ |
| IV. Architectural Separation | Decouple WASM calculation core from React UI | ✅ |
| V. Rigorous Modularity | 100% unit test coverage for new Rust probability modules | ✅ |

## Project Structure

### Documentation (this feature)

```text
specs/005-engine-performance-and-ui/
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
│   │   ├── CardGrid.tsx
│   │   └── CardModal.tsx
│   └── analytics/
├── engine/
│   ├── core/
│   ├── simulators/
│   ├── valuation/
│   ├── wasm/            # NEW: Rust source code
│   │   ├── src/
│   │   ├── Cargo.toml
│   │   └── tests/
│   └── worker.ts        # Updates to bridge WASM
└── hooks/
```

**Structure Decision**: Standard single project structure with a nested `wasm` package in the engine directory. Vite will handle the WASM bundling.

## Complexity Tracking

*No constitution violations identified.*
