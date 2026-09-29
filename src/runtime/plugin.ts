import type { Plugin } from 'nuxt/app'
import type { Device } from './types'
import generateFlags from './generateFlags'
import { defineNuxtPlugin, reactive, useRequestHeaders, useRuntimeConfig } from '#imports'

const plugin: Plugin<{ device: Device }> = defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()

  const defaultUserAgent = runtimeConfig.public.device.defaultUserAgent

  let flags: Device

  if (import.meta.server) {
    const headers = useRequestHeaders()

    const userAgent = headers['user-agent'] || defaultUserAgent

    flags = reactive(generateFlags(userAgent, headers))
  }
  else {
    const userAgent = navigator.userAgent || defaultUserAgent

    flags = reactive(generateFlags(userAgent))
  }

  return {
    provide: {
      device: flags,
    },
  }
})

export default plugin
