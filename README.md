# `@beequeue/eslint-plugin`

[![](https://img.shields.io/npm/v/@beequeue/eslint-plugin)](https://www.npmjs.com/package/@beequeue/eslint-plugin)
[![](https://img.shields.io/github/workflow/status/BeeeQueue/eslint-plugin/CI?label=build)](https://github.com/BeeeQueue/eslint-plugin/actions?query=branch%3Amain+workflow%3ACI)

My extensive, opinionated ESLint configs.

Modular config presets that can be mixed and matched!

- [Config base (JS)](./src/config/base.ts): `plugin:@beequeue/base`
- [TypeScript](./src/config/typescript.ts): `plugin:@beequeue/typescript`
- [Node](./src/config/node.ts): `plugin:@beequeue/node`
- [React](./src/config/react.ts): `plugin:@beequeue/react`
- [Vue](./src/config/vue.ts): `plugin:@beequeue/vue`
- [Electron](./src/config/electron.ts): `plugin:@beequeue/electron`

---

## Usage

- `npm i -D @beequeue/eslint-plugin`
- `yarn add -D @beequeue/eslint-plugin`

```js
// .eslintrc.js
module.exports = {
  root: true,
  // If you use a GraphQL preset you need to provide additional data for the plugin to work with
  parserOptions: {
    // Path or link to the GraphQL schema
    schema: "https://graphql.example.com",
    // If you use the Client preset you also need to provide globs to your operation files
    operations: ["src/**/*.{js,ts,graphql}"],
  },
  extends: [
    // The base rules are always required
    "plugin:@beequeue/base",
    
    // Any other presets you need
    "plugin:@beequeue/typescript",
    
    // Add the prettier preset **at the end** if you use it
    "plugin:@beequeue/prettier",
  ],
}
```
