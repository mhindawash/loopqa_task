import { Page, expect } from '@playwright/test';

export async function login(page: Page, username: string, password: string, shouldLogin: boolean) {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  await page.fill('#username', username);
  await page.fill('#password', password);
  await page.click('button[type="submit"]');
  
  // Check if the login should succeed or fail
  if (shouldLogin) {
    // Verify successful login by checking if the page redirects or contains an element only present after login
    await page.waitForSelector('h1:has-text("Web Application")');  // Assuming login success redirects to the dashboard
  } else {
    // Verify login failure by checking if an error message appears or user is redirected back to login page
    const errorMessage = await page.locator('text="Invalid credentials"');
    await expect(errorMessage).toBeVisible();  // Ensure error message is visible
  }
}
