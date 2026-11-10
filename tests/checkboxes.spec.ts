import { test, expect } from '../fixtures/pageFixtures';

test('verify checkbox selection through every requested state', async ({ checkboxesPage }) => {
  const { checkboxes, firstCheckbox: first, secondCheckbox: second } = checkboxesPage;

  await test.step('Verify two checkboxes are displayed', async () => {
    await expect(checkboxes).toHaveCount(2);
    await expect(first).toBeVisible();
    await expect(second).toBeVisible();
  });

  await test.step('Clear both checkboxes', async () => {
    await checkboxesPage.clearBoth();
    await expect(first).not.toBeChecked();
    await expect(second).not.toBeChecked();
  });

  await test.step('Select the first checkbox only', async () => {
    await checkboxesPage.selectFirst();
    await expect(first).toBeChecked();
    await expect(second).not.toBeChecked();
  });

  await test.step('Select the second checkbox so both are checked', async () => {
    await checkboxesPage.selectSecond();
    await expect(first).toBeChecked();
    await expect(second).toBeChecked();
  });

  await test.step('Clear the first checkbox so only the second is checked', async () => {
    await checkboxesPage.clearFirst();
    await expect(first).not.toBeChecked();
    await expect(second).toBeChecked();
  });

  await test.step('Clear the second checkbox so both are unchecked', async () => {
    await checkboxesPage.clearSecond();
    await expect(first).not.toBeChecked();
    await expect(second).not.toBeChecked();
  });
});
