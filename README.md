# CURA Healthcare Automation - Playwright JavaScript

This project is an end-to-end test automation suite for the [CURA Healthcare Service demo site](https://katalon-demo-cura.herokuapp.com/).  
It uses **Playwright with JavaScript** and follows the **Page Object Model (POM)** design pattern for better code reusability and maintainability.

The goal of this project was to test login functionality and appointment booking flow using valid and invalid inputs.

---

## 🔧 Tech Stack

- **Playwright** for browser automation
- **JavaScript (ES6)** for scripting
- **Node.js** as the runtime

---

## 📦 Setup Instructions

### Node.js Version

Make sure Node.js version **18 or above** is installed:

```bash
node -v
```

If not installed, download it from [https://nodejs.org](https://nodejs.org).

---

### Installation Commands

Clone the repo and install dependencies:

```bash
git clone https://github.com/Santosh9390/cure-healthcare-playwright-javascript.git
cd cure-healthcare-playwright-javascript
npm install
```

This will install Playwright and other dependencies listed in `package.json`.

---

## ▶️ Running the Tests

To run all tests in headless mode:

```bash
npx playwright test
```

To run tests in a visible browser window:

```bash
npx playwright test --headed
```

To use Playwright's test runner UI:

```bash
npx playwright test --ui
```

---

## 📊 View Test Report

After tests are run, an HTML report can be viewed using:

```bash
npx playwright show-report
```

It opens a detailed report with test results and steps.

---

## 📁 Project Structure


```
.
├── pages/                         # Page Object Model classes
│   ├── loginPage.js               # Handles login page interactions
│   ├── appointmentPage.js         # Appointment form actions
│   └── confirmationPage.js        # Confirmation page validations
│
├── tests/                         # Test specs
│   ├── login.spec.js              # Login tests (positive and negative)
│   └── appointment.spec.js        # End-to-end test for booking an appointment
│
├── .gitignore
├── package.json
├── playwright.config.js
└── README.md
```

---

## 🔐 Test Credentials

Demo login credentials used in tests:

- **Username:** John Doe  
- **Password:** ThisIsNotAPassword

---

## ✅ Test Scenarios Covered

- **login.spec.js**
  - Valid login test
  - Invalid login test with incorrect credentials
  - Error message verification

- **appointment.test.js**
  - Successful login
  - Filling appointment form (facility, date, etc.)
  - Booking and confirmation validation
---

## 👨‍💻 Author

**Sai Santosh**  
QA Automation Engineer | JavaScript | Playwright

---