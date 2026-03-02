# Research: Advanced Simulation Engine and Enhanced UI

## Decision: Vite 7 + wasm-pack Integration
We will use the `vite-plugin-wasm` and `vite-plugin-top-level-await` to integrate the Rust-compiled WASM module. This setup allows importing WASM directly into the Web Worker.

**Rationale**: Vite 7 natively supports modern WASM features, but these plugins provide the most robust integration path for Comlink-based Web Workers and production bundling.

**Alternatives Considered**:
- Manual fetch and initialization of `.wasm` files. Rejected due to complex bundling and path-resolution issues in PWAs.

## Decision: Bayesian Range Weighting Logic
We will implement a linear decay model: `Range % = Initial % * max(0.1, 1.0 - (FacingBet / (Pot * 2)))`. 

**Rationale**: This provides a simple but effective approximation of how ranges narrow as bet sizes increase relative to the pot. It satisfies the requirement for a continuous scaling model.

**Alternatives Considered**:
- Discrete tiered thresholds. Rejected by user choice (Option B).

## Decision: Texture-Aware EQR Model
We will implement a classification-based multiplier system. 
- Base EQR: IP (1.15), OOP (0.85)
- Multipliers:
  - Dry: 1.0x
  - Wet/Coordinated: Draw (1.2x), Made Hand (0.9x)
  - Paired: 1.05x

**Rationale**: Texture significantly impacts how well certain hand categories can realize their equity. This model provides more realistic recommendations than static multipliers.

**Alternatives Considered**:
- Full GTO solver integration. Rejected due to the 100ms performance constraint and implementation complexity.

## Decision: UI Auto-Advance Card Selection
The card picker will maintain an internal "active slot" pointer. When a card is selected in the grid, the UI will:
1. Assign the card to the active slot.
2. Move the pointer to the next empty slot (Hole 1 -> Hole 2 -> Flop 1...).
3. If no empty slots remain, the picker closes.

**Rationale**: This reduces the number of taps required to input a hand, significantly improving speed for power users.

**Alternatives Considered**:
- Click-to-open-picker for every slot. Rejected as it is too slow for real-time play.
