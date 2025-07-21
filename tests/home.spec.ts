import { test } from '@playwright/test';
import { HomePage } from '../pages/home-page';

test('test usando POM para Example.com', async ({ page }) => {
  const home = new HomePage(page);

  await home.goto();
  await home.verifyHeading();
  await home.clickMoreInfo();

  // Validar que navegó al sitio correcto
  await test.expect(page).toHaveURL('https://www.iana.org/domains/example');
});