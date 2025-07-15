class AppointmentPage {
  constructor(page) {
    this.page = page;
    this.facility = page.locator('#combo_facility');
    this.readmissionCheckbox = page.locator('#chk_hospotal_readmission');
    this.healthCareRadio = page.locator('input[value="Medicare"]');
    this.visitDate = page.locator('#txt_visit_date');
    this.comment = page.locator('#txt_comment');
    this.bookAppointmentButton = page.locator('#btn-book-appointment');
  }

  async bookAppointment() {
    console.log('Filling appointment form');
    await this.facility.selectOption('Hongkong CURA Healthcare Center');
    await this.readmissionCheckbox.check();
    await this.healthCareRadio.check();
    await this.visitDate.click();
    await this.page.click('td.day:has-text("20")'); 
    await this.comment.fill('I want to book an appointment.');
    await this.bookAppointmentButton.click();

  }
}

module.exports = { AppointmentPage };
