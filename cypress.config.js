const { defineConfig } = require("cypress");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    // 👇 async + await es CLAVE
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
    specPattern: "cypress/journeys/features/e2e/**/*.feature",
    viewportWidth: 1920,
    viewportHeight: 1080,
    responseTimeout: 20000,
    defaultCommandTimeout: 20000,
  },
});



