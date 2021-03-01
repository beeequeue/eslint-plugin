import { Linter } from "eslint"
import { ESLintRules } from "eslint/rules"

/** Enables Prettier errors in ESLint */
export const prettier: Linter.BaseConfig<ESLintRules> = {
  extends: [
    /**
     * Enables plugin, adds rule for styles
     * https://github.com/prettier/eslint-plugin-prettier
     */
    'plugin:prettier/recommended"',
    /**
     * Disables style rules from other plugins/configs
     * https://github.com/prettier/eslint-config-prettier
     */
    "prettier",
  ],
}
