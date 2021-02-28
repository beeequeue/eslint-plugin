import { Linter } from "eslint"
import { ESLintRules } from "eslint/rules"

export const electron: Linter.BaseConfig<ESLintRules> = {
  extends: [
    /** Configures import plugin for Electron */
    "plugin:import/electron",
  ],
}
