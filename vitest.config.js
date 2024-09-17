const { defineConfig } = require('vitest/config');

module.exports = defineConfig({
  test: {
    globals: true, // Enable global test functions like test() and expect()
    environment: 'node', // Set the test environment to Node.js
    setupFiles: ['./setupTests.js'], // Specify setup files to run before tests
    coverage: {
      provider: 'c8', // Use the 'c8' coverage provider
      exclude: ['node_modules/**', 'test/**'], // Exclude specified directories from coverage
    },
  },
});
