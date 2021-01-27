<template>
  <div>
    <div v-if="$device.isMobile">
      isMobile
    </div>
    <div v-if="$device.isDesktop">
      isDesktop
    </div>
    <div v-if="$device.isTablet">
      isTablet
    </div>
    <div v-if="$device.isMobileOrTablet">
      isMobileOrTablet
    </div>
    <div v-if="$device.isIos">
      isIos
    </div>
    <div v-if="$device.isAndroid">
      isAndroid
    </div>
    <div v-if="$device.isWindows">
      isWindows
    </div>
    <div v-if="$device.isMacOS">
      isMacOS
    </div>
    <div v-if="$device.isDesktopOrTablet">
      isDesktopOrTablet
    </div>
    <pre>{{ JSON.stringify($device, null, 2) }}</pre>
  </div>
</template>
