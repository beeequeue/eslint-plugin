# @beequeue/eslint-plugin

## 0.7.0

### Minor Changes

- [#25](https://github.com/BeeeQueue/eslint-plugin/pull/25) [`3466b08`](https://github.com/BeeeQueue/eslint-plugin/commit/3466b08849ccf496fc9f03b5679f9c4a3251bbd4) - Update all dependencies

## 0.6.0

### Minor Changes

- [`73bfbdb`](https://github.com/BeeeQueue/eslint-plugin/commit/73bfbdbe6265a0bc5299898f0be4b8b91d03c01c) - Moved `prettier` preset into all other configs, removing need to specify it at all!

  To migrate, simply remove `plugin:@beequeue/prettier` from any ESLint configs.

* [`56695e8`](https://github.com/BeeeQueue/eslint-plugin/commit/56695e89b10083d28ef9d6f6446b864c79037052) - Removed `vue2` preset

- [`a3d1826`](https://github.com/BeeeQueue/eslint-plugin/commit/a3d1826d1149aac4d944a35b8949c39303e859ad) - `typescript`: Allow `camel-case` in object properties

## 0.5.0

### Minor Changes

- [#21](https://github.com/BeeeQueue/eslint-plugin/pull/21) [`f534918`](https://github.com/BeeeQueue/eslint-plugin/commit/f534918ab04e7a8ab93a07059d095d3db2272335) - Update all plugins and their presets

* [#21](https://github.com/BeeeQueue/eslint-plugin/pull/21) [`f534918`](https://github.com/BeeeQueue/eslint-plugin/commit/f534918ab04e7a8ab93a07059d095d3db2272335) - Removed graphql presets

## 0.4.0

### Minor Changes

- [#20](https://github.com/BeeeQueue/eslint-plugin/pull/20) [`dc043a3`](https://github.com/BeeeQueue/eslint-plugin/commit/dc043a358bd13cca7ff99ad48cda6de3033dff3f) - Added `graphql-client` and `graphql-server` presets

* [#18](https://github.com/BeeeQueue/eslint-plugin/pull/18) [`2191105`](https://github.com/BeeeQueue/eslint-plugin/commit/21911053cc13407ccae512bde17a15a7f303c576) - Updated ESLint to v8

- [#18](https://github.com/BeeeQueue/eslint-plugin/pull/18) [`2191105`](https://github.com/BeeeQueue/eslint-plugin/commit/21911053cc13407ccae512bde17a15a7f303c576) - Enabled new rules:

  - `base`
    - `unicorn/template-indent`
  - `typescript`
    - `@typescript-eslint/consistent-type-exports`
  - `vue`
    - `vue/no-useless-template-attributes`
    - `vue/no-computed-properties-in-data`
    - `vue/no-deprecated-router-link-tag-prop`

* [#18](https://github.com/BeeeQueue/eslint-plugin/pull/18) [`2191105`](https://github.com/BeeeQueue/eslint-plugin/commit/21911053cc13407ccae512bde17a15a7f303c576) - Updated plugins

## 0.3.0

### Minor Changes

- [#16](https://github.com/BeeeQueue/eslint-plugin/pull/16) [`cf9fa9d`](https://github.com/BeeeQueue/eslint-plugin/commit/cf9fa9d3c70fc0481317b5ea6fed315db4f594a8) - Enabled more rules from the Unicorn plugin

* [#16](https://github.com/BeeeQueue/eslint-plugin/pull/16) [`cf9fa9d`](https://github.com/BeeeQueue/eslint-plugin/commit/cf9fa9d3c70fc0481317b5ea6fed315db4f594a8) - Minimum required node version is now 14

- [#16](https://github.com/BeeeQueue/eslint-plugin/pull/16) [`cf9fa9d`](https://github.com/BeeeQueue/eslint-plugin/commit/cf9fa9d3c70fc0481317b5ea6fed315db4f594a8) - Updated Vue plugin to support <script setup>

### Patch Changes

- [#16](https://github.com/BeeeQueue/eslint-plugin/pull/16) [`cf9fa9d`](https://github.com/BeeeQueue/eslint-plugin/commit/cf9fa9d3c70fc0481317b5ea6fed315db4f594a8) - Updated dependencies

## 0.2.1

### Patch Changes

- [#14](https://github.com/BeeeQueue/eslint-plugin/pull/14) [`9f80ed3`](https://github.com/BeeeQueue/eslint-plugin/commit/9f80ed3aea683d240735747ca677e4bfadb9eb4a) - Added missing optional `peerDependency` on `prettier`

## 0.2.0

### Minor Changes

- [#12](https://github.com/BeeeQueue/eslint-plugin/pull/12) [`177473e`](https://github.com/BeeeQueue/eslint-plugin/commit/177473eeff955433b6cf2b430165384dcade68cb) - Enabled `eslint-plugin-unicorn`'s recommended rules, with a few exceptions

* [#12](https://github.com/BeeeQueue/eslint-plugin/pull/12) [`177473e`](https://github.com/BeeeQueue/eslint-plugin/commit/177473eeff955433b6cf2b430165384dcade68cb) - `react`: Enabled `react/no-unstable-nested-components`, disallowing components that are re-created every render

- [#12](https://github.com/BeeeQueue/eslint-plugin/pull/12) [`177473e`](https://github.com/BeeeQueue/eslint-plugin/commit/177473eeff955433b6cf2b430165384dcade68cb) - `typescript`: Type imports are now sorted below all other imports

### Patch Changes

- [#12](https://github.com/BeeeQueue/eslint-plugin/pull/12) [`177473e`](https://github.com/BeeeQueue/eslint-plugin/commit/177473eeff955433b6cf2b430165384dcade68cb) - Updated all dependencies

* [#12](https://github.com/BeeeQueue/eslint-plugin/pull/12) [`177473e`](https://github.com/BeeeQueue/eslint-plugin/commit/177473eeff955433b6cf2b430165384dcade68cb) - `typescript`: Removed warning about non-null assertions

## 0.1.3

### Patch Changes

- [`61b6a31`](https://github.com/BeeeQueue/eslint-plugin/commit/61b6a317241e3a6678794d4a060437113e210c82) [#10](https://github.com/BeeeQueue/eslint-plugin/pull/10) - `typescript`: Fixed issue with resolving `tsconfig.json`s.

## 0.1.2

### Patch Changes

- [`dab1e39`](https://github.com/BeeeQueue/eslint-plugin/commit/dab1e39aecf05941c1923c7b2e52c60c5ee28e29) [#8](https://github.com/BeeeQueue/eslint-plugin/pull/8) - `typescript`: Fixed typo in `node/no-unpublished-import` disabling.

## 0.1.1

### Patch Changes

- [`7e183f7`](https://github.com/BeeeQueue/eslint-plugin/commit/7e183f7ad787beb1edb442219bba3411d9bb662c) [#5](https://github.com/BeeeQueue/eslint-plugin/pull/5) - `typescript`: Disabled `node/no-unpublished-imports` as it breaks with types.

## 0.1.0

### Minor Changes

- [`499a79f`](https://github.com/BeeeQueue/eslint-plugin/commit/499a79f453682e00b30929426e66bf3afe75f271) - Initial release.

## 0.1.0-beta.3

### Minor Changes

- [`e5384a6`](https://github.com/BeeeQueue/eslint-plugin/commit/e5384a64fb8eb624b51ad642a954ff83ce9df3bc) - `vue`, `vue2`: Added new presets.

* [`e5384a6`](https://github.com/BeeeQueue/eslint-plugin/commit/e5384a64fb8eb624b51ad642a954ff83ce9df3bc) - `typescript`: Relaxed `any` operation restrictions.

- [`7bc2181`](https://github.com/BeeeQueue/eslint-plugin/commit/7bc21812394b4075210fbdf8420fe09dda92b289) - `node`: Added preset.
