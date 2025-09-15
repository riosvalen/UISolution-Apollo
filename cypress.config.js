const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      return config;
    },
    specPattern: "cypress/journeys/features/e2e/**/*.feature",
    viewportWidth: 1920,
    viewportHeight: 1080,
    responseTimeout: 20000,
    defaultCommandTimeout: 20000
  }, 
});


