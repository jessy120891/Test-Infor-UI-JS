import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

require("dotenv").config();

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  timeout: 60 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    actionTimeout: 0,

    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
};

export default config;
