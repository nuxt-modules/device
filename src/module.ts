import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defu } from 'defu'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'

export interface ModuleOptions {
  enabled: boolean
  defaultUserAgent: string,
  refreshOnResize: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'device-module',
    configKey: 'device'
  },
  defaults: {
    enabled: true,
    defaultUserAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36',
    refreshOnResize: false
  },
  setup (options, nuxt) {
    if (options.enabled) {
      nuxt.options.runtimeConfig.public.device = defu(nuxt.options.runtimeConfig.public.device, {
        enabled: options.enabled,
        defaultUserAgent: options.defaultUserAgent,
        refreshOnResize: options.refreshOnResize
      })
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))
    }
  }
})
