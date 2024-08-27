import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",  // Set the source type to CommonJS
      globals: {
        ...globals.node,     // Include Node.js globals (e.g., process, __dirname)
        ...globals.browser,  // Include browser globals (e.g., window, document)
      },
    },
    ...pluginJs.configs.recommended,  // Spread the recommended ESLint rules
  },
];
