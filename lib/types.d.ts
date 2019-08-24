import Vue from 'vue'

interface Device {
  isDesktop: boolean
  isIos: boolean
  isMobile: boolean
  isMobileOrTablet: boolean
  isDesktopOrTablet: boolean
  isTablet: boolean
  isWindows: boolean
  isMacOS: boolean
}

declare module '@nuxt/vue-app' {
  interface Context {
    isDesktop: boolean
    isIos: boolean
    isMobile: boolean
    isMobileOrTablet: boolean
    isDesktopOrTablet: boolean
    isTablet: boolean
    isWindows: boolean
    isMacOS: boolean
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $device: Device
  }
}
