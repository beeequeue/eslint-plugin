import { Linter } from "eslint"
import { ESLintRules } from "eslint/rules"

import { prettierStyleRules } from "../utils/prettier"

export const vue: Linter.BaseConfig<ESLintRules> = {
  extends: [
    /**
     * Enables plugin, adds recommended rules
     * https://github.com/vuejs/eslint-plugin-vue
     */
    "plugin:vue/vue3-recommended",

    ...prettierStyleRules,
  ],
  rules: {
    /** Allow using v-html to insert html strings. We should know when this is necessary and when it's not. */
    "vue/no-v-html": "off",
    /** Enforce consistent component naming in component options. */
    "vue/component-options-name-casing": "error",
    /** Enforce static classes be in separate class attribute from dynamic ones. */
    "vue/prefer-separate-static-class": "error",
    /** Warn when using a component without configuring it in the options. */
    "vue/no-undef-components": "warn",
    /** Enforce using the `true` attribute shorthand. */
    "vue/prefer-true-attribute-shorthand": "error",
    /** Make sure ref objects aren't destructed */
    "vue/no-ref-object-destructure": "error",
    /** Make sure optional props are marked as such */
    "vue/no-required-prop-with-default": "error",
    /** Use correct style for defining props and emits */
    "vue/define-props-declaration": "error",
    "vue/define-emits-declaration": "error",

    /* Style rules */

    "vue/object-shorthand": "off",
    /** Enforce newlines between tags */
    "vue/padding-line-between-tags": ["error", { blankLine: "consistent" }],

    /* Setup support */
    "vue/require-expose": "error",
  },
}
