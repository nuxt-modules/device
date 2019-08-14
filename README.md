# @nuxtjs/device

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Standard JS][standard-js-src]][standard-js-href]
[![nuxt-device-detect Dev Token](https://badge.devtoken.rocks/nuxt-device-detect)](https://devtoken.rocks/package/nuxt-device-detect)

This module injects flags that indicate a device type into the context and the component instance.

## Setup

 - Add `@nuxtjs/device` to depedency using yarn or npm to your project
 - Add `@nuxtjs/device` to modules section of nuxt.config.js

```js
{
  modules: [
   '@nuxtjs/device',
  ]
}
```

### Options

`defaultUserAgent` option can be used for `npm run generate`.

```js
{
  modules: [
    [
      '@nuxtjs/device',
      {defaultUserAgent: 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36'}
    ]
  ]
}
```

## Added flags

You can use these flags to detect the device type.

```js
context.isDesktop
context.isMobile
context.isTablet
context.isMobileOrTablet
context.isDesktopOrTablet
context.isIos
context.isWindows
context.isMacOS

instance.$device.isDesktop
instance.$device.isMobile
instance.$device.isTablet
instance.$device.isMobileOrTablet
instance.$device.isDesktopOrTablet
instance.$device.isIos
instance.$device.isWindows
instance.$device.isMacOS
```

## CloudFront Support

If a user-agent is 'Amazon CloudFront', this module checks
the both headers 'CloudFront-Is-Mobile-Viewer' and 'CloudFront-Is-Tablet-Viewer'.

Here are the details about the headers:
https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html#header-caching-web-device

### Caution

`isIos`, `isWindows` and `isMacOS` flags are not available with CloudFront.

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

Ofcourse, you can use `$device` via `this` in a script.

### Change a layout dynamically

```js
export default {
	layout: (ctx) => ctx.isMobile ? 'mobile' : 'default'
}
```

## License

[MIT License](./LICENSE)


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@nuxtjs/amp.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/amp

[npm-downloads-src]: https://img.shields.io/npm/v/@nuxtjs/amp/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/amp

[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/amp-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/amp-module

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/amp-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/amp-module

[david-dm-src]: https://david-dm.org/nuxt-community/amp-module/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/nuxt-community/amp-module

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com

