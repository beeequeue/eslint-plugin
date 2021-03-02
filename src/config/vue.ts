import { Linter } from "eslint"
import { ESLintRules } from "eslint/rules"

export const vue: Linter.BaseConfig<ESLintRules> = {
  env: {
    browser: true,
  },
  extends: [
    /**
     * Enables plugin, adds recommended rules
     * https://github.com/vuejs/eslint-plugin-vue
     */
    "plugin:vue/vue3-recommended",
  ],
  rules: {
    /** Allow using v-html to insert html strings. We should know when this is necessary and when it's not. */
    "vue/no-v-html": "off",
  },
}
