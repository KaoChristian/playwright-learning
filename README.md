# Playwright Learning

![Playwright Tests](https://github.com/KaoChristian/playwright-learning/actions/workflows/playwright.yaml/badge.svg)

QA automation practice project — end-to-end and API tests built with [Playwright](https://playwright.dev/), following the Page Object Model pattern, with CI/CD via GitHub Actions.

## Stack

- Playwright Test (JavaScript)
- Page Object Model (`pages/`)
- Custom fixtures for dependency injection
- API testing (`request` context)
- GitHub Actions CI

## Project structure

- pages/ → page objects (LoginPage, InventoryPage, ProductPage, CartPage)
- tests/ → test specs (UI flows + API tests)
- fixtures.js → custom Playwright fixtures

## Running tests locally

```bash
npm install
npx playwright test
```

View the HTML report:
```bash
npx playwright show-report
```

## What this project covers

- E2E tests on [saucedemo.com](https://www.saucedemo.com/) (login, cart, checkout flow)
- API tests against a public REST API (status codes, error handling, POST requests)
- Robust locator strategy (`getByRole`, `getByTestId`) over fragile CSS selectors
- Automated test execution on every push via GitHub Actions

