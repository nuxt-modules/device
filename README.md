# @nuxtjs/device

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Standard JS][standard-js-src]][standard-js-href]
[![nuxt-device-detect Dev Token](https://badge.devtoken.rocks/nuxt-device-detect)](https://devtoken.rocks/package/nuxt-device-detect)

This module injects flags that indicate a device type into the context and the component instance.

See [demo on CodeSandbox](https://codesandbox.io/s/github/nuxt-community/device-module).

## Setup

Add `@nuxtjs/device` to the dev dependencies using yarn or npm to your project.

```bash
yarn add --dev @nuxtjs/device
# Using npm
npm install -D @nuxtjs/device
```

Add it to the `buildModules` section of your `nuxt.config`:

```js
{
  buildModules: [
   '@nuxtjs/device',
  ]
}
```

That's it, you can now use `$device` in your [Nuxt](https://nuxtjs.org) app ✨

## Flags

You can use these flags to detect the device type.

```js
$device.isDesktop
$device.isMobile
$device.isTablet
$device.isMobileOrTablet
$device.isDesktopOrTablet
$device.isIos
$device.isWindows
$device.isMacOS
$device.isAndroid
$device.isFirefox
$device.isEdge
$device.isChrome
$device.isSamsung
$device.isCrawler
```

The user agent is also injected an accessible with `$device.userAgent`.

## Usage

### Switch a view

```html
<template>
  <section>
    <div v-if="$device.isDesktop">
      Desktop
    </div>
    <div v-else-if="$device.isTablet">
      Tablet
    </div>
    <div v-else>
      Mobile
    </div>
  </section>
</template>
```

Of course, you can use `$device` via `this` in a script.

### Change a layout dynamically

```js
export default {
  layout: (ctx) => ctx.$device.isMobile ? 'mobile' : 'default'
}
```

### Add a custom flag

You can add other flags to `$device` by adding a [Nuxt plugin](https://nuxtjs.org/docs/2.x/directory-structure/plugins):

```js
// plugins/custom-flag.js
export default function ({ $device }) {
  $device.isCustom = $device.userAgent.includes('Custom-Agent') ? true : false
}
```

### Options

`defaultUserAgent` option can be used when running `npm run generate`.

```js
{
  buildModules: ['@nuxtjs/device'],
  device: {
    defaultUserAgent: 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36'
  }
}
```

`refreshOnResize` refresh flags when the window resized.(default: false)

```js
{
  buildModules: ['@nuxtjs/device'],
  device: {
    refreshOnResize: true
  }
}
```

Note that the default user agent value is set to `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36`.
## CloudFront Support

If a user-agent is `Amazon CloudFront`, this module checks
the both headers `CloudFront-Is-Mobile-Viewer` and `CloudFront-Is-Tablet-Viewer`.

Here are the details about the headers:
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html#header-caching-web-device

### Caution

`isIos`, `isWindows` and `isMacOS` flags are not available with CloudFront.

## Cloudflare Support

This module checks the header `CF-Device-Type`.

Here are the details about the header:
https://support.cloudflare.com/hc/en-us/articles/229373388-Cache-Content-by-Device-Type-Mobile-Tablet-Desktop-

## License

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@nuxtjs/device.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/device

[npm-downloads-src]: https://img.shields.io/npm/v/@nuxtjs/device/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/device

[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/device-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/device-module

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/device-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/device-module

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com

[license-src]: https://img.shields.io/npm/l/@nuxtjs/device.svg?style=flat-square
[license-href]: https://npmjs.com/package/@nuxtjs/device

## Data Source

This module uses [crawler-user-agents](https://github.com/monperrus/crawler-user-agents) to generate the regular expression that detect a crawler.

