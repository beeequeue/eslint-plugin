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
    "prettier",
  ],
  settings: {
    /** Mark @/** as internal packages */
    "import/internal-regex": "^@*/**/*",
  },
  rules: {
    "import/no-duplicated": "error",
  },
}
