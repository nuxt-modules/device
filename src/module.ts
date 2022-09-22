import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defu } from 'defu'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'

export interface ModuleOptions {
  /**
   * Enable Device Module
   * @default true
   * @type boolean
   */
  enabled: boolean

  /**
   * Device Module Default User Agent
   * @default 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36'
   * @type string
   */
  defaultUserAgent: string,

  /**
   * Refresh Device Module Values On Window Resize
   * @default false
   * @type boolean
   */
  refreshOnResize: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'device-module',
    configKey: 'device',
    compatibility: {
      nuxt: '^3.0.0-rc.11 || ^2.16.0',
      bridge: true
    }
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
