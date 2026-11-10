# Playwright Checkbox Assignment

## Assignment 1: Verify checkbox selection

Playwright test covering all six requested steps on https://the-internet.herokuapp.com/checkboxes.

## Structure

- `pages/CheckboxesPage.ts`: page object containing checkbox locators and actions.
- `fixtures/pageFixtures.ts`: test-scoped fixture that creates the page object and opens the page using Playwright's isolated `page` fixture.
- `tests/checkboxes.spec.ts`: the requested sequence and assertions, using the custom `checkboxesPage` fixture.

## Run

Requires Node.js 20 or newer.

```sh
npm ci
npx playwright install chromium
npm test
```

To watch the test in a browser, run `npm run test:headed`.

## HTML report

Every test run generates an HTML report in `playwright-report/` alongside terminal results. After running `npm test`, open the report with:

```sh
npm run report
```

Click the test name to inspect the six steps and their results. Failed runs also retain a Playwright trace for debugging.

The test uses role-based locators, Playwright's automatic waiting, and retrying assertions. The checkboxes lack associated labels, so their positions distinguish the first from the second. Each transition verifies the state of both checkboxes; no XPath or fixed waits are used.
