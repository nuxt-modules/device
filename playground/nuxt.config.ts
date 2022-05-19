import { defineNuxtConfig } from 'nuxt'
import device from '..'

export default defineNuxtConfig({
  modules: [
    device
  ],
  device: {
    refreshOnResize: false
  }
})
