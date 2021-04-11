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
    <div v-if="$device.isSafari">
      isSafari
    </div>
    <div v-if="$device.isFirefox">
      isFirefox
    </div>
    <div v-if="$device.isEdge">
      isEdge
    </div>
    <div v-if="$device.isChrome">
      isChrome
    </div>
    <div v-if="$device.isSamsung">
      isSamsung
    </div>
    <pre>{{ JSON.stringify($device, null, 2) }}</pre>
  </div>
</template>
