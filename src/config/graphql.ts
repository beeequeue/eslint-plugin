import { Linter } from "eslint"
import { ESLintRules } from "eslint/rules"

const getConfig = (client: boolean): Linter.BaseConfig<ESLintRules> => {
  const ifClient = <A, B>(trueValue: A, falseValue?: B) =>
    client ? trueValue : falseValue

  return {
    overrides: [
      {
        files: ["**/*.graphql"],
        extends: [
          /**
           * Adds GraphQL plugin, parser, rules
           * https://github.com/mysticatea/eslint-plugin-node
           */
          "plugin:@graphql-eslint/recommended",
        ],
        rules: {
          /** Don't require `id` types on `Query` and `Mutation` types */
          "@graphql-eslint/strict-id-in-types": [
            "error",
            {
              acceptedIdNames: ["id", "uid", "uuid"],
              exceptions: {
                types: ["Query", "Mutation"],
                suffixes: ["Page"],
              },
            },
          ],
          /** Require using ":s for descriptions, so #:s are used exclusively for comments */
          "@graphql-eslint/no-hashtag-description": ifClient("off", "error"),
          /** Require fetching IDs when available, useful bordering on needed for caching in complex clients like Apollo */
          "@graphql-eslint/require-id-when-available": ifClient("error", "off"),
          /** Self-explanatory best practices */
          "@graphql-eslint/unique-operation-name": ifClient("error", "off"),
          "@graphql-eslint/unique-fragment-name": ifClient("error", "off"),
          "@graphql-eslint/require-deprecation-date": ifClient("off", "error"),
          "@graphql-eslint/no-unused-fragments": ifClient("error", "off"),
          /** Should only run on operations if I understand it correctly... */
          "@graphql-eslint/executable-definitions": ifClient("error", "off"),
        },
      },
    ],
  }
}

export const graphqlClient = getConfig(true)
export const graphqlSchema = getConfig(false)
