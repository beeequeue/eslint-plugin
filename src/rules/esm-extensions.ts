import path from "path"

import { ImportDeclaration } from "@typescript-eslint/types/dist/generated/ast-spec"
import { ESLintUtils } from "@typescript-eslint/utils"
import type { ReportFixFunction } from "@typescript-eslint/utils/dist/ts-eslint"

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://github.com/BeeeQueue/eslint-plugin/blob/main/src/rules/${name}.ts`,
)

const isInternalImport = (importPath: string) =>
  importPath.startsWith("./") ||
  importPath.startsWith("../") ||
  importPath.startsWith("@/") ||
  importPath.startsWith("~/")

const fix =
  (node: ImportDeclaration): ReportFixFunction =>
  (fixer) => {
    const range = [...node.source.range] as [number, number]
    range[1] -= 1

    return fixer.insertTextAfterRange(range, ".js")
  }

export const esmExtensions = createRule({
  name: "esm-extensions",
  meta: {
    type: "problem",
    fixable: "code",
    messages: {
      "no-dot-js": "Missing .js extension.",
    },
    docs: null as any,
    schema: {},
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
        fix: fix(node),
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
