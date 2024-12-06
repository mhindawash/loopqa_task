# Playwright Data-Driven Test Suite for Demo App

## 1.) Introduction

 This project implements a Playwright-driven test suite to verify the functionality of the Demo App, focusing on login automation and task verification. The tests use a data-driven approach to minimize code duplication and improve scalability, driving test scenarios from a JSON object. This structure ensures that new test cases can be added easily without repetitive code.

 The test suite also includes a new feature that validates both successful and failed login attempts, demonstrating how dynamic data for test cases can be used effectively to test various scenarios.

## 2.) Implementation Details

### 2.1.) Test Data

 Test scenarios are driven by a JSON file (`testData.json`), which contains the following attributes for each test case:

 - **app**: The application name ("Web Application" or "Mobile Application").
 - **task**: The specific task to verify.
 - **status**: The status of the task ("To Do", "In Progress", "Done").
 - **tags**: Tags associated with the task (e.g., "Feature", "Bug", "Design", "High Priority").
 - **shouldLogin**: A boolean indicating whether the login should succeed (`true`) or fail (`false`).

### 2.2.) Test Structure

 The core structure of the test suite involves:
 - **Data-Driven Tests**: Tests are dynamically generated by iterating over the test data in `testData.json`.
 - **Login Automation**: The `loginHelper.ts` file automates the login process, including both successful and failed login attempts.
 - **Login Validation**: After login, the test checks for visibility of specific task elements on the page, confirming their presence in the expected columns (e.g., "To Do", "In Progress", "Done") and verifying their associated tags.

### 2.3.) Helper Functions

 The `loginHelper.ts` file contains the following functionalities:
 - **Login Automation**: The `login` function takes the username, password, and a flag (`shouldLogin`) to either validate successful login or simulate a failed login attempt.
 - **Login Failure Validation**: When `shouldLogin` is `false`, the function checks for an error message indicating invalid credentials.

### 2.4.) Example Test Case

 Here is an example of how test cases are structured in the JSON file:

 ```json
 {
   "app": "Web Application",
   "task": "Create New Task",
   "status": "To Do",
   "tags": ["Feature", "High Priority"],
   "shouldLogin": true
 }
 ```

 This JSON object describes a test case for the "Web Application," where the task is to "Create New Task," its status is "To Do," and it has the tags "Feature" and "High Priority." The login for this test should succeed as `shouldLogin` is `true`.

## 3.) Test Execution

### 3.1.) Running the Tests

 To execute the test suite, run the following command:

 ```bash
 npx playwright test 
 ```
 or
 ```bash
 npm test
 ```

 Playwright will automatically load the test data from `testData.json`, iterate over the test cases, and run them sequentially.

### 3.2.) Viewing Results

 After test execution, Playwright will output the results in the terminal. For more detailed logs, you can add the `DEBUG=pw:api` environment variable to the command:

 ```bash
 DEBUG=pw:api npx playwright test
 ```

## 4.) Conclusion

 This Playwright test suite provides a scalable and efficient way to validate both login functionality and task verification on a demo application. The data-driven approach ensures that test cases can be easily managed and extended without duplicating code. Additionally, the login feature supports both success and failure scenarios, making the suite robust for a variety of use cases.
