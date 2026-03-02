import { test, expect } from '@playwright/test';

test.describe('Advanced Poker Analytics E2E', () => {
  test.beforeEach(async ({ page }) => {
    page.on('console', msg => console.log(`BROWSER CONSOLE: ${msg.text()}`));
    page.on('pageerror', err => console.log(`BROWSER ERROR: ${err.message}`));
    
    await page.goto('/');
  });

  test('completes full hand entry and shows valuation', async ({ page }) => {
    await expect(page.getByText('Input Dashboard')).toBeVisible({ timeout: 10000 });
    
    // Select Hole Card 1
    await page.getByText('H1').first().click();
    await page.locator('.poker-card').first().click(); // As
    await page.locator('text=✕').click();

    // Select Hole Card 2
    await page.getByText('H2').first().click();
    await page.locator('.poker-card').nth(13).click(); // Ah
    await page.locator('text=✕').click();

    // Verify Analytics Dashboard appears
    await expect(page.getByText('Recommendation')).toBeVisible();
  });
});
