const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    //viewportHeight: 880,
    //viewportWidth: 1280,
    pageLoadTimeout: 120000,
  },
  component: {
    setupNodeEvents(on, config) {
    },
    //viewportHeight: 880,
    //viewportWidth: 1280,
  },
});
