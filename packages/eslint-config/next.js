import tseslint from "typescript-eslint";
import tsConfig from "./typescript.js";
import reactConfig from "./react.js";
import nextPlugin from "@next/eslint-plugin-next";

const config = tseslint.config(...tsConfig, ...reactConfig, {
  name: "next",
  files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
  plugins: {
    "@next/next": nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs["core-web-vitals"].rules,
    "@next/next/no-img-element": "error",
    "@next/next/no-async-client-component": "error",
    "no-restricted-imports": [
      "error",
      {
        name: "next/router",
        message: "Please import from `next/navigation` instead.",
      },
    ],
  },
});

export default config;
