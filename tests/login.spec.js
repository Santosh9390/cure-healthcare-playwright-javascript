const { test} = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test('Valid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.login('John Doe', 'ThisIsNotAPassword');
  await loginPage.validateSuccessfulLogin();
});

test('Invalid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.login('User', 'Password');
  await loginPage.validateFailureLogin();
});
