import { useNuxtApp } from '#app'
import type { Device } from '../types'

export const useDevice = (): Device => {
  return useNuxtApp().$device
}
