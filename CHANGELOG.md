# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## v4.0.0

[compare changes](https://github.com/nuxt-modules/device/compare/v3.2.4...v4.0.0)

### 🚀 Enhancements

- Add `isLinux` flag ([#243](https://github.com/nuxt-modules/device/pull/243))
- ⚠️  Drop support for Nuxt 2 and remove `bridge` compatibility option ([c91cebe](https://github.com/nuxt-modules/device/commit/c91cebe))
- Move to ESM-only ([78f00e3](https://github.com/nuxt-modules/device/commit/78f00e3))
- Remove deprecated options and update README ([58b6e19](https://github.com/nuxt-modules/device/commit/58b6e19))

### 🏡 Chore

- Lint ([837d4a8](https://github.com/nuxt-modules/device/commit/837d4a8))
- Update playground tsconfig to Nuxt 4 ([1c9c59e](https://github.com/nuxt-modules/device/commit/1c9c59e))
- Lint ([df53a93](https://github.com/nuxt-modules/device/commit/df53a93))
- Update pnpm workspace ([24aa73e](https://github.com/nuxt-modules/device/commit/24aa73e))
- Update inlineDependencies to specify 'crawler-user-agents' explicitly ([5199650](https://github.com/nuxt-modules/device/commit/5199650))
- Update package.json ([b20e980](https://github.com/nuxt-modules/device/commit/b20e980))

### 🤖 CI

- Use latest corepack ([c79a102](https://github.com/nuxt-modules/device/commit/c79a102))

#### ⚠️ Breaking Changes

- ⚠️  Drop support for Nuxt 2 and remove `bridge` compatibility option ([c91cebe](https://github.com/nuxt-modules/device/commit/c91cebe))

### ❤️ Contributors

- Damian Glowala ([@DamianGlowala](https://github.com/DamianGlowala))
- Alan Schio ([@schirrel](https://github.com/schirrel))

## v3.2.4

[compare changes](https://github.com/nuxt-modules/device/compare/v3.2.3...v3.2.4)

### 🩹 Fixes

- Inline `crawler-user-agents` dependency ([#232](https://github.com/nuxt-modules/device/pull/232))

### 🤖 CI

- Run CI workflow on Node version from matrix ([c504a6f](https://github.com/nuxt-modules/device/commit/c504a6f))

### ❤️ Contributors

- Damian Głowala ([@DamianGlowala](http://github.com/DamianGlowala))

## v3.2.3

[compare changes](https://github.com/nuxt-modules/device/compare/v3.2.2...v3.2.3)

### 🩹 Fixes

- Generate crawlers regex at build time ([#230](https://github.com/nuxt-modules/device/pull/230))

### 🏡 Chore

- Update README and module options JSDoc ([5483663](https://github.com/nuxt-modules/device/commit/5483663))
- Unpin dependencies and update renovate config ([a12c6a4](https://github.com/nuxt-modules/device/commit/a12c6a4))

### ❤️ Contributors

- Damian Głowala ([@DamianGlowala](https://github.com/DamianGlowala))

## v3.2.2

[compare changes](https://github.com/nuxt-modules/device/compare/v3.2.1...v3.2.2)

### 🩹 Fixes

- Move runtime types to `src/runtime/` dir ([57a658a](https://github.com/nuxt-modules/device/commit/57a658a))

### ❤️ Contributors

- Damian Głowala ([@DamianGlowala](https://github.com/DamianGlowala))

## v3.2.1

[compare changes](https://github.com/nuxt-modules/device/compare/v3.2.0...v3.2.1)

### 🚀 Enhancements

- Deprecate `enabled` option ([7b64ac6](https://github.com/nuxt-modules/device/commit/7b64ac6))

### 🩹 Fixes

- Do not warn about `refreshOnResize` deprecation if not explicitly used ([11196cd](https://github.com/nuxt-modules/device/commit/11196cd))
- Add augmentations for `$device` helper ([e758cc6](https://github.com/nuxt-modules/device/commit/e758cc6))

### 💅 Refactors

- Use single return in plugin ([401a366](https://github.com/nuxt-modules/device/commit/401a366))
- Shorten `useDevice` syntax ([e528ba7](https://github.com/nuxt-modules/device/commit/e528ba7))

### 🏡 Chore

- Use local module in playground ([eca8ff1](https://github.com/nuxt-modules/device/commit/eca8ff1))

### ❤️ Contributors

- Damian Głowala ([@DamianGlowala](https://github.com/DamianGlowala))

## v3.2.0

[compare changes](https://github.com/nuxt-modules/device/compare/v3.1.1...v3.2.0)

### 🚀 Enhancements

- Module overhaul ([#199](https://github.com/nuxt-modules/device/pull/199))
- Deprecate `refreshOnResize` option ([#211](https://github.com/nuxt-modules/device/pull/211))
- Detect `Google-InspectionTool` crawler ([#219](https://github.com/nuxt-modules/device/pull/219))
- Replace manual crawler regex generation with `crawler-user-agents` ([#224](https://github.com/nuxt-modules/device/pull/224))

### 🩹 Fixes

- Import Nuxt composables from `#imports` ([#174](https://github.com/nuxt-modules/device/pull/174))
- Update to latest `@nuxt/module-builder` ([#223](https://github.com/nuxt-modules/device/pull/223))
- Augment runtime config on `@nuxt/schema` ([a84ad64](https://github.com/nuxt-modules/device/commit/a84ad64))
- Disable 'vue/multi-word-component-names' for `test/` dir ([502d5b1](https://github.com/nuxt-modules/device/commit/502d5b1))
- Account for absence of module's runtime config in plugin ([a311d11](https://github.com/nuxt-modules/device/commit/a311d11))

### 📖 Documentation

- Use new `nuxi module add` command in installation ([#187](https://github.com/nuxt-modules/device/pull/187))
- Update link to `2.x` branch ([2aec2e7](https://github.com/nuxt-modules/device/commit/2aec2e7))
- Remove unused badges ([4cdf090](https://github.com/nuxt-modules/device/commit/4cdf090))
- Revert removing badges ([eea7813](https://github.com/nuxt-modules/device/commit/eea7813))
- Update badges style and links ([d290e56](https://github.com/nuxt-modules/device/commit/d290e56))
- Add banner ([1130799](https://github.com/nuxt-modules/device/commit/1130799))

### 🏡 Chore

- Add pull request template ([2de7def](https://github.com/nuxt-modules/device/commit/2de7def))
- Lint pull request template ([0faf42f](https://github.com/nuxt-modules/device/commit/0faf42f))
- Update renovate config ([855e082](https://github.com/nuxt-modules/device/commit/855e082))
- Test bundler module resolution ([#181](https://github.com/nuxt-modules/device/pull/181))
- Indicate compatibility with new v4 major ([#216](https://github.com/nuxt-modules/device/pull/216))
- Exclude `2.x` branch from renovate ([487f042](https://github.com/nuxt-modules/device/commit/487f042))
- Remove commented out module config from test fixture ([6d860a4](https://github.com/nuxt-modules/device/commit/6d860a4))

### 🤖 CI

- Add label PR workflow ([50a9f4f](https://github.com/nuxt-modules/device/commit/50a9f4f))
- Add reproduire ([#188](https://github.com/nuxt-modules/device/pull/188))

### ❤️ Contributors

- Damian Głowala ([@DamianGlowala](https://github.com/DamianGlowala))
- Daniel Roe ([@danielroe](https://github.com/danielroe))
- Dmitriy Kuts <exileed@yandex.ru>

### [3.1.1](https://github.com/nuxt-modules/device/compare/v3.1.0...v3.1.1) (2023-09-16)

 * #157 chore: export runtime
 * #158 fix of problem with export named 'default' in nuxt 3

## [3.1.0](https://github.com/nuxt-community/device-module/compare/v3.0.0...v3.1.0) (2023-02-08)


### Features

* **cloudfront:** extend device type detection ([beb89ea](https://github.com/nuxt-community/device-module/commit/beb89eae5bb05d8e5a5417e1307b0c07f93a0a00))

## [3.0.0](https://github.com/nuxt-community/device-module/compare/v2.1.0...v3.0.0) (2022-11-12)

### Features

 * Nuxt3 support (#119)

## [2.1.0](https://github.com/nuxt-community/device-module/compare/v2.0.1...v2.1.0) (2021-04-12)


### Features

* Add browser detection. ([7565909](https://github.com/nuxt-community/device-module/commit/75659099455084c63fb5e4320b3bf699613129ae))
* Add isCrawler flag. ([37882bd](https://github.com/nuxt-community/device-module/commit/37882bdb6fe023aae839b06e7500066186f5b143))
* add refreshOnResize option ([3d2e0d1](https://github.com/nuxt-community/device-module/commit/3d2e0d10acdb3c307b43be770765ca9e07d43ca6))


### Bug Fixes

* fix incorrect regex for edge browser ([79e4ffd](https://github.com/nuxt-community/device-module/commit/79e4ffd85c079102ae1085fbe16267c0797d4169))
* make the regex that detect a crawler case sensitive. ([8032d85](https://github.com/nuxt-community/device-module/commit/8032d85209796c7f7c34eceef8d236ed7327eed0))

### [2.0.1](https://github.com/nuxt-community/device-module/compare/v2.0.0...v2.0.1) (2021-02-27)

### Features

* added support for the in-app browsers of Instagram and Facebook (#59)

## [2.0.0](https://github.com/nuxt-community/device-module/compare/v1.2.7...v2.0.0) (2021-01-27)


### ⚠ BREAKING CHANGES

* improvements of the module (#56)

### Features

* improvements of the module ([#56](https://github.com/nuxt-community/device-module/issues/56)) ([a822554](https://github.com/nuxt-community/device-module/commit/a82255457b4aa292c80e1a1751151a5b8eea4fc9))

### [1.2.7](https://github.com/nuxt-community/device-module/compare/v1.2.6...v1.2.7) (2020-02-14)


### Bug Fixes

* **typings:** clean up typings ([61aa3ec](https://github.com/nuxt-community/device-module/commit/61aa3ec030a3bfcc061b81dbd393d2c59a5a7558))

### [1.2.6](https://github.com/nuxt-community/device-module/compare/v1.2.5...v1.2.6) (2020-01-31)

### Bug Fixes

 * migrate a type declaration file to nuxt 2.9+

### [1.2.5](https://github.com/nuxt-community/device-module/compare/v1.2.4...v1.2.5) (2020-01-30)

### Features

 * Add isAndroid property.

### [1.2.4](https://github.com/nuxt-community/device-module/compare/v1.2.3...v1.2.4) (2019-11-26)

### Features

 * Add cloudflare detection.


### [1.2.3](https://github.com/nuxt-community/device-module/compare/v1.2.2...v1.2.3) (2019-08-24)

### Bug Fixes

* add type declaration file. ([c971b60](https://github.com/nuxt-community/device-module/commit/c971b60))

### [1.2.2](https://github.com/nuxt-community/device-module/compare/v1.2.1...v1.2.2) (2019-08-14)

### [1.2.1](https://github.com/nuxt-community/device-module/compare/v1.1.5...v1.2.1) (2019-08-14)
