export interface ModuleOptions {
  /**
   * Enable Device Module
   * @default true
   * @type boolean
   */
  enabled?: boolean

  /**
   * Device Module Default User Agent
   * @default 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36'
   * @type string
   */
  defaultUserAgent?: string

  /**
   * Refresh Device Module Values On Window Resize
   * @default false
   * @type boolean
   */
  refreshOnResize?: boolean
}

export type Device = {
  userAgent: string
  isDesktop: boolean
  isIos: boolean
  isAndroid: boolean
  isMobile: boolean
  isMobileOrTablet: boolean
  isDesktopOrTablet: boolean
  isTablet: boolean
  isWindows: boolean
  isMacOS: boolean
  isApple: boolean
  isSafari: boolean
  isFirefox: boolean
  isEdge: boolean
  isChrome: boolean
  isSamsung: boolean
  isCrawler: boolean
}

declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    device: ModuleOptions
  }
}
