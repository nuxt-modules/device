const { setup, loadConfig, url } = require('@nuxtjs/module-test-utils')

const defaultOsSettings = { android: null, ios: null, macOS: true, windows: false }

describe('Device module', () => {
  let nuxt

  let ctx
  let headers
  let extractDevices

  beforeAll(async () => {
    ({ nuxt } = await setup(loadConfig(__dirname)))
    const window = await nuxt.renderAndGetWindow(url('/'))
    extractDevices = window.$nuxt.$device.extractDevices
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  beforeEach(async () => {
    headers = {}
    ctx = {
      req: {
        headers
      }
    }
  })

  test('injects properties', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))

    expect(window.$nuxt.$device).toBeDefined()
  })

  describe('detects device', () => {
    it('Samsung Galaxy S9', () => {
      const userAgent = 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36'

      expect(extractDevices(ctx, userAgent)).toEqual({ mobile: true, mobileOrTablet: true, android: true, ios: false, macOS: false, windows: false })
    })

    it('Apple iPhone X', () => {
      const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'

      expect(extractDevices(ctx, userAgent)).toEqual({ mobile: true, mobileOrTablet: true, android: false, ios: true, macOS: true, windows: false })
    })

    it('Samsung Galaxy Tab S3', () => {
      const userAgent = 'Mozilla/5.0 (Linux; Android 7.0; SM-T827R4 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.116 Safari/537.36'

      expect(extractDevices(ctx, userAgent)).toEqual({ mobile: false, mobileOrTablet: true, android: true, ios: false, macOS: false, windows: false })
    })

    it('Windows 10-based PC using Edge browser', () => {
      const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'

      expect(extractDevices(ctx, userAgent)).toEqual({ mobile: false, mobileOrTablet: false, android: false, ios: false, macOS: false, windows: true })
    })

    it('Mac OS X-based computer using a Safari browser', () => {
      const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9'

      expect(extractDevices(ctx, userAgent)).toEqual({ mobile: false, mobileOrTablet: false, android: false, ios: false, macOS: true, windows: false })
    })
  })

  it('detects cloudflare headers', () => {
    headers['cf-device-type'] = 'mobile'

    expect(extractDevices(ctx)).toEqual({ mobile: true, mobileOrTablet: true, ...defaultOsSettings })

    headers['cf-device-type'] = 'tablet'
    expect(extractDevices(ctx)).toEqual({ mobile: false, mobileOrTablet: true, ...defaultOsSettings })

    headers['cf-device-type'] = 'desktop'
    expect(extractDevices(ctx)).toEqual({ mobile: false, mobileOrTablet: false, ...defaultOsSettings })
  })
})
