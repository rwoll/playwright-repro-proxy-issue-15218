import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    ignoreHTTPSErrors: true,
    proxy: {
      server: 'localhost:9090'
    }
  },
  projects: [
    { name: 'headless', use: { headless: true } },
    { name: 'headfull', use: { headless: false } },
  ]
};

export default config;
