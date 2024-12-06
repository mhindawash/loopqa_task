import { Page } from '@playwright/test';

export async function login(page: Page) {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  await page.fill('#username', 'admin');
  await page.fill('#password', 'password123');
  await page.click('button[type="submit"]');
}
