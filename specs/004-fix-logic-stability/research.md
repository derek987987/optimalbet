# Research: Logic Stability and Accuracy Verification

## Decision: Range-Filtered Simulations
To integrate opponent ranges, we will update `simulateMonteCarlo` and `simulateEnumeration` to accept `RangeBitmask` arrays for each opponent. In each iteration/combination, the engine will draw from the filtered subset of hands or validate randomly generated hands against the bitmask.

**Rationale**: This ensures that equity results reflect the selected "Tight", "Loose", or "Random" ranges rather than assuming 100% random cards. Using a bitmask (Uint8Array of 1326 combinations) allows for O(1) membership checks, keeping simulation performance high.

**Alternatives Considered**:
- Generating full hands and then checking if they fall within the range percentage (Discard-and-Redraw). This would be slower, especially for tight ranges (15%), as it would waste many iterations on rejected hands.
- Using pre-calculated equity tables for common range matchups. This was rejected due to the complexity of board state interactions and the high number of possible board combinations.

## Decision: State Stabilization in App.tsx
The `gameState` object passed to `useEquityEngine` will be memoized using `useMemo`. We will also ensure that `useGameState` returns stable callback references.

**Rationale**: The "blinking" issue is caused by the `gameState` object being recreated on every render, which triggers the `useEquityEngine` useEffect/debounce even when no inputs have changed. Memoization will stop these unnecessary re-triggers.

**Alternatives Considered**:
- Using a `useRef` for the entire game state. This was rejected because the UI needs to reactively re-render when state changes; `useMemo` provides the necessary stability while maintaining reactivity.

## Decision: Vite tsconfig File-Watch Fix
We will investigate the `vite.config.ts` and `tsconfig.app.json` interaction. A common cause is a plugin or build script modifying the `tsconfig.app.json` (e.g., updating paths or includes) during development.

**Rationale**: Continuous reloads during development interrupt the analysis flow and clear the local application state. We must identify the "silent writer" to the tsconfig file.

**Alternatives Considered**:
- Disabling Vite's config watcher. Rejected because it's a "hack" that could lead to inconsistent build states. Identifying the root cause is the safer, long-term solution.

## Decision: UI "Ghosting" loading state
Instead of showing "..." or clearing the analytics dashboard when a calculation starts, we will use a CSS-based opacity reduction (0.5) and a subtle pulse animation on the previous results.

**Rationale**: This prevents layout shift and flickering while providing visual feedback that a new calculation is in progress. This aligns with Principle III (Mobile-Optimized UX).

**Alternatives Considered**:
- A small spinner icon. Rejected because it adds visual clutter, which violates Principle III. Opacity shifts are cleaner.
