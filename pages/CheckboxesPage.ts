import type { Locator, Page } from '@playwright/test';

export class CheckboxesPage {
  readonly checkboxes: Locator;
  readonly firstCheckbox: Locator;
  readonly secondCheckbox: Locator;

  constructor(private readonly page: Page) {
    this.checkboxes = page.getByRole('checkbox');
    // These inputs have no associated labels; their order identifies them.
    this.firstCheckbox = this.checkboxes.nth(0);
    this.secondCheckbox = this.checkboxes.nth(1);
  }

  async goto(): Promise<void> {
    await this.page.goto('/checkboxes');
  }

  async clearBoth(): Promise<void> {
    await this.firstCheckbox.uncheck();
    await this.secondCheckbox.uncheck();
  }

  async selectFirst(): Promise<void> {
    await this.firstCheckbox.check();
  }

  async selectSecond(): Promise<void> {
    await this.secondCheckbox.check();
  }

  async clearFirst(): Promise<void> {
    await this.firstCheckbox.uncheck();
  }

  async clearSecond(): Promise<void> {
    await this.secondCheckbox.uncheck();
  }
}
