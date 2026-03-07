# Quickstart: Betting UX Optimization

## Prerequisites
- Node.js 20+
- Repository cloned and dependencies installed (`npm install`)

## Running the Feature
1. **Start Development Server**:
   ```bash
   npm run dev
   ```
2. **Access the App**: Open `http://localhost:5173` (or the port shown in terminal).
3. **Test UX Flows**:
   - **Card Grid**: Tap any card slot. Verify the modal opens and disables already selected cards.
   - **Glossary**: Tap the (i) icon next to "EV". Verify the pop-up appears.
   - **Quick Bets**: Enter a pot size (e.g., 100). Tap "1/2". Verify Facing Bet is 50. Change Pot Size to 200. Verify Facing Bet updates to 100.

## Key Components
- `src/components/inputs/CardGrid.tsx`: The new modal-based selector.
- `src/components/education/GlossaryPopup.tsx`: The term definition pop-over.
- `src/hooks/useBettingState.ts`: Manages the dynamic pot/bet ratio logic.

## Testing
- **Unit Tests**: Run `npm test` to verify the logic in `useBettingState`.
- **E2E Tests**: Run `npx playwright test` to verify the user flows.

## Troubleshooting
- **Modal not appearing?**: Check `z-index` in `tailwind.config.js` or global CSS. Ensure `createPortal` target exists in `index.html`.
- **Calculations lagging?**: The worker might be terminating. Check console for `Comlink` errors.
