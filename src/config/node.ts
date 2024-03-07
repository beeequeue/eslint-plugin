import type { ESLintConfig } from "eslint-define-config"

export const node = {
  extends: [
    /**
     * Adds node plugin, node env, node rules *
     * https://github.com/mysticatea/eslint-plugin-node
     */
    "plugin:n/recommended",
    /**
     * Disables style rules from other plugins/configs, enables rule for style checking
     * https://github.com/prettier/eslint-config-prettier
     */
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    /** Allow console log in servers, but warn since you should be using a proper logger */
    "no-console": "warn",
    /** Require using path concatenation functions when creating paths */
    "n/no-path-concat": "error",
    /** Require using the promise API over the old callback based one */
    "n/prefer-promises/fs": "error",
    "n/no-sync": ["warn", { allowAtRootLevel: true }],
  },
  overrides: [
    {
      files: ["**/*.ts"],
      rules: {
        // TS uses ESM syntax
        "n/no-unsupported-features/es-syntax": "off",
      },
    },
  ],
} satisfies ESLintConfig
