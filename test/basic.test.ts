import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'
import { createResolver } from '@nuxt/kit'

function findTrueOrFalse(html: string, input: string) {
  return html[html.indexOf(input) + input.length] === '✅'
}

function parseHtml(html: string) {
  return {
    isDesktop: findTrueOrFalse(html, 'isDesktop: '),
    isMobile: findTrueOrFalse(html, 'isMobile: '),
    isTablet: findTrueOrFalse(html, 'isTablet: '),
    isMobileOrTablet: findTrueOrFalse(html, 'isMobileOrTablet: '),
    isDesktopOrTablet: findTrueOrFalse(html, 'isDesktopOrTablet: '),
    isIos: findTrueOrFalse(html, 'isIos: '),
    isWindows: findTrueOrFalse(html, 'isWindows: '),
    isMacOS: findTrueOrFalse(html, 'isMacOS: '),
    isLinux: findTrueOrFalse(html, 'isLinux: '),
    isApple: findTrueOrFalse(html, 'isApple: '),
    isAndroid: findTrueOrFalse(html, 'isAndroid: '),
    isFirefox: findTrueOrFalse(html, 'isFirefox: '),
    isEdge: findTrueOrFalse(html, 'isEdge: '),
    isChrome: findTrueOrFalse(html, 'isChrome: '),
    isSafari: findTrueOrFalse(html, 'isSafari: '),
    isSamsung: findTrueOrFalse(html, 'isSamsung: '),
    isCrawler: findTrueOrFalse(html, 'isCrawler: '),
  }
}

const { resolve } = createResolver(import.meta.url)

