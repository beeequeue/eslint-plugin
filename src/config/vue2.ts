import { Linter } from "eslint"
import { ESLintRules } from "eslint/rules"

import { vue } from "./vue"

export const vue2: Linter.BaseConfig<ESLintRules> = {
  ...vue,
  extends: [
    /**
     * Enables plugin, adds recommended rules
     * https://github.com/vuejs/eslint-plugin-vue
     */
    "plugin:vue/recommended",
  ],
  rules: {
    /** Allow using v-html to insert html strings. We should know when this is necessary and when it's not. */
    "vue/no-v-html": "off",
  },
}
