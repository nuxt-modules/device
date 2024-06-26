![Nuxt banner](./.github/assets/banner.png)

# Nuxt Device

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Detect the type of device in your Nuxt applications.

See [demo on CodeSandbox](https://codesandbox.io/s/github/nuxt-community/device-module).

## Installation

```bash
npx nuxi@latest module add device
```

> [!NOTE]
> You can find the Nuxt 2 version of the module on the [`2.x` branch](https://github.com/nuxt-modules/device/tree/2.x).

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
$device.isApple
$device.isAndroid
$device.isFirefox
$device.isEdge
$device.isChrome
$device.isSafari
$device.isSamsung
$device.isCrawler
```

The user agent is also injected an accessible with `$device.userAgent`.

## Usage

### Composable

You can use the `useDevice()` composable inside a `script setup` to access the flags.

```js
<script setup>
const { isMobile } = useDevice();
</script>
```


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
  modules: ['@nuxtjs/device'],
  device: {
    defaultUserAgent: 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36'
  }
}
```

`refreshOnResize` refresh flags when the window resized.(default: false)

```js
{
  modules: ['@nuxtjs/device'],
  device: {
    refreshOnResize: true
  }
}
```

Note that the default user agent value is set to `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36`.
## CloudFront Support

If the `user-agent` is `Amazon CloudFront`, this module checks the following headers :  

- `CloudFront-Is-Mobile-Viewer`
- `CloudFront-Is-Tablet-Viewer`
- `CloudFront-Is-Desktop-Viewer`
- `CloudFront-Is-Ios-Viewer`
- `CloudFront-Is-Android-Viewer`

Here are the details about the headers:  
[Amazon CloudFront - Headers for determining the viewer's device type
](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-cloudfront-headers.html#cloudfront-headers-device-type)  

### Caution

`isWindows` and `isMacOS` flags are not available with CloudFront.

## Cloudflare Support

This module checks the header `CF-Device-Type`.

Here are the details about the header:
https://support.cloudflare.com/hc/en-us/articles/229373388-Cache-Content-by-Device-Type-Mobile-Tablet-Desktop-

## License

[MIT License](./LICENSE)

## Data Source

This module uses [crawler-user-agents](https://github.com/monperrus/crawler-user-agents) to generate the regular expression that detect a crawler.

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/device/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@nuxtjs/device

[npm-downloads-src]: https://img.shields.io/npm/dm/@nuxtjs/device.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/device

[license-src]: https://img.shields.io/github/license/nuxt-modules/device.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://github.com/nuxt-modules/device/blob/main/LICENSE

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
