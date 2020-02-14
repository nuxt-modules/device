import Vue from 'vue'

interface Device {
  isDesktop: boolean
  isIos: boolean
  isAndroid: boolean
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
    isAndroid: boolean
    isMobile: boolean
    isMobileOrTablet: boolean
    isDesktopOrTablet: boolean
    isTablet: boolean
    isWindows: boolean
    isMacOS: boolean
  }

  interface NuxtAppOptions {
    $device: Device
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    isDesktop: boolean
    isIos: boolean
    isAndroid: boolean
    isMobile: boolean
    isMobileOrTablet: boolean
    isDesktopOrTablet: boolean
    isTablet: boolean
    isWindows: boolean
    isMacOS: boolean
  }
  interface NuxtAppOptions {
    $device: Device
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
