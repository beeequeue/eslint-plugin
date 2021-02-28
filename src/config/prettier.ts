import { Linter } from "eslint"
import { ESLintRules } from "eslint/rules"

/** Enables Prettier errors in ESLint */
export const prettier: Linter.BaseConfig<ESLintRules> = {
  extends: [
    /** Enabled plugin, adds rule for styles */
    'plugin:prettier/recommended"',
    /** Disables style rules from other plugins/configs */
    "prettier",
  ],
}
