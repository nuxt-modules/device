
import { ModuleOptions } from './module'

declare module '@nuxt/schema' {
  interface NuxtConfig { ['device']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['device']?: ModuleOptions }
}


export { default } from './module'
