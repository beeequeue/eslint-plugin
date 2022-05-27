import { Linter } from "eslint"
import { ESLintRules } from "eslint/rules"

import { prettierStyleRules } from "../utils/prettier"

export const typescript: Linter.BaseConfig<ESLintRules> = {
  extends: [
    /** Configures import plugin for TypeScript */
    "plugin:import/typescript",

    ...prettierStyleRules,
  ],
  settings: {
    /**
     * Fixes the import plugin not handling packages with types packages installed correctly
     * https://github.com/benmosher/eslint-plugin-import/issues/1552
     * Might not be necessary anymore, but doesn't hurt to keep
     */
    "import/external-module-folders": ["node_modules", "node_modules/@types"],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.vue"],
      extends: [
        /**
         * Adds typescript rules, typescript parser
         * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
         */
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parserOptions: {
        extraFileExtensions: [".vue"],
        project: "**/tsconfig.json",
        warnOnUnsupportedTypeScriptVersion: false,
      },
      settings: {
        /** Use TypeScript resolver so we can use `baseUrl` and `paths` */
        "import/resolver": {
          // {} is required for some reason, cant find a link to it anymore :(
          typescript: {},
        },
        /** Configure node plugin to include TS files */
        node: { tryExtensions: [".js", ".ts", ".tsx"] },
      },
      rules: {
        /** Don't warn about non-null assertions - assume they're used responsibly */
        "@typescript-eslint/no-non-null-assertion": "off",
        /** Don't error on operating on `any`s - it's way too strict */
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        /** Require type-only exports to explicitly say that they are type exports, to help compilers */
        "@typescript-eslint/consistent-type-exports": "off",
        /** Don't warn on implicit function returns */
        "@typescript-eslint/explicit-module-boundary-types": "off",
        /** Don't allow unions or intersections with types that ruin them (any, unknown, etc.) */
        "@typescript-eslint/no-redundant-type-constituents": "error",
        /** Require explanations for @ts-ignore:s */
        "@typescript-eslint/ban-ts-comment": [
          "error",
          {
            "ts-expect-error": false,
            "ts-ignore": "allow-with-description",
            "ts-check": true,
            "ts-nocheck": true,
            minimumDescriptionLength: 6,
          },
        ],
        /** Better naming convention rule */
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "default",
            format: ["camelCase"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
          },
          {
            selector: "variable",
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
          },
          {
            selector: ["typeLike", "enumMember"],
            format: ["PascalCase"],
          },
          {
            selector: "objectLiteralProperty",
            format: ["camelCase", "PascalCase"],
          },
          {
            selector: "objectLiteralProperty",
            modifiers: ["requiresQuotes"],
            format: null,
            custom: {
              regex: "^[\\da-z]+(?:-[\\da-z]+)*$",
              match: true,
            },
          },
        ],
        /** Require using `type` over `interface` */
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        /** Enforce using `x as type` over `<type>x` */
        "@typescript-eslint/consistent-type-assertions": [
          "error",
          { assertionStyle: "as" },
        ],
        /** Allow void before floating promises */
        "no-void": ["error", { allowAsStatement: true }],

        /* Does not work with types */
        "node/no-unpublished-import": "off",

        /* Overrides that add TS functionality */
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-loss-of-precision": "error",
        "@typescript-eslint/no-useless-constructor": "error",

        /* Disable duplicate/overridden rules */
        camelcase: "off",
        "no-shadow": "off",
        "no-loss-of-precision": "off",
        "no-useless-constructor": "off",
        /** TS uses ESM */
        "node/no-unsupported-features/es-syntax": "off",

        "import/named": "off",
        "import/namespace": "off",
        "import/default": "off",
        "import/export": "off",
        "import/no-duplicated": "off",
        "import/no-unresolved": "off",

        /* Disable checks that a well-configured TypeScript config does for you, but is not disabled by /recommended */
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "node/no-missing-import": "off",
        "node/no-extraneous-import": "off",
        "unicorn/no-array-callback-reference": "off",
      },
    },
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".vue"],
        project: "**/tsconfig.json",
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    {
      files: ["*.d.ts"],
      rules: {
        /** Type definition files need different rules than normal files */
        "import/no-duplicates": "off",
        "import/order": "off",
      },
    },
  ],
}
