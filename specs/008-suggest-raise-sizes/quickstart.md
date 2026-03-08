# Quickstart: Suggest Raise Sizes

## Feature Overview

This feature adds actionable raise sizing suggestions to the analysis dashboard. When the engine recommends a "RAISE", the UI displays calculated amounts (e.g., 3x or 50% Pot) that users can click to immediately apply to their calculation.

## Key Components

- `RaiseSuggestions.tsx`: Displays the clickable buttons within the `AnalyticsDashboard`.
- `getRaiseSuggestions`: Logic in `formulas.ts` that handles the hybrid calculation.

## Logic Reference

| Context | Suggestion 1 | Suggestion 2 | Suggestion 3 |
|---------|--------------|--------------|--------------|
| **No Bet** | 33% Pot | 50% Pot | 100% Pot |
| **Facing Bet** | 3x Bet | 4x Bet | 100% Pot |

*Note: 100% Pot when facing a bet is: `FacingBet + (Pot + FacingBet + CallAmount) * 1.0`*

## Integration

1. Update `formulas.ts` to include `getRaiseSuggestions`.
2. Create `RaiseSuggestions.tsx`.
3. Import and render `RaiseSuggestions` inside `AnalyticsDashboard.tsx`.
4. Pass `setFacingBet` from `App.tsx` down to the dashboard.

## Testing

- **Unit**: Verify `getRaiseSuggestions` returns correct multiples/percentages for various pot/bet sizes.
- **E2E**: Select a strong hand (e.g., AA), click a 3x suggestion, verify "Facing Bet" input updates to the correct value.
