import { base } from "./config/base.js"
import { electron } from "./config/electron.js"
import { esm } from "./config/esm.js"
import { node } from "./config/node.js"
import { react } from "./config/react.js"
import { typescript } from "./config/typescript.js"
import { vue } from "./config/vue.js"
import { esmExtensions } from "./rules/esm-extensions.js"

/** @satisfies {import("eslint").ESLint.Plugin} */
export default {
  rules: {
    "esm-extensions": esmExtensions,
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
}
