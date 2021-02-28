import { Linter } from "eslint"
import { ESLintRules } from "eslint/rules"

export const typescript: Linter.BaseConfig<ESLintRules> = {
  extends: [
    /** Configures import plugin for TypeScript */
    "plugin:import/typescript",
    "prettier",
  ],
  settings: {
    /**
     * Fixes the import plugin not handling packages with types packages installed correctly
     * https://github.com/benmosher/eslint-plugin-import/issues/1552
     * Might not be necessary anymore, but doesn't hurt to keep
     */
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
  },
  rules: {
    /** Disable checks that a well-configured TypeScript config does for you */
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/export": "off",
    "import/no-duplicated": "off",
  },
}
