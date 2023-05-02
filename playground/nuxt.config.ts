import device from '../src/module'

export default defineNuxtConfig({
  modules: [
    device
  ],
  device: {
    // enabled: true,
    // defaultUserAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36',
    // refreshOnResize: false
  }
})
