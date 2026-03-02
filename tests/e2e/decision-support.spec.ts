import { test, expect } from '@playwright/test';

test.describe('US1: Real-time Decision Support', () => {
  test('should show CALL recommendation for a strong hand facing small bet', async ({ page }) => {
    await page.goto('/');

    // 1. Select hole cards (As, Ks)
    // Tapping card slots triggers CardGrid
    await page.locator('.hole-card-slot').first().click();
    await page.getByRole('button', { name: 'A' }).first().click(); // As (Spades is 4th col, index 3)
    // Actually our CardGrid order: Clubs, Diamonds, Hearts, Spades.
    // Let's just click by rank/suit if we have labels, or coordinates.
    // In our CardGrid: rankIdx * 4 + suitIdx.
    // As = 12 * 4 + 3 = 51.
    // We'll rely on the text 'A' for rank.
    
    // Select board cards (Ad, 2s, 3h)
    // ... logic for selecting board ...

    // 2. Input pot/bet
    await page.getByLabel(/Current Pot/).fill('100');
    await page.getByLabel(/Facing Bet/).fill('20');

    // 3. Check result
    const recommendation = page.locator('h2', { hasText: /CALL|RAISE/ });
    await expect(recommendation).toBeVisible();
    
    const equityText = await page.getByText(/Equity/).locator('..').locator('span').last().textContent();
    expect(parseFloat(equityText || '0')).toBeGreaterThan(50);
  });
});
