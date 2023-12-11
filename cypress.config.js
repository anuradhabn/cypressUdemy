const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:1080,
  viewportWidth:1920,
  e2e: {
    baseUrl:'http://localhost:4200',
    excludeSpecPattern :['**/1-getting-started','**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    video:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
