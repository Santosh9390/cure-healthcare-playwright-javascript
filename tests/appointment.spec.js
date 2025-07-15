const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { AppointmentPage } = require('../pages/appointmentPage');
const { ConfirmationPage } = require('../pages/confirmationPage');

test('Book and confirm an appointment', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.login('John Doe', 'ThisIsNotAPassword');
  await loginPage.validateSuccessfulLogin();

  const appointmentPage = new AppointmentPage(page);
  await appointmentPage.bookAppointment();

  const confirmationPage = new ConfirmationPage(page);
  await confirmationPage.verifyConfirmation();
});
