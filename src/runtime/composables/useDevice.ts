import { useNuxtApp } from '#app'
import type { Device } from '../types'

export default function (): Device {
  return useNuxtApp().$device
}
