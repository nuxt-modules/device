import Vue from 'vue'

interface Device {
  isDesktop: boolean
  isIos: boolean
  isMobile: boolean
  isMobileOrTablet: boolean
  isTablet: boolean
}

declare module 'vue/types/vue' {
  interface Vue {
    $device: Device
  }
}
