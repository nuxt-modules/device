import { defu } from 'defu'
import { defineNuxtModule, addPlugin, addImportsDir, createResolver, addTemplate } from '@nuxt/kit'
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
    nuxt.options.runtimeConfig.public.device = defu(nuxt.options.runtimeConfig.public.device, {
      defaultUserAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36',
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
