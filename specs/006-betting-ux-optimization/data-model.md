# Data Model: Betting UX & Strategy Optimization

## Domain Entities

### Glossary
Represents the educational content for poker terminology.

```typescript
type GlossaryTerm = 'EV' | 'Equity' | 'PotOdds' | 'Position' | 'Ranges';

interface GlossaryEntry {
  term: GlossaryTerm;
  title: string;          // Display name (e.g., "Expected Value")
  definition: string;     // Concise explanation
  example?: string;       // Optional example for context
  category?: 'Math' | 'Strategy' | 'General';
}

const GLOSSARY_DATA: Record<GlossaryTerm, GlossaryEntry> = {
  EV: {
    term: 'EV',
    title: 'Expected Value',
    definition: 'The average amount you expect to win or lose on a specific bet over the long run.',
    example: 'If you bet $100 and win $200 50% of the time, your EV is +$50.',
    category: 'Math'
  },
  // ... other terms
};
```

### Betting State (Enhanced)
Manages the user's input for pot size and facing bet, including the "dynamic ratio" logic.

```typescript
type BetInputMode = 'manual' | 'ratio';

interface BettingState {
  potSize: number;        // Current pot size in user's unit (USD/BB)
  facingBet: number;      // Current bet facing the hero
  stackSize: number;      // Hero's stack size
  
  // New state for UX optimization
  inputMode: BetInputMode; 
  selectedRatio: number | null; // e.g., 0.5 for 50% pot
}
```

### Analysis Result (Visualization)
Structures the data required for the "Decision Rationale" component.

```typescript
interface DecisionRationaleData {
  recommendation: 'FOLD' | 'CHECK' | 'CALL' | 'RAISE';
  equity: number;         // Raw equity (0-1)
  potOdds: number;        // Pot odds required to call (0-1)
  ev: number;             // Expected Value in user's unit
  isProfitable: boolean;  // equity > potOdds (simplified check)
  
  // UI helpers
  color: 'green' | 'red' | 'gray'; 
  text: string;           // "Profitable Call" or "Negative EV Fold"
}
```

## State Transitions

### Quick Bet Selection
1. **User taps "1/2 Pot"**:
   - `inputMode` -> `'ratio'`
   - `selectedRatio` -> `0.5`
   - `facingBet` -> `potSize * 0.5`

### Manual Bet Adjustment
1. **User types in "Facing Bet" input**:
   - `inputMode` -> `'manual'`
   - `selectedRatio` -> `null`
   - `facingBet` -> `newValue`

### Pot Size Adjustment (in Ratio Mode)
1. **User changes "Pot Size"**:
   - `potSize` -> `newPot`
   - IF `inputMode === 'ratio'`: `facingBet` -> `newPot * selectedRatio`
   - ELSE: `facingBet` remains unchanged
