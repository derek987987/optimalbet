# Research: Poker EV Engine and PWA Architecture

## Decision 1: Bitwise Card Representation
**Decision**: Represent cards as 32-bit integers where specific bits represent Rank and Suit.
**Rationale**: 
- Bitwise operations (AND, OR, XOR, shifts) are extremely fast in V8.
- Enables "lookup table" optimizations for hand evaluation (e.g., Cactus Kev or TwoPlusTwo algorithms).
- Minimizes memory footprint during 10,000+ simulations in multi-way pots.
**Alternatives considered**: 
- Objects `{rank, suit}`: High overhead due to GC and property access.
- Simple Numeric Arrays: Faster than objects but slower than bitwise for complex evaluations.

## Decision 2: Simulation Strategy (Web Workers)
**Decision**: Run Monte Carlo and Exact Enumeration in a dedicated Web Worker using the `Comlink` library for RPC-style communication.
**Rationale**: 
- Prevents the UI thread from freezing during heavy computation (Constitution Principle II).
- Allows the progress of 10,000 simulations to be reported asynchronously to the UI.
**Alternatives considered**: 
- Main thread `setTimeout` chunks: Less efficient and harder to manage.
- WebAssembly (WASM): Potentially faster, but increases complexity; bitwise JS is likely sufficient for 10k sims in <100ms.

## Decision 3: Offline Persistence
**Decision**: Use `LocalStorage` for simple state persistence and `vite-plugin-pwa` for service worker management and asset caching.
**Rationale**: 
- `LocalStorage` is synchronous and perfectly suited for the small "Hand State" and "Betting State" objects.
- `vite-plugin-pwa` provides a standard, robust way to handle the "Add to Home Screen" (A2HS) flow and offline availability.
**Alternatives considered**: 
- IndexedDB: Overkill for simple state, better for large datasets.
- Cookies: Limited size and unnecessary for local-only apps.

## Decision 4: Hand Evaluation Algorithm
**Decision**: Use a Prime Number multiplication or bit-count lookup table (Cactus Kev variant).
**Rationale**: 
- Allows evaluating a 5-card or 7-card hand in a single operation after initial mapping.
- Critical for reaching the 100ms target during post-flop enumeration where thousands of combinations must be checked.
**Alternatives considered**:
- Sorting and Iteration: Too slow for large-scale simulations.
