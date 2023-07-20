// @ts-ignore: Broken types
import { RuleTester } from "@typescript-eslint/rule-tester"

import { esmExtensions } from "./esm-extensions"

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser",
})

ruleTester.run("esm-extensions", esmExtensions, {
  valid: [
    'import { something } from "./foo.js"',
    'import { something } from "../foo.js"',
    'import { something } from "../../foo/bar.js"',
    'import { something } from "@/foo/bar.js"',
    'import { something } from "~/foo/bar.js"',
  ],
  invalid: [
    {
      name: "test",
      code: 'import { something } from "./foo"',
      output: 'import { something } from "./foo.js"',
      errors: [{ messageId: "no-dot-js" }],
    },
    {
      name: "test2",
      code: 'import { something } from "../foo"',
      output: 'import { something } from "../foo.js"',
      errors: [{ messageId: "no-dot-js" }],
    },
    {
      name: "test3",
      code: 'import { something } from "../../foo/bar"',
      output: 'import { something } from "../../foo/bar.js"',
      errors: [{ messageId: "no-dot-js" }],
    },
    {
      name: "test4",
      code: 'import { something } from "@/foo/bar"',
      output: 'import { something } from "@/foo/bar.js"',
      errors: [{ messageId: "no-dot-js" }],
    },
    {
      name: "test5",
      code: 'import { something } from "~/foo/bar"',
      output: 'import { something } from "~/foo/bar.js"',
      errors: [{ messageId: "no-dot-js" }],
    },
  ],
})
