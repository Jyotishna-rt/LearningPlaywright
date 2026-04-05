const { test, expect } = require('@playwright/test');

test('VWO login (uses VWO_USER & VWO_PASS env)', async ({ page }) => {
  const user = process.env.VWO_USER;
  const pass = process.env.VWO_PASS;
  if (!user || !pass) {
    test.skip('VWO credentials not set (VWO_USER/VWO_PASS)');
  }

  await page.goto('https://vwo.com', { waitUntil: 'domcontentloaded' });

  // Try to open the login page using a few common selectors
  const loginSelectors = ['text=Log in', 'text=Login', 'a[href*="login"]', 'a:has-text("Log in")'];
  for (const sel of loginSelectors) {
    const loc = page.locator(sel).first();
    if (await loc.count()) {
      await loc.click();
      break;
    }
  }

  // Wait for the login form to appear
  await page.waitForLoadState('networkidle');

  const emailSel = 'input[type="email"], input[name="email"], input[name="username"], input[id*="email"], input[id*="user"]';
  const passSel = 'input[type="password"], input[name="password"], input[id*="pass"]';

  const email = page.locator(emailSel).first();
  const password = page.locator(passSel).first();

  await expect(email).toBeVisible({ timeout: 5000 });
  await expect(password).toBeVisible({ timeout: 5000 });

  await email.fill(user);
  await password.fill(pass);

  // Submit using common submit buttons/selectors
  const submit = page.locator('button[type="submit"], button:has-text("Log in"), button:has-text("Login")').first();
  if (await submit.count()) {
    await submit.click();
  } else {
    await password.press('Enter');
  }

  await page.waitForLoadState('networkidle');

  // Basic assertion: expect to land on an app/dashboard URL or see a user-specific element
  await expect(page).toHaveURL(/app|dashboard|account|projects|vwo/i, { timeout: 10000 });
});
