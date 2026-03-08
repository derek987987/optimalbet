# OptimalBet Development Guidelines

Auto-generated from all feature plans. Last updated: 2026-02-26

## Active Technologies
- Browser LocalStorage (Persistence) (002-poker-ev-calc)
- TypeScript 5.x, React 18+ + Vite, Tailwind CSS v4, Comlink (Web Worker RPC), Vitest (Logic testing), Playwright (E2E) (003-advanced-poker-analytics)
- Browser LocalStorage (Persistence of game state) (003-advanced-poker-analytics)
- TypeScript 5.x / React 18+ + React, Tailwind CSS v4, Comlink (Web Worker RPC), Vitest (Logic testing), Playwright (E2E) (003-advanced-poker-analytics)
- Browser LocalStorage (Game state persistence) (003-advanced-poker-analytics)
- TypeScript 5.x / React 18+ + Vite, Comlink (Web Worker RPC), Tailwind CSS v4, Lucide Reac (004-fix-logic-stability)
- TypeScript 5.x, Rust 1.7x + React 19, Vite, Comlink, Tailwind CSS v4, wasm-pack (005-engine-performance-and-ui)
- TypeScript 5.x, React 18+ + Vite, Tailwind CSS v4, Lucide React (Icons), Comlink (Web Worker RPC) (006-betting-ux-optimization)
- Browser LocalStorage (Persistence of settings/state) (006-betting-ux-optimization)
- TypeScript 5.x, React 18+ (Vite) + Tailwind CSS v4, Lucide React, Comlink (for worker communication if state updates trigger heavy re-calc) (007-input-speed-optimization)
- Browser LocalStorage (via existing `useAutoPersistence`) (007-input-speed-optimization)
- TypeScript 5.x, React 18+ + Lucide React (for UI icons) (008-suggest-raise-sizes)
- N/A (Transient UI state derived from existing game state) (008-suggest-raise-sizes)

- TypeScript 5.x / React 18+ + React, Tailwind CSS, Vite (Build tool/PWA plugin) (002-poker-ev-calc)

## Project Structure

```text
src/
tests/
```

## Commands

npm test && npm run lint

## Code Style

TypeScript 5.x / React 18+: Follow standard conventions

## Recent Changes
- 008-suggest-raise-sizes: Added TypeScript 5.x, React 18+ + Lucide React (for UI icons)
- 007-input-speed-optimization: Added TypeScript 5.x, React 18+ (Vite) + Tailwind CSS v4, Lucide React, Comlink (for worker communication if state updates trigger heavy re-calc)
- 006-betting-ux-optimization: Added TypeScript 5.x, React 18+ + Vite, Tailwind CSS v4, Lucide React (Icons), Comlink (Web Worker RPC)


<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->
