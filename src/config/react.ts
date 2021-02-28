import { Linter } from "eslint"
import { ESLintRules } from "eslint/rules"

export const react: Linter.BaseConfig<ESLintRules> = {
  extends: [
    /** Configures import plugin for JSX */
    "plugin:import/react",
    "prettier",
  ],
}
