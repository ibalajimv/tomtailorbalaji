const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

module.exports = defineConfig({
  defaultCommandTimeout: 50000
})

  async function setupNodeEvents(on, config) {
  
  
await preprocessor.addCucumberPreprocessorPlugin(on, config);

on("file:preprocessor", browserify.default(config));
// Make sure to return the config object as it might have been modified by the plugin.
return config;
}
module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/BDD/Tomtailor.feature'
  },
});
