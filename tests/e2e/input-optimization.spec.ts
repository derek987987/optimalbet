import { test, expect } from '@playwright/test';

test.describe('Input Optimization', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('User Story 1: Keyboard Card Input', async ({ page }) => {
    // Click H1 slot to focus it
    const h1 = page.locator('.hole-card-slot').first();
    await h1.click();
    
    // Type 'As'
    await page.keyboard.type('As');
    
    // Verify slot has rank A and suit (symbol logic might be tricky to test textually, but we can check name)
    await expect(h1.locator('text=A')).toBeVisible();
    
    // Verify focus auto-advanced to H2
    const h2 = page.locator('.hole-card-slot').nth(1);
    await expect(h2).toHaveClass(/ring-2 ring-blue-500/);
    
    // Type 'Kh'
    await page.keyboard.type('Kh');
    await expect(h2.locator('text=K')).toBeVisible();
    
    // Verify focus auto-advanced to B1
    const b1 = page.locator('.board-card-slot').first();
    await expect(b1).toHaveClass(/ring-2 ring-blue-500/);
  });

  test('User Story 2: Rapid Betting Input', async ({ page }) => {
    const potInput = page.locator('input[placeholder="0"]').first();
    const facingInput = page.locator('input[placeholder="0"]').nth(1);
    
    // Set pot to 10 by clicking button
    await page.locator('button:has-text("10")').first().click();
    await expect(potInput).toHaveValue('10');
    
    // Click +20
    await page.locator('button:has-text("20")').first().click();
    await expect(potInput).toHaveValue('30');
    
    // Reset pot
    await page.locator('button:has(svg.lucide-rotate-ccw)').first().click();
    await expect(potInput).toHaveValue('');
    
    // Set facing bet
    await page.locator('button:has-text("50")').nth(1).click();
    await expect(facingInput).toHaveValue('50');
  });

  test('User Story 3: Two-Step Visual Selection', async ({ page }) => {
    // Double click H1 to open modal (first click focuses, second opens modal in our logic)
    const h1 = page.locator('.hole-card-slot').first();
    await h1.click();
    await h1.click();
    
    await expect(page.locator('text=Select Rank')).toBeVisible();
    
    // Select Rank Q
    await page.locator('button:has-text("Q")').click();
    
    // Verify view changed to suit selection
    await expect(page.locator('text=Select Suit for Q')).toBeVisible();
    
    // Select Spades
    await page.locator('text=Spades').click();
    
    // Modal should close and H1 should have Q
    await expect(page.locator('text=Select Rank')).not.toBeVisible();
    await expect(h1.locator('text=Q')).toBeVisible();
  });

  test('User Story 4: Real-time Suggestions', async ({ page }) => {
    const h1 = page.locator('.hole-card-slot').first();
    await h1.click();
    
    // Type 'A'
    await page.keyboard.type('A');
    
    // Suggestion popup should be visible with Spades, Hearts, Clubs, Diamonds
    const suggestions = page.locator('.absolute.-top-14');
    await expect(suggestions).toBeVisible();
    await expect(suggestions.locator('button')).toHaveCount(4);
    
    // Select Spades via keyboard (Enter)
    await page.keyboard.press('Enter');
    
    // Slot should have A
    await expect(h1.locator('text=A')).toBeVisible();
    await expect(suggestions).not.toBeVisible();
  });
});
