const { test, expect } = require('../fixtures');
const { LoginPage } = require('../pages/login-page');

test('login-fail', async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.login('fail', 'fail');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('do not match');
})