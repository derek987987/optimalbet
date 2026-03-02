# Research: Advanced Poker Analytics

## Decision 1: Performance Optimization for Monte Carlo (SC-001)
- **Decision**: Use Web Workers via Comlink and bitwise hand evaluation.
- **Rationale**: JavaScript's main thread must remain at 60fps (SC-005). 10,000+ iterations of 7-card evaluations (pre-flop rollouts) can exceed 100ms if using naive object-based representations. A bitwise evaluator (e.g., Cactus Kev or similar) with TypedArrays will minimize GC pressure.
- **Alternatives considered**: WASM (rejected for initial phase to minimize build complexity; TS-optimized bitwise logic is usually sufficient for 10k rollouts).

## Decision 2: Exhaustive Enumeration Strategy (FR-002)
- **Decision**: Pre-calculate lookups for hand strengths and use incremental evaluation.
- **Rationale**: For post-flop scenarios (Turn/River), the number of remaining combinations is small enough (approx. 1,000) for exact calculation. Flop scenarios (approx. 1M combinations) will require optimized lookup tables or fallback to high-iteration Monte Carlo if enumeration exceeds 100ms.
- **Alternatives considered**: Pure Monte Carlo for all post-flop (rejected to meet "Mathematical Accuracy" principle where exact is possible).

## Decision 3: Range Representation (FR-014)
- **Decision**: Use a 13x13 bitmask/array representing the Sklansky-Chubukov or similar power ranking for the "Top X%" slider.
- **Rationale**: Enables O(1) lookup during simulation to check if a random hand is in the opponent's range.
- **Alternatives considered**: Dynamic hand list (slower during simulation loop).

## Decision 4: Multi-way EV Calculation (FR-005)
- **Decision**: P_win is calculated as the probability that the user's hand is > max(all opponents).
- **Rationale**: Standard equity definition. EV calculation: `(Equity * TotalPot) - (1 - Equity) * CallAmount`.
- **Alternatives considered**: Side-pot logic (deferred as NLHE spec focuses on "calling a bet" scenario).
