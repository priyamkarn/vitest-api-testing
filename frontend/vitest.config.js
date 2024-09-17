import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Use jsdom for browser-like environment
    globals: true,
    setupFiles: './setupTests.js', // Optional setup file for global setup
  },
});
