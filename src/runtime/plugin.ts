import { reactive } from 'vue'
import generateFlags from './generateFlags'
import { defineNuxtPlugin, useRuntimeConfig, useRequestHeaders } from '#imports'
// https://github.com/nuxt/module-builder/issues/141
import type {} from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()

  const defaultUserAgent = runtimeConfig.public?.device?.defaultUserAgent

  // Server Side
  if (nuxtApp.ssrContext) {
    const headers = useRequestHeaders()

    const userAgent = headers['user-agent'] || defaultUserAgent || ''

    const flags = reactive(generateFlags(userAgent, headers))

    return {
      provide: {
        device: flags,
      },
    }
  }

  // Client Side
  const userAgent = navigator.userAgent || defaultUserAgent || ''
  const flags = reactive(generateFlags(userAgent))

  if (runtimeConfig.public?.device?.refreshOnResize) {
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

  return {
    provide: {
      device: flags,
    },
  }
})
