import type { Plugin } from 'nuxt/app'
import type { Device } from './types'
import generateFlags from './generateFlags'
import { defineNuxtPlugin, reactive, useRequestHeaders } from '#imports'

const plugin: Plugin<{ device: Device }> = defineNuxtPlugin(() => {
  let flags: Device

  if (import.meta.server) {
    const headers = useRequestHeaders()

    flags = reactive(generateFlags(headers['user-agent'] || '', headers))
  }
  else {
    flags = reactive(generateFlags(navigator.userAgent))
  }

  return {
    provide: {
      device: flags,
    },
  }
})

export default plugin
