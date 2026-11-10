import { test as base } from '@playwright/test';
import { CheckboxesPage } from '../pages/CheckboxesPage';

type PageFixtures = {
  checkboxesPage: CheckboxesPage;
};

export const test = base.extend<PageFixtures>({
  checkboxesPage: async ({ page }, use) => {
    const checkboxesPage = new CheckboxesPage(page);
    await checkboxesPage.goto();
    await use(checkboxesPage);
  },
});

export { expect } from '@playwright/test';
