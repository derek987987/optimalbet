# Quickstart: Advanced Poker Analytics

## Scenario 1: Facing a Bet on the Flop (P1 Goal)
1. **User Input**:
   - `holeCards`: [As, Ks]
   - `boardCards`: [Qs, Jd, 2h]
   - `gameState`: { pot: 100, facingBet: 50, stack: 1000, isIP: true }
2. **System Flow**:
   - `calculateEquity` runs exhaustive enumeration for the flop (since 2 hole + 3 board = 5 cards).
   - `rawEquity` returns 0.35 (35%).
   - `getRecommendation` calculates:
     - `potOdds`: 50 / (100 + 50 + 50) = 0.25 (25%).
     - `adjustedEquity`: 0.35 * 1.15 (isIP) = 0.4025 (40.25%).
     - `ev`: (0.35 * 150) - (0.65 * 50) = 52.5 - 32.5 = +20.
3. **Output**:
   - UI shows Green **CALL** (+20 EV).

## Scenario 2: Multi-way Pre-flop Simulation (P3 Goal)
1. **User Input**:
   - `holeCards`: [Ah, Ad]
   - `opponents`: 3 (each with TIGHT/10% range)
2. **System Flow**:
   - `calculateEquity` runs 10k Monte Carlo rollouts (pre-flop).
   - `rawEquity` returns 0.65 (65% vs 3 tight opponents).
3. **Output**:
   - UI shows 65.0% Raw Equity.

## Scenario 3: Positional Bet Sizing (FR-007)
1. **User Input**:
   - `gameState`: { pot: 100, isIP: false (OOP) }
2. **System Flow**:
   - `getRecommendation` identifies OOP.
   - `baseline`: 100 * 0.50 = 50.
   - `adjustment`: +20% (FR-007).
   - `suggestedBetSize`: 50 * 1.20 = 60.
3. **Output**:
   - UI shows Green **RAISE** with recommended size of 60.
