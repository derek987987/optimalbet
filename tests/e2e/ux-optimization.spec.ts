import { test, expect } from '@playwright/test';

test.describe('UX Optimization', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('User Story 1: Rapid Hand Entry', async ({ page }) => {
    // Click H1 slot
    await page.locator('.hole-card-slot').first().click();
    // Verify modal is open
    await expect(page.locator('text=Select Card')).toBeVisible();
    
    // Select Ace of Spades (As) - In our CardGrid it's the first button in Spades column
    // Spades is the first column, Ace is at the top
    await page.locator('button:has-text("A")').first().click();
    
    // Verify modal is closed
    await expect(page.locator('text=Select Card')).not.toBeVisible();
  });

  test('User Story 2: Informed Decision Making', async ({ page }) => {
    // Select some cards to get analysis
    await page.locator('.hole-card-slot').first().click();
    await page.locator('button:has-text("A")').first().click();
    
    await expect(page.locator('text=Decision Rationale')).toBeVisible();
    await expect(page.locator('text=Equity (Win %)')).toBeVisible();
  });

  test('User Story 3: Interactive Betting', async ({ page }) => {
    // Set pot to 100
    await page.fill('#pot-input', '100');
    // Click 1/2 Pot
    await page.click('button:has-text("1/2")');
    // Verify facing bet is 50
    const facingBet = await page.inputValue('#facing-bet-input');
    expect(facingBet).toBe('50');
    
    // Change pot to 200
    await page.fill('#pot-input', '200');
    // Verify facing bet is 100 (Dynamic Ratio)
    const newFacingBet = await page.inputValue('#facing-bet-input');
    expect(newFacingBet).toBe('100');
  });

  test('User Story 4: Interactive Learning', async ({ page }) => {
    // Select a card to show dashboard
    await page.locator('.hole-card-slot').first().click();
    await page.locator('button:has-text("A")').first().click();
    
    // Click info icon (TermHighlight)
    await page.locator('button:has(svg.lucide-info)').first().click();
    await expect(page.locator('text=Got it')).toBeVisible();
    
    // Close glossary
    await page.click('text=Got it');
    await expect(page.locator('text=Got it')).not.toBeVisible();
  });
});
