import { base } from "./config/base"
import { electron } from "./config/electron"
import { graphqlClient, graphqlSchema } from "./config/graphql"
import { node } from "./config/node"
import { prettier } from "./config/prettier"
import { react } from "./config/react"
import { typescript } from "./config/typescript"
import { vue } from "./config/vue"
import { vue2 } from "./config/vue2"

export = {
  configs: {
    base,
    electron,
    "graphql-client": graphqlClient,
    "graphql-server": graphqlSchema,
    node,
    prettier,
    react,
    typescript,
    vue,
    vue2,
  },
}
