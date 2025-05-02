import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    supportFile: "cypress/support/component.ts", 
    specPattern: "cypress/component/**/*.cy.{ts,tsx}",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
    baseUrl: "http://localhost:3001",
  },
});
