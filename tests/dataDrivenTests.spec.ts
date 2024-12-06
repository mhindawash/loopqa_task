import { test, expect } from '@playwright/test';
import { login } from '../helpers/loginHelper';

// Import the login data from the new JSON file
import loginData from '../loginData.json';
import testData from '../testData.json';

loginData.forEach(({ username, password, shouldLogin }) => {
  test(`Login with ${username}`, async ({ page }) => {
    await login(page, username, password, shouldLogin);
  });
});

testData.forEach(({ task, status, tags, app }) => {
  test(`Verify task "${task}" in ${app}`, async ({ page }) => {
    await login(page, 'admin', 'password123', true);  // Use valid login here for task verification

    // Check if the "Web Application" or relevant "app" title is visible
    const isAppPage = await page.locator(`h1:has-text("${app}")`).isVisible();

    if (!isAppPage) {
      // If the app page is not visible, click the app button from the nav bar
      const appButton = await page.locator(`button:has-text("${app}")`);
      await appButton.click();
      // Wait for the app page to load and verify the app title
      await expect(page.locator(`h1:has-text("${app}")`)).toBeVisible();
    }

    // Check if the "status" section is visible dynamically
    const statusHeading = await page.locator(`h2:has-text("${status}")`);
    await expect(statusHeading).toBeVisible(); // Assert "status" section is present

    // Check if the task is visible
    const taskHeading = await page.locator(`h3:has-text("${task}")`);
    await expect(taskHeading).toBeVisible(); // Assert the task is visible

    // Loop through the tags and verify their presence dynamically
    for (const tag of tags) {
      const tagElement = await page.locator(`span:has-text("${tag}")`).first(); // Use `first()` or a specific filter
      await expect(tagElement).toBeVisible(); // Assert the tag is visible
    }
  });
});
