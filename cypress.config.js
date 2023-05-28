const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 15000,
  requestTimeout: 15000,
  retries: 1,
  projectId: "3j4u48",
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
