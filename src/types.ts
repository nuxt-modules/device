export interface ModuleOptions {
  /**
   * Sets the default value for the `user-agent` header (useful when running `npm run generate`).
   * @default 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36'
   */
  defaultUserAgent?: string
}

declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    device: Required<ModuleOptions>
  }
}
