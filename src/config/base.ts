import { Linter } from "eslint"
import { ESLintRules } from "eslint/rules"

import { prettierStyleRules } from "../utils/prettier"

export const base: Linter.BaseConfig<ESLintRules> = {
  extends: [
    /** ESLint's recommended rules */
    "eslint:recommended",
    /**
     * Adds Unicorn plugin, recommended Unicorn rules
     */
    "plugin:unicorn/recommended",
    /**
     * Adds import plugin, recommended import rules, some parserOptions
     * https://github.com/benmosher/eslint-plugin-import
     */
    "plugin:import/recommended",
    /** Errors for problems that will most likely become runtime errors */
    "plugin:import/errors",
    /** Adds import plugin, rule prohibiting deprecated imports */
    "plugin:import/stage-0",

    ...prettierStyleRules,
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
    /** Disallow code that we know might result in floating point errors */
    "no-loss-of-precision": "error",
    /** Require no-bracket blocks to be one-liners */
    "nonblock-statement-body-position": ["error", "beside"],

    /* UNICORN PLUGIN */

    /** Require saying which separator to use in Array.join */
    "unicorn/require-array-join-separator": "error",
    /** Prefer Object.fromEntries */
    "unicorn/prefer-object-from-entries": "error",
    /** Don't allow useless extra code */
    "unicorn/no-useless-length-check": "error",
    "unicorn/no-useless-spread": "error",
    /** Disallow the `this` argument */
    "unicorn/no-array-method-this-argument": "error",
    /** Use shorter version of hasOwn */
    "unicorn/prefer-object-has-own": "error",
    /** Allow abbreviations */
    "unicorn/prevent-abbreviations": "off",
    /** Allow `null` */
    "unicorn/no-null": "off",
    /** Allow `Array.reduce` */
    "unicorn/no-array-reduce": "off",
    /** Don't require node: prefix for node builtins (breaks TypeScript) */
    "unicorn/prefer-node-protocol": "off",
    /** Enforce correct indentation on template strings */
    "unicorn/template-indent": "error",
    /** Enforce kebab-case in filenames */
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
      },
    ],
    /** Enforce exporting directly rather than importing then exporting, unless the value is used */
    "unicorn/prefer-export-from": [
      "error",
      {
        ignoreUsedVariables: true,
      },
    ],

    /* IMPORT PLUGIN */

    /** Extremely slow in some cases */
    "import/no-deprecated": "off",
    /** Not useful */
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
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
