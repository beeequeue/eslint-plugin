import { prettierStyleRules } from "../utils/prettier.js"

/** @type import("eslint-define-config").ESLintConfig */
export const esm = {
  extends: [...prettierStyleRules],
  plugins: ["@beequeue"],
  rules: {
    "import/extensions": "off",
    "unicorn/prefer-module": "error",
    "unicorn/prefer-node-protocol": "error",
    "@beequeue/esm-extensions": "error",
  },
}
