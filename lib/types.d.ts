import Vue from 'vue'

export interface Device {
  userAgent: string
  isDesktop: boolean
  isIos: boolean
  isAndroid: boolean
  isMobile: boolean
  isMobileOrTablet: boolean
  isDesktopOrTablet: boolean
  isTablet: boolean
  isWindows: boolean
  isMacOS: boolean
  isSafari: boolean
  isFirefox: boolean
  isEdge: boolean
  isChrome: boolean
  isSamsung: boolean
  isCrawler: boolean
}

interface DeviceOptions {
  refreshOnResize?: boolean
  defaultUserAgent?: string
}

declare module '@nuxt/vue-app' {
  interface Context {
    $device: Device
  }

  interface NuxtAppOptions {
    $device: Device
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    $device: Device
  }

  interface NuxtAppOptions {
    $device: Device
  }

  interface Configuration {
    device?: DeviceOptions
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $device: Device
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $device: Device
  }
}
