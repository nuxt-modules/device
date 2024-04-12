import { useNuxtApp } from '#imports'
import type { Device } from '../types'

export const useDevice = (): Device => {
  return useNuxtApp().$device
}
