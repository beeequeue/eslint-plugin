import type { ESLintConfig } from "eslint-define-config"

import { prettierStyleRules } from "../utils/prettier"

export const react = {
  extends: [
    /**
     * Configures JSX settings, adds react rules
     * https://github.com/yannickcr/eslint-plugin-react
     */
    "plugin:react/recommended",
    /**
     * Adds rules for accessibility (a11y) validation in JSX
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
     */
    "plugin:jsx-a11y/recommended",
    /** Configures import plugin for JSX */
    "plugin:import/react",

    ...prettierStyleRules,
  ],
  settings: {
    react: { version: "detect" },
  },
  overrides: [
    {
      files: ["*.jsx", "*.tsx"],
      rules: {
        /** Require boolean props to use `isXXX` or `hasXXX` naming */
        "react/boolean-prop-naming": "error",
        /** Require all props to be used */
        "react/no-unused-prop-types": "error",
        /** Require all state to be used */
        "react/no-unused-state": "error",
        /** Require new lines between JSX on same level */
        "react/jsx-newline": "error",
        /** Self-explanatory */
        "react/default-props-match-prop-types": "error",
        /** https://github.com/facebook/react/issues/10810#issuecomment-332067094 */
        "react/no-arrow-function-lifecycle": "error",
        /** Require components to use arrow syntax, except if we need a named function to get a named component */
        "react/function-component-definition": [
          "error",
          {
            namedComponents: "arrow-function",
            unnamedComponents: "function-expression",
          },
        ],
        /** Require whitespace between adjacent JSX elements */
        "react/no-adjacent-inline-elements": "error",
        /** Don't allow components that are re-created every render */
        "react/no-unstable-nested-components": "error",
        /** Forbid invalid HTML attributes */
        "react/no-invalid-html-attribute": "error",
      },
    },
  ],
} satisfies ESLintConfig
