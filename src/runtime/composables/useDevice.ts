import type { Device } from '../../types'
import { useNuxtApp } from '#imports'

export const useDevice = (): Device => {
  return useNuxtApp().$device
}
