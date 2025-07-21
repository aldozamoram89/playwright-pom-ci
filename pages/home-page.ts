import { Locator, Page, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly heading: Locator;
  readonly moreInfoLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('h1');
    this.moreInfoLink = page.locator('a:has-text("More information")');
  }

  async goto() {
    await this.page.goto('https://example.com');
  }

  async verifyHeading() {
    await expect(this.heading).toHaveText('Example Domain');
  }

  async clickMoreInfo() {
    await this.moreInfoLink.click();
  }
}