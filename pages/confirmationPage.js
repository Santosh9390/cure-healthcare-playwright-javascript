const { expect } = require('@playwright/test');

class ConfirmationPage {
  constructor(page) {
    this.page = page;
    this.facility = page.locator('#facility');
    this.readmission = page.locator('#hospital_readmission');
    this.program = page.locator('#program');
    this.visitDate = page.locator('#visit_date');
    this.comment = page.locator('#comment');
  }

  async verifyConfirmation() {
    console.log('Waiting for confirmation page to load...');
    await expect(this.page.locator('h2')).toHaveText('Appointment Confirmation');
    await expect(this.facility).toHaveText('Hongkong CURA Healthcare Center');
    await expect(this.readmission).toHaveText('Yes');
    await expect(this.program).toHaveText('Medicare');
    await expect(this.visitDate).toHaveText('20/07/2025');
    await expect(this.comment).toHaveText('I want to book an appointment.');
  }
}

module.exports = { ConfirmationPage };
