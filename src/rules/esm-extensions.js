import path from "path"

import { ESLintUtils } from "@typescript-eslint/utils"

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://github.com/BeeeQueue/eslint-plugin/blob/main/src/rules/${name}.ts`,
)

/**
 * @param {string} importPath
 * @returns {boolean}
 */
const isInternalImport = (importPath) =>
  importPath.startsWith("./") ||
  importPath.startsWith("../") ||
  importPath.startsWith("@/") ||
  importPath.startsWith("~/")

export const esmExtensions = createRule({
  name: "esm-extensions",
  meta: {
    type: "problem",
    fixable: "code",
    messages: {
      "no-dot-js": "Missing .js extension.",
    },
    /** @type any */
    docs: null,
    schema: [],
  },
  defaultOptions: [],
  create: (ctx) => ({
    ImportDeclaration(node) {
      if (
        !isInternalImport(node.source.value) ||
        path.basename(node.source.value).includes(".")
      ) {
        return
      }

      ctx.report({
        messageId: "no-dot-js",
        fix: (fixer) => {
          /** @type [number, number] */
          const range = [...node.source.range]
          range[1] -= 1

          return fixer.insertTextAfterRange(range, ".js")
        },
        loc: {
          start: {
            line: node.source.loc.start.line,
            column: node.source.loc.start.column + node.source.value.lastIndexOf("/") + 1,
          },
          end: node.source.loc.end,
        },
      })
    },
  }),
})
