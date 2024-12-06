import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    // Disable headless mode to see the browser UI
    headless: false, 
    // Other settings can be added here, like baseURL
  },
});