describe('ssr', async () => {
  await setup({
    rootDir: resolve('fixtures/basic'),
    server: true,
    browser: true,
  })

  it('renders the index page', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')

    expect(html).toContain('isDesktop')
    expect(html).toContain('isMobile')
    expect(html).toContain('isMobile')
    expect(html).toContain('isTablet')
    expect(html).toContain('isMobileOrTablet')
    expect(html).toContain('isDesktopOrTablet')
    expect(html).toContain('isIos')
    expect(html).toContain('isWindows')
    expect(html).toContain('isMacOS')
    expect(html).toContain('isLinux')
    expect(html).toContain('isApple')
    expect(html).toContain('isAndroid')
    expect(html).toContain('isFirefox')
    expect(html).toContain('isEdge')
    expect(html).toContain('isChrome')
    expect(html).toContain('isSafari')
    expect(html).toContain('isSamsung')
    expect(html).toContain('isCrawler')
  })

  describe('detects device', () => {
    it('Samsung Galaxy S9', async () => {
      const userAgent = 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36'

      const html = await $fetch('/', {
        headers: {
          'User-Agent': userAgent,
        },
      })

      const { isMobile, isMobileOrTablet, isAndroid, isIos, isMacOS, isLinux, isWindows, isChrome } = parseHtml(html)

      expect({ isMobile, isMobileOrTablet, isAndroid, isIos, isMacOS, isLinux, isWindows, isChrome }).toEqual({ isMobile: true, isMobileOrTablet: true, isAndroid: true, isIos: false, isMacOS: false, isLinux: false, isWindows: false, isChrome: true })
    })

    it('Apple iPhone X', async () => {
      const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'

      const html = await $fetch('/', {
        headers: {
          'User-Agent': userAgent,
        },
      })

      const { isMobile, isMobileOrTablet, isAndroid, isIos, isMacOS, isLinux, isWindows, isSafari } = parseHtml(html)

      expect({ isMobile, isMobileOrTablet, isAndroid, isIos, isMacOS, isLinux, isWindows, isSafari }).toEqual({ isMobile: true, isMobileOrTablet: true, isAndroid: false, isIos: true, isMacOS: true, isLinux: false, isWindows: false, isSafari: true })
    })

    it('Samsung Galaxy Tab S3', async () => {
      const userAgent = 'Mozilla/5.0 (Linux; Android 7.0; SM-T827R4 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.116 Safari/537.36'

      const html = await $fetch('/', {
        headers: {
          'User-Agent': userAgent,
        },
      })
      const { isMobile, isMobileOrTablet, isAndroid, isIos, isMacOS, isLinux, isWindows, isChrome } = parseHtml(html)

      expect({ isMobile, isMobileOrTablet, isAndroid, isIos, isMacOS, isLinux, isWindows, isChrome }).toEqual({ isMobile: false, isMobileOrTablet: true, isAndroid: true, isIos: false, isMacOS: false, isLinux: false, isWindows: false, isChrome: true })
    })

    it('Windows 10-based PC using Edge browser', async () => {
      const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'

      const html = await $fetch('/', {
        headers: {
          'User-Agent': userAgent,
        },
      })
      const { isMobile, isMobileOrTablet, isAndroid, isIos, isMacOS, isLinux, isWindows, isEdge } = parseHtml(html)

      expect({ isMobile, isMobileOrTablet, isAndroid, isIos, isMacOS, isLinux, isWindows, isEdge }).toEqual({ isMobile: false, isMobileOrTablet: false, isAndroid: false, isIos: false, isMacOS: false, isLinux: false, isWindows: true, isEdge: true })
    })

    it('Linux PC using Chrome browser', async () => {
      const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'

      const html = await $fetch('/', {
        headers: {
          'User-Agent': userAgent,
        },
      })
      const { isChrome, isFirefox, isEdge, isSafari, isSamsung, isMacOS, isLinux, isWindows } = parseHtml(html)

      expect({ isChrome, isFirefox, isEdge, isSafari, isSamsung, isMacOS, isLinux, isWindows }).toEqual({ isChrome: true, isFirefox: false, isEdge: false, isSafari: false, isSamsung: false, isMacOS: false, isLinux: true, isWindows: false })
    })

    it('Mac OS X-based computer using a Safari browser', async () => {
      const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9'

      const html = await $fetch('/', {
        headers: {
          'User-Agent': userAgent,
        },
      })
      const { isMobile, isMobileOrTablet, isAndroid, isIos, isMacOS, isLinux, isWindows, isSafari } = parseHtml(html)

      expect({ isMobile, isMobileOrTablet, isAndroid, isIos, isMacOS, isLinux, isWindows, isSafari }).toEqual({ isMobile: false, isMobileOrTablet: false, isAndroid: false, isIos: false, isMacOS: true, isLinux: false, isWindows: false, isSafari: true })
    })
  })

  describe('detects a browser', () => {
    it('detects Chrome', async () => {
      const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'

      const html = await $fetch('/', {
        headers: {
          'User-Agent': userAgent,
        },
      })
      const { isChrome, isFirefox, isEdge, isSafari, isSamsung } = parseHtml(html)

      expect(isChrome).toEqual(true)
      expect(isFirefox).toEqual(false)
      expect(isEdge).toEqual(false)
      expect(isSafari).toEqual(false)
      expect(isSamsung).toEqual(false)
    })
    it('detects Firefox', async () => {
      const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0'

      const html = await $fetch('/', {
        headers: {
          'User-Agent': userAgent,
        },
      })
      const { isChrome, isFirefox, isEdge, isSafari, isSamsung } = parseHtml(html)

      expect(isChrome).toEqual(false)
      expect(isFirefox).toEqual(true)
      expect(isEdge).toEqual(false)
      expect(isSafari).toEqual(false)
      expect(isSamsung).toEqual(false)
    })
    it('detects Edge', async () => {
      const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 Edg/81.0.416.72'
      const html = await $fetch('/', {
        headers: {
          'User-Agent': userAgent,
        },
      })
      const { isChrome, isFirefox, isEdge, isSafari, isSamsung } = parseHtml(html)
      expect(isChrome).toEqual(false)
      expect(isFirefox).toEqual(false)
      expect(isEdge).toEqual(true)
      expect(isSafari).toEqual(false)
      expect(isSamsung).toEqual(false)
    })
    it('detects Safari', async () => {
      const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1'
      const html = await $fetch('/', {
        headers: {
          'User-Agent': userAgent,
        },
      })
      const { isChrome, isFirefox, isEdge, isSafari, isSamsung } = parseHtml(html)
      expect(isChrome).toEqual(false)
      expect(isFirefox).toEqual(false)
      expect(isEdge).toEqual(false)
      expect(isSafari).toEqual(true)
      expect(isSamsung).toEqual(false)
    })
    it('detects Samsung', async () => {
      const userAgent = 'Mozilla/5.0 (Linux; Android 10; SAMSUNG SM-A515F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/12.1 Chrome/79.0.3945.136 Mobile Safari/537.36'
      const html = await $fetch('/', {
        headers: {
          'User-Agent': userAgent,
        },
      })
      const { isChrome, isFirefox, isEdge, isSafari, isSamsung } = parseHtml(html)
      expect(isChrome).toEqual(false)
      expect(isFirefox).toEqual(false)
      expect(isEdge).toEqual(false)
      expect(isSafari).toEqual(false)
      expect(isSamsung).toEqual(true)
    })
  })

  describe('detects an-app browser', () => {
    it('Instagram', async () => {
      const userAgent
        = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15A372 Instagram'

      const html = await $fetch('/', {
        headers: {
          'User-Agent': userAgent,
        },
      })
      const { isMobile, isMobileOrTablet, isAndroid, isIos, isMacOS, isLinux, isWindows, isSafari } = parseHtml(html)

      expect({ isMobile, isMobileOrTablet, isAndroid, isIos, isMacOS, isLinux, isWindows, isSafari }).toEqual({ isMobile: true, isMobileOrTablet: true, isAndroid: false, isIos: true, isMacOS: true, isLinux: false, isWindows: false, isSafari: true })
    })
    it('Facebook', async () => {
      const userAgent
        = 'Mozilla/5.0 ((iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit (KHTML, like Gecko) Mobile [FBAN/FBForIPhone;FBAV/4.1;FBBV/4100.0;FBDV/iPhone3,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/5.1.1;FBSS/2; tablet;FBLC/en_US]'

      const html = await $fetch('/', {
        headers: {
          'User-Agent': userAgent,
        },
      })
      const { isMobile, isMobileOrTablet, isAndroid, isIos, isMacOS, isLinux, isWindows, isSafari } = parseHtml(html)

      expect({ isMobile, isMobileOrTablet, isAndroid, isIos, isMacOS, isLinux, isWindows, isSafari }).toEqual({ isMobile: true, isMobileOrTablet: true, isAndroid: false, isIos: true, isMacOS: true, isLinux: false, isWindows: false, isSafari: true })
    })
  })

  it('detects cloudfront headers - mobile', async () => {
    const html = await $fetch('/', {
      headers: {
        'User-Agent': 'Amazon CloudFront',
        'Cloudfront-Is-Mobile-Viewer': 'true',
      },
    })
    const { isMobile, isMobileOrTablet } = parseHtml(html)

    expect({ isMobile, isMobileOrTablet }).toEqual({ isMobile: true, isMobileOrTablet: true })
  })

  it('detects cloudfront headers - tablet', async () => {
    const html = await $fetch('/', {
      headers: {
        'User-Agent': 'Amazon CloudFront',
        'Cloudfront-Is-Tablet-Viewer': 'true',
      },
    })
    const { isMobile, isMobileOrTablet } = parseHtml(html)

    expect({ isMobile, isMobileOrTablet }).toEqual({ isMobile: false, isMobileOrTablet: true })
  })

  it('detects cloudfront headers - desktop', async () => {
    const html = await $fetch('/', {
      headers: {
        'User-Agent': 'Amazon CloudFront',
        'Cloudfront-Is-Desktop-Viewer': 'true',
      },
    })
    const { isDesktop } = parseHtml(html)

    expect(isDesktop).toEqual(true)
  })

  it('detects cloudfront headers - ios', async () => {
    const html = await $fetch('/', {
      headers: {
        'User-Agent': 'Amazon CloudFront',
        'Cloudfront-Is-Ios-Viewer': 'true',
      },
    })
    const { isIos } = parseHtml(html)

    expect(isIos).toEqual(true)
  })

  it('detects cloudfront headers - android', async () => {
    const html = await $fetch('/', {
      headers: {
        'User-Agent': 'Amazon CloudFront',
        'Cloudfront-Is-Android-Viewer': 'true',
      },
    })
    const { isAndroid } = parseHtml(html)

    expect(isAndroid).toEqual(true)
  })

  it('detects cloudflare headers - mobile', async () => {
    const html = await $fetch('/', {
      headers: {
        'cf-device-type': 'mobile',
      },
    })
    const { isMobile, isMobileOrTablet } = parseHtml(html)

    expect({ isMobile, isMobileOrTablet }).toEqual({ isMobile: true, isMobileOrTablet: true })
  })

  it('detects cloudflare headers - tablet', async () => {
    const html = await $fetch('/', {
      headers: {
        'cf-device-type': 'tablet',
      },
    })
    const { isMobile, isMobileOrTablet } = parseHtml(html)

    expect({ isMobile, isMobileOrTablet }).toEqual({ isMobile: false, isMobileOrTablet: true })
  })

  it('detects cloudflare headers - desktop', async () => {
    const html = await $fetch('/', {
      headers: {
        'cf-device-type': 'desktop',
      },
    })
    const { isDesktop } = parseHtml(html)

    expect(isDesktop).toEqual(true)
  })

  it('detects crawlers - googlebots', async () => {
    const googlebots = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'

    const html = await $fetch('/', {
      headers: {
        'User-Agent': googlebots,
      },
    })
    const { isCrawler } = parseHtml(html)

    expect(isCrawler).toEqual(true)
  })

  it('detects crawlers - yahoobots', async () => {
    const yahoobots = 'Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)'

    const html = await $fetch('/', {
      headers: {
        'User-Agent': yahoobots,
      },
    })
    const { isCrawler } = parseHtml(html)

    expect(isCrawler).toEqual(true)
  })

  it('detects crawlers - biduspider', async () => {
    const biduspider = 'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)'

    const html = await $fetch('/', {
      headers: {
        'User-Agent': biduspider,
      },
    })
    const { isCrawler } = parseHtml(html)

    expect(isCrawler).toEqual(true)
  })
})
