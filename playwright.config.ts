import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    ignoreHTTPSErrors: true,
    proxy: {
      server: 'localhost:9090'
    }
  },
  projects: [
    { name: 'headless', use: { headless: true, browserName: 'chromium', channel: 'chrome' } },
    { name: 'headfull', use: { headless: false, browserName: 'chromium', channel: 'chrome' } },
  ]
};

export default config;
