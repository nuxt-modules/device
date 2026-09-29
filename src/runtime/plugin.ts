import type { Plugin } from 'nuxt/app'
import type { Device } from './types'
import generateFlags from './generateFlags'
import { defineNuxtPlugin, useRequestHeaders, useState } from '#imports'

const plugin: Plugin<{ device: Device }> = defineNuxtPlugin(() => {
  const flags = useState<Device>('nuxt-device', () => {
    if (import.meta.server) {
      const headers = useRequestHeaders()

      return generateFlags(headers['user-agent'] || '', headers)
    }

    return generateFlags(navigator.userAgent)
  })

  return {
    provide: {
      device: flags.value,
    },
  }
})

export default plugin
