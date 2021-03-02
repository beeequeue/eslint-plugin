import { Linter } from "eslint"
import { ESLintRules } from "eslint/rules"

export const node: Linter.BaseConfig<ESLintRules> = {
  extends: [
    /**
     * Adds node plugin, node env, node rules *
     * https://github.com/mysticatea/eslint-plugin-node
     */
    "plugin:node/recommended",
  ],
  rules: {
    /** Allow console log in servers, but warn since you should be using a proper logger */
    "no-console": "warn",
    /** Require using path concatenation functions when creating paths */
    "node/no-path-concat": "error",
    /** Require using the promise API over the old callback based one */
    "node/prefer-promises/fs": "error",
  },
  overrides: [
    {
      files: ["**/*.ts"],
      rules: {
        // TS uses ESM syntax
        "node/no-unsupported-features/es-syntax": "off",
      },
    },
  ],
}
