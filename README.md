 # Playwright Data-Driven Test Suite

 This repository contains a Playwright-driven test suite for automating the login and task verification process on the Demo App. The tests are driven by a JSON file containing data for each test case, allowing for easy scalability and maintenance.

 ## Objective

 The goal of this project was to create a scalable and maintainable test suite for a demo application, leveraging data-driven techniques to avoid code duplication and improve the testing process. The test suite includes the following:

 - Automation of the login process to the Demo App.
 - Dynamic execution of test cases based on the data from a JSON file.
 - Verification of tasks in different application views ("Web Application" and "Mobile Application").
 - Verification of task status and associated tags for each task.

 ## Project Setup

 ### Prerequisites

 - Node.js and npm are required to run this project. You can download and install Node.js from [here](https://nodejs.org/).
 - Playwright and other dependencies are installed using npm.

 ### Installation Steps

 1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

 2. Install the dependencies:

    ```bash
    npm install
    ```

 ### Test Suite Execution

 To run the tests, simply use the following command:

 ```bash
 npx playwright test
 ```

 This will execute the tests specified in the `dataDrivenTests.spec.ts` file, which uses data from `testData.json` to dynamically run each test case.

 ### Test Data

 The test data is stored in the `testData.json` file, which contains the following properties for each test case:

 - `app`: The application under test (e.g., "Web Application" or "Mobile Application").
 - `task`: The task to verify.
 - `status`: The status of the task (e.g., "To Do", "In Progress", "Done").
 - `tags`: The tags associated with the task (e.g., "Feature", "High Priority").

 ### Login Automation

 The tests start by logging into the demo app using the following credentials:

 - **Username**: admin
 - **Password**: password123

 The login function is abstracted into the `loginHelper.ts` file to keep the test cases clean and reusable.

 ## Challenges and Solutions

 ### Challenge: Waiting for Page Elements
 Some pages may take longer to load, causing elements to not be found immediately.
 - **Solution**: Used Playwright's `expect(...).toBeVisible()` to ensure elements are present before interacting with them.

 ### Challenge: Dynamic Test Data
 As the number of test cases increases, it could be challenging to maintain static code.
 - **Solution**: Leveraged data-driven testing using a JSON file to make the code easily scalable and maintainable.

 ## Results

 The test suite executes without any errors for all provided test cases, and all assertions pass successfully. The suite is ready for expansion to accommodate additional test cases as needed.

 ## Recommendations

 - **Improve Error Handling**: Add more detailed error handling with custom error messages to make debugging easier.
 - **Optimized Waits**: Consider using `await page.waitForSelector()` where necessary to ensure elements are present before interacting with them.
 - **Scalable Test Data**: For larger projects, consider using more specific locators (such as `data-testid`) to reduce flakiness.

 ## License

 This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
