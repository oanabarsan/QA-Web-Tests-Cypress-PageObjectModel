const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3j4u48",
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
