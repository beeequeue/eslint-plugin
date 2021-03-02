import { Linter } from "eslint"
import { ESLintRules } from "eslint/rules"

export const base: Linter.BaseConfig<ESLintRules> = {
  extends: [
    /** ESLint's recommended rules */
    "eslint:recommended",
    /**
     * Adds import plugin, recommended import rules, some parserOptions
     * https://github.com/benmosher/eslint-plugin-import
     */
    "plugin:import/recommended",
    /** Errors for problems that will most likely become runtime errors */
    "plugin:import/errors",
    /** Adds import plugin, rule prohibiting deprecated imports */
    "plugin:import/stage-0",
  ],
  settings: {
    /** Mark @/** as internal packages */
    "import/internal-regex": "^@.*?/.*?/.*",
  },
  rules: {
    /* ESLINT */

    /** Enforce camelCase */
    camelcase: "error",
    /** Always use ===, unless checking for nullables */
    eqeqeq: ["error", "always", { null: "ignore" }],
    /** Require using const and let */
    "no-var": "error",
    /** Require using object shorthands */
    "object-shorthand": "error",
    /** Require const on variables that are not reassigned */
    "prefer-const": "error",
    /** Require destructuring where possible */
    "prefer-destructuring": "error",
    /** Require using template strings */
    "prefer-template": "error",
    /** Create utilities rather than extending native objects */
    "no-extend-native": "error",
    /** https://eslint.org/docs/rules/no-else-return */
    "no-else-return": "error",
    /** Don't allow optional chaining where it might create runtime errors */
    "no-unsafe-optional-chaining": "error",
    /** Disallow code that we know might result in floating point errors */
    "no-loss-of-precision": "error",
    /** Require no-bracket blocks to be one-liners */
    "nonblock-statement-body-position": ["error", "beside"],

    /* IMPORT PLUGIN */

    /** Extremely slow in some cases */
    "import/no-deprecated": "off",
    /** Custom import order with quick fix */
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        groups: [
          "builtin",
          ["external", "unknown"],
          "internal",
          "parent",
          ["sibling", "index"],
          "object",
        ],
        pathGroups: [
          {
            pattern: "@/**/*",
            group: "parent",
            position: "before",
          },
          {
            pattern: "@*/**/*",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        "newlines-between": "always",
      },
    ],
    /** Only allow devDependency imports in test files */
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*test*/**/*",
          "**/*.test.*",
          "src/testing/**/*",
          "**/*stories*",
          "*.{config,setup}.*",
          "**/test-utils.ts",
        ],
      },
    ],
  },
}
