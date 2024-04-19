import { defu } from 'defu'
import { defineNuxtModule, addPlugin, addImportsDir, createResolver, useLogger } from '@nuxt/kit'
import { name, version } from '../package.json'
import type { ModuleOptions } from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    configKey: 'device',
    compatibility: {
      nuxt: '^3.0.0 || ^2.16.0',
      bridge: true,
    },
    version,
  },
  defaults: {
    enabled: true,
    defaultUserAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36',
    refreshOnResize: false,
  },
  setup(options, nuxt) {
    if (typeof options.refreshOnResize === 'boolean') {
      const logger = useLogger('@nuxtjs/device')

      logger.warn('\'refreshOnResize\' option is deprecated. It will be removed in the next major release.')
    }

    if (!options.enabled) {
      return
    }

    nuxt.options.runtimeConfig.public.device = defu(nuxt.options.runtimeConfig.public.device, options)

    const { resolve } = createResolver(import.meta.url)

    addPlugin(resolve('runtime/plugin'))

    addImportsDir(resolve('runtime/composables'))
  },
})
