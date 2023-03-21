import type { ESLintConfig } from "eslint-define-config"

import { prettierStyleRules } from "../utils/prettier"

export const esm = {
  extends: [...prettierStyleRules],
  plugins: ["@beequeue"],
  rules: {
    "import/extensions": "error",
    "unicorn/prefer-module": "error",
    "unicorn/prefer-node-protocol": "error",
    "@beequeue/esm-extensions": "error",
  },
} satisfies ESLintConfig
