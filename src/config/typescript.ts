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
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        /** Adds typescript rules, typescript parser */
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: "./",
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
        /** Don't warn on implicit function returns */
        "@typescript-eslint/explicit-module-boundary-types": "off",
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
            selector: "typeLike",
            format: ["PascalCase"],
          },
          {
            selector: "enumMember",
            format: ["PascalCase"],
          },
        ],
        /** Allow void before floating promises */
        "no-void": ["error", { allowAsStatement: true }],

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
