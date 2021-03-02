# `@beequeue/eslint-plugin`

My extensive, opinionated ESLint configs.

Modular config presets that can be mixed and matched!

- [Basic Javascript](./src/config/base.ts): `plugin:@beequeue/base`
- [TypeScript](./src/config/typescript.ts): `plugin:@beequeue/typescript`
- [Node](./src/config/node.ts): `plugin:@beequeue/node`
- [React](./src/config/react.ts): `plugin:@beequeue/react`
  - ~~[NextJS](./src/config/nextjs.ts): `plugin:@beequeue/nextjs`~~
- [Vue](./src/config/vue.ts): `plugin:@beequeue/vue`
  - [Vue 2](./src/config/vue2.ts): `plugin:@beequeue/vue2`
- [Electron](./src/config/electron.ts): `plugin:@beequeue/electron`
- [Prettier](./src/config/prettier.ts): `plugin:@beequeue/prettier`

---

## Usage

- `npm i -D @beequeue/eslint-plugin`
- `yarn add -D @beequeue/eslint-plugin`

```js
// .eslintrc.js
module.exports = {
  root: true,
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
