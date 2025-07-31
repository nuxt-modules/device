import { defu } from 'defu'
import { defineNuxtModule, addPlugin, addImportsDir, createResolver, useLogger, addTemplate } from '@nuxt/kit'
import crawlers from 'crawler-user-agents' with { type: 'json' }
import { name, version } from '../package.json'
import type { ModuleOptions } from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    configKey: 'device',
    compatibility: {
      nuxt: '>=3.0.0',
    },
    version,
  },
  setup(options, nuxt) {
    if (typeof options.enabled === 'boolean' || typeof options.refreshOnResize === 'boolean') {
      const logger = useLogger('@nuxtjs/device')

      if (typeof options.enabled === 'boolean') {
        logger.warn('\'enabled\' option is deprecated. It will be removed in the next major release.')
      }

      if (typeof options.refreshOnResize === 'boolean') {
        logger.warn('\'refreshOnResize\' option is deprecated. It will be removed in the next major release.')
      }
    }

    if (options.enabled === false) {
      return
    }

    nuxt.options.runtimeConfig.public.device = defu(nuxt.options.runtimeConfig.public.device, {
      defaultUserAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36',
      enabled: true,
      refreshOnResize: false,
    })

    const { resolve } = createResolver(import.meta.url)

    addPlugin(resolve('./runtime/plugin'))

    addImportsDir(resolve('./runtime/composables'))

    addTemplate({
      filename: 'nuxtjs-device.mjs',
      getContents: () => `export const REGEX_CRAWLER = new RegExp(/${
        crawlers.map(crawler => crawler.pattern).join('|')
      }/)`,
    })
  },
})
