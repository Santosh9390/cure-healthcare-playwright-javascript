const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.menuToggle = page.locator('#menu-toggle');
    this.loginLink = page.locator('text=Login');
    this.usernameInput = page.locator('[name="username"]');
    this.passwordInput = page.locator('[name="password"]');
    this.loginButton = page.locator('#btn-login');
    this.errorMessage = page.locator('.text-danger');
    
  }

  async navigateToLoginPage() {
    await this.page.goto('https://katalon-demo-cura.herokuapp.com/');
    await this.menuToggle.click();
    await this.loginLink.click();
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async validateSuccessfulLogin() {
  await expect(this.page).toHaveURL(/.*#appointment/);
  await expect(this.page.locator('h2')).toHaveText('Make Appointment');
}

  async validateFailureLogin() {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText('Login failed! Please ensure the username and password are valid.');
  }
}

module.exports = {LoginPage};
