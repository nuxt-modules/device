# nuxt-device-detect

This module injects flags that indicate a device type into the context and the component instance.

## Setup

 - Add `nuxt-device-detect` to depedency using yarn or npm to your project
 - Add `nuxt-device-detect` to modules section of nuxt.config.js

```
{
  modules: [
   'nuxt-device-detect',
  ]
}
```

## Added flags

you can use these flags to detect the device type.

```
context.isDesktop
context.isMobile
context.isTablet
context.isMobileOrTablet

instance.$device.isDesktop
instance.$device.isMobile
instance.$device.isTablet
instance.$device.isMobileOrTablet
```

## Usage

### Switch a view

```
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

```
export default {
	layout: (ctx) => ctx.isMobile ? 'mobile' : 'default'
}
```

