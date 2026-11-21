import type { NuxtModule } from '@nuxt/schema'
import { defineNuxtModule, addPlugin, addImportsDir, createResolver, addTemplate, addTypeTemplate } from '@nuxt/kit'
import crawlers from 'crawler-user-agents'
import pkg from '../package.json' with { type: 'json' }

const module: NuxtModule = defineNuxtModule({
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

    addTypeTemplate({
      filename: 'types/nuxtjs-device.d.ts',
      getContents: () => `declare module '#build/nuxtjs-device.mjs' {
  export const REGEX_CRAWLER: RegExp
}
`,
    }, { nuxt: true, node: true })
  },
})

export default module
