import { test, expect, type Page } from '@playwright/test';

test('should work', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('body')).toContainText('This domain is for use in');
});
