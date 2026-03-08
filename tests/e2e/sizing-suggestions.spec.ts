import { test, expect } from '@playwright/test';

test.describe('Raise Suggestions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('User Story 1 & 2: View, Reactivity, and Click to Apply', async ({ page }) => {
    // Setup a strong hand to trigger RAISE recommendation
    // Click H1 slot
    await page.locator('.hole-card-slot').first().click();
    // Select Ace via modal
    await page.getByRole('button', { name: 'A', exact: true }).click();
    await page.locator('text=Spades').click();
    
    // Click H2 slot
    await page.locator('.hole-card-slot').nth(1).click();
    // Select Ace via modal
    await page.getByRole('button', { name: 'A', exact: true }).click();
    await page.locator('text=Diamonds').click();

    // Recommendation should now be RAISE
    await expect(page.locator('text=RAISE')).toBeVisible();

    // Verify suggestions are visible
    await expect(page.locator('text=Suggested Sizing')).toBeVisible();
    
    const potInput = page.locator('input[placeholder="0"]').first();
    await potInput.fill('100');

    // Suggestions should update
    await expect(page.locator('text=$33')).toBeVisible();
    await expect(page.locator('text=$50')).toBeVisible();
    await expect(page.locator('text=$100')).toBeVisible();

    // Click $100 (100% Pot)
    await page.locator('button:has-text("$100")').click();

    // Facing Bet input should update to 100
    const facingInput = page.locator('input[placeholder="0"]').nth(1);
    await expect(facingInput).toHaveValue('100');
  });

  test('Hybrid Sizing: Facing a Bet', async ({ page }) => {
    // Select cards via modal
    await page.locator('.hole-card-slot').first().click();
    await page.getByRole('button', { name: 'K', exact: true }).click();
    await page.locator('text=Spades').click();

    await page.locator('.hole-card-slot').nth(1).click();
    await page.getByRole('button', { name: 'K', exact: true }).click();
    await page.locator('text=Diamonds').click();

    await expect(page.locator('text=RAISE')).toBeVisible();

    // Set Pot to 100 and Facing Bet to 50
    const potInput = page.locator('input[placeholder="0"]').first();
    await potInput.fill('100');
    const facingInput = page.locator('input[placeholder="0"]').nth(1);
    await facingInput.fill('50');

    // Suggestions should change to Multiples (3x, 4x)
    await expect(page.locator('text=3x')).toBeVisible();
    await expect(page.locator('text=$150')).toBeVisible();
    
    await expect(page.locator('text=4x')).toBeVisible();
    await expect(page.locator('text=$200')).toBeVisible();
    
    await expect(page.locator('text=100% Pot')).toBeVisible();
    await expect(page.locator('text=$250')).toBeVisible();
  });

  test('Over Stack Warning', async ({ page }) => {
    await page.locator('.hole-card-slot').first().click();
    await page.getByRole('button', { name: 'A', exact: true }).click();
    await page.locator('text=Spades').click();

    await page.locator('.hole-card-slot').nth(1).click();
    await page.getByRole('button', { name: 'A', exact: true }).click();
    await page.locator('text=Hearts').click();

    // Set Pot high
    const potInput = page.locator('input[placeholder="0"]').first();
    await potInput.fill('2000');

    // $2000 is > 1000 stack.
    await expect(page.locator('text=Over Stack')).toBeVisible();
  });
});
