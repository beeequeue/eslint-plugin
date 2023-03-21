import type { ESLint, Rule } from "eslint"

import { base } from "./config/base"
import { electron } from "./config/electron"
import { esm } from "./config/esm"
import { node } from "./config/node"
import { react } from "./config/react"
import { typescript } from "./config/typescript"
import { vue } from "./config/vue"
import { esmExtensions } from "./rules/esm-extensions"

export = {
  rules: {
    "esm-extensions": esmExtensions as unknown as Rule.RuleModule,
  },
  configs: {
    base,
    electron,
    esm,
    node,
    react,
    typescript,
    vue,
  },
} satisfies ESLint.Plugin
