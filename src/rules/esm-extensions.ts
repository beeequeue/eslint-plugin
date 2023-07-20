/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-argument */
import path from "path"

// @ts-expect-error: Broken types
import { ESLintUtils } from "@typescript-eslint/utils"

const createRule = ESLintUtils.RuleCreator(
  (name: string) =>
    `https://github.com/BeeeQueue/eslint-plugin/blob/main/src/rules/${name}.ts`,
)

const isInternalImport = (importPath: string) =>
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
    docs: null as never,
    schema: [],
  },
  defaultOptions: [],
  create: (ctx: any) => ({
    ImportDeclaration(node: any) {
      if (
        !isInternalImport(node.source.value) ||
        path.basename(node.source.value).includes(".")
      ) {
        return
      }

      ctx.report({
        messageId: "no-dot-js",
        fix: (fixer: any) => {
          const range = [...node.source.range] as [number, number]
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
