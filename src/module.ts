import { defineNuxtModule, addPlugin, addImportsDir, createResolver, addTemplate } from '@nuxt/kit'
import crawlers from 'crawler-user-agents'
import pkg from '../package.json' with { type: 'json' }

export default defineNuxtModule({
  meta: {
    name: pkg.name,
    compatibility: {
      nuxt: '>=4.0.0',
    },
    version: pkg.version,
  },
  setup() {
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
