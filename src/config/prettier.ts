import { Linter } from "eslint"
import { ESLintRules } from "eslint/rules"

/** Enables Prettier errors in ESLint */
export const prettier: Linter.BaseConfig<ESLintRules> = {
  extends: [
    /** Does it all */
    'plugin:prettier/recommended"',
  ],
}
