import { Linter } from "eslint"
import { ESLintRules } from "eslint/rules"

export const vue: Linter.BaseConfig<ESLintRules> = {
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
    /** Self-explanatory */
    "vue/no-useless-template-attributes": "error",
    "vue/no-computed-properties-in-data": "error",

    /* Setup support */

    "vue/script-setup-uses-vars": "error",
    "vue/no-export-in-script-setup": "error",
    "vue/require-expose": "error",
    "vue/valid-define-props": "error",
    "vue/valid-define-emits": "error",

    /* Deprecated */

    "vue/no-deprecated-v-is": "error",
    "vue/vue/no-deprecated-router-link-tag-prop": "error",
  },
}
