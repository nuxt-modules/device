export interface ModuleOptions {
  /**
   * Device Module Default User Agent
   * @default 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36'
   */
  defaultUserAgent?: string

  /**
   * Whether to enable the module conditionally.
   * @default true
   * @deprecated
   */
  enabled?: boolean

  /**
   * Refresh Device Module Values On Window Resize
   * @default false
   * @deprecated
   */
  refreshOnResize?: boolean
}

declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    device: Required<ModuleOptions>
  }
}
