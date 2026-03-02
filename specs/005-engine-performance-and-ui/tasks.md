# Tasks: Advanced Simulation Engine and Enhanced UI

This document outlines the dependency-ordered tasks for implementing the Rust/WASM simulation core, Bayesian range weighting, texture-aware EQR, and the enhanced card selection UI.

## Implementation Strategy

We follow a high-performance first approach, setting up the Rust/WASM toolchain and core logic before integrating the complex Bayesian and texture-aware models. The UI enhancements are implemented in parallel to improve immediate usability.

- **MVP Goal**: Functional Rust/WASM simulation engine with 100k iterations and redesigned card selection.
- **Advanced Goal**: Bayesian range adjustment and texture-aware EQR realization.

## Phase 1: Setup & Infrastructure (WASM Toolchain)

Goal: Initialize the Rust environment and integrate with the Vite/Comlink build pipeline.

- [ ] T001 Install Rust toolchain and `wasm-pack` per quickstart.md
- [X] T002 [P] Create `src/engine/wasm` directory with `Cargo.toml` and basic project structure
- [X] T003 Install Vite plugins `vite-plugin-wasm` and `vite-plugin-top-level-await` in package.json
- [X] T004 Configure `vite.config.ts` to support WASM modules and top-level await

## Phase 2: Foundational (WASM Core)

Goal: Port the core poker logic to Rust for high-performance execution.

- [X] T005 Implement core card and hand evaluation logic in `src/engine/wasm/src/lib.rs`
- [X] T006 Implement Monte Carlo simulation engine in Rust supporting 100k iterations in `src/engine/wasm/src/simulator.rs`
- [ ] T007 [P] Create Rust unit tests for hand evaluation and simulation accuracy in `src/engine/wasm/src/tests.rs`
- [X] T008 Update `src/engine/worker.ts` to bridge calculation requests to the WASM module using Comlink

## Phase 3: User Story 4 (US4) - Rapid & Intuitive Card Selection

Goal: Enhance the UI for faster, more intuitive card input.

- [X] T009 [P] [US4] Update `src/components/inputs/CardSlotGroup.tsx` to allow individual card removal on tap
- [X] T010 [US4] Implement "Auto-Advance" logic in `src/hooks/useHandState.ts` to automatically target the next empty slot
- [X] T011 [P] [US4] Update `src/components/common/CardGrid.tsx` to visually highlight selected cards with blue borders and checkmarks
- [ ] T012 [US4] Verify SC-002: Test that hand input is significantly faster with the auto-advance and direct swap features

## Phase 4: User Story 1 (US1) - Ultra-High Precision Analysis

Goal: Ensure the Rust/WASM engine delivers the required performance and precision.

- [ ] T013 [US1] Benchmark the Rust/WASM engine to ensure 100k iterations complete in <100ms in `src/engine/worker.ts`
- [ ] T014 [US1] Verify SC-001: Run cross-validation tests between TS and WASM results in `src/engine/__tests__/wasm_bridge.test.ts`

## Phase 5: User Story 2 (US2) - Adaptive Opponent Modeling

Goal: Implement dynamic Bayesian range narrowing based on action size.

- [X] T015 [US2] Implement continuous scaling decay model for ranges in `src/engine/valuation/formulas.ts`
- [X] T016 [US2] Update `useEquityEngine.ts` to automatically trigger range recalculation when `facingBetSize` changes
- [X] T017 [US2] Integrate the dynamic range bitmasks into the WASM simulation call in `src/engine/worker.ts`

## Phase 6: User Story 3 (US3) - Texture-Aware Decision Support

Goal: Implement board texture classification and hand-specific EQR.

- [X] T018 [US3] Implement board texture classification engine (Dry, Wet, etc.) in `src/engine/core/texture.ts`
- [X] T019 [US3] Update EQR logic to use multipliers based on (Hand Category, Position, Board Texture) in `src/engine/valuation/formulas.ts`
- [X] T020 [US3] Verify SC-003: Add unit tests for texture identification and EQR scaling in `src/engine/valuation/__tests__/eqr_texture.test.ts`

## Phase 7: Polish & Validation

Goal: Final performance tuning and cross-browser verification.

- [ ] T021 Optimize WASM memory management and data transfer overhead in `src/engine/worker.ts`
- [ ] T022 Final E2E verification of the complete analytical loop in `tests/e2e/advanced-analytics.spec.ts`

## Dependencies

- **WASM Core**: T001 -> T004 -> T005 -> T008
- **US4 (UI)**: Independent of WASM core, can start immediately.
- **US2 (Bayesian)**: Depends on worker.ts updates (T008).
- **US3 (Texture)**: Depends on hand category extraction from WASM results (T006).

## Parallel Execution Examples

- **WASM & UI**: T005 (Rust Core) and T009 (Card selection UI) can be developed simultaneously.
- **Infrastructure**: T001 (Rust Setup) and T011 (Card Grid Styling) are independent.
- **Testing**: T007 (Rust Tests) and T020 (EQR Tests) focus on different layers.

## Independent Test Criteria

### US1: High Precision
- **Action**: Run simulation with 100k iterations.
- **Result**: Display updates in <100ms with stable, highly precise equity percentages.

### US2: Adaptive Modeling
- **Action**: Increase "Facing Bet" to 2x pot.
- **Result**: Opponent range automatically narrows, and equity reflects the stronger range.

### US3: Texture Awareness
- **Action**: Input a flush draw on a 3-flush board.
- **Result**: Adjusted Equity shows higher realization compared to a static 1.15 multiplier.

### US4: Intuitive UI
- **Action**: Select 5 cards rapidly from the grid.
- **Result**: Slots fill automatically in sequence; tapping an active slot removes the card.
