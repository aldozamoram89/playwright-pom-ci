import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';

test('validación con POM', async ({ page }) => {
  const home = new HomePage(page);

  await home.goto();
  await home.verifyHeading();
  await home.clickMoreInfo();

  await expect(page).toHaveURL('https://www.iana.org/help/example-domains');
});