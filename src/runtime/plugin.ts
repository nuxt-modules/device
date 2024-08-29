import type { Device } from '../types'
import generateFlags from './generateFlags'
import { defineNuxtPlugin, reactive, useRequestHeaders, useRuntimeConfig } from '#imports'

export default defineNuxtPlugin(() => {
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

    if (runtimeConfig.public.device.refreshOnResize) {
      window.addEventListener('resize', () => {
        setTimeout(() => {
          const newFlags = generateFlags(navigator.userAgent || userAgent)

          Object.entries(newFlags).forEach(([key, value]) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (flags as any)[key] = value
          })
        }, 50)
      })
    }
  }

  return {
    provide: {
      device: flags,
    },
  }
})
