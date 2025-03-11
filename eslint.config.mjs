import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      "**/node_modules",
      "**/dist",
      "**/dist-ssr",
      "**/build",
      "**/.next",
      "**/.vercel",
      "**/.cache",
      "**/coverage",
      "**/*.d.ts",
      ".DS_Store",
      ".env",
      ".env.*",
      ".vscode",
      ".gitignore",
      "package-lock.json",
      "yarn.lock",
      "*.local",
      "*.config.*"
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        React: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "module",
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // Configuração correta do React
  {
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: pluginReact.configs.recommended.rules,
  },
  // Configuração do Prettier
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...configPrettier.rules,
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "no-console": "warn",
      indent: ["error", 2],
    },
  },
];
