import { defineConfig } from "cypress";
import { getEnvConfig } from "./utils/env";

const envConfig = getEnvConfig();

export default defineConfig({
  e2e: {
    baseUrl: envConfig.baseUrl,
    setupNodeEvents(on, config) {
      return config;
    },
    supportFile: false,
  },
});
