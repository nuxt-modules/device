const { setup, loadConfig, url } = require('@nuxtjs/module-test-utils')

const defaultOsSettings = { android: null, ios: null, macOS: false, windows: false }
const defaultBrowserFlags = { isChrome: false, isEdge: false, isFirefox: false, isSafari: false, isSamsung: false, isCrawler: false }
const createBrowserFlags = (override) => {
  return { ...defaultBrowserFlags, ...override }
}

describe('Device module', () => {
  let nuxt

  let headers
  let extractDevices
  let extractFromUserAgentData
  let extractFromUserHint

  beforeAll(async () => {
    ({ nuxt } = await setup(loadConfig(__dirname)))
    const window = await nuxt.renderAndGetWindow(url('/'))
    extractDevices = window.$nuxt.$device.extractDevices
    extractFromUserAgentData = window.$nuxt.$device.extractFromUserAgentData
    extractFromUserHint = window.$nuxt.$device.extractFromUserHint
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  beforeEach(() => {
    headers = {}
  })

  test('injects properties', async () => {
    const window = await nuxt.renderAndGetWindow(url('/'))

    expect(window.$nuxt.$device).toBeDefined()
  })

  describe('detects device', () => {
    it('Samsung Galaxy S9', () => {
      const userAgent = 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36'

      expect(extractDevices(headers, userAgent)).toEqual({ mobile: true, mobileOrTablet: true, android: true, ios: false, macOS: false, windows: false, ...createBrowserFlags({ isChrome: true }) })
    })

    it('Apple iPhone X', () => {
      const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'

      expect(extractDevices(headers, userAgent)).toEqual({ mobile: true, mobileOrTablet: true, android: false, ios: true, macOS: true, windows: false, ...createBrowserFlags({ isSafari: true }) })
    })

    it('Samsung Galaxy Tab S3', () => {
      const userAgent = 'Mozilla/5.0 (Linux; Android 7.0; SM-T827R4 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.116 Safari/537.36'

      expect(extractDevices(headers, userAgent)).toEqual({ mobile: false, mobileOrTablet: true, android: true, ios: false, macOS: false, windows: false, ...createBrowserFlags({ isChrome: true }) })
    })

    it('Windows 10-based PC using Edge browser', () => {
      const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246'

      expect(extractDevices(headers, userAgent)).toEqual({ mobile: false, mobileOrTablet: false, android: false, ios: false, macOS: false, windows: true, ...createBrowserFlags({ isEdge: true }) })
    })

    it('Mac OS X-based computer using a Safari browser', () => {
      const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9'

      expect(extractDevices(headers, userAgent)).toEqual({ mobile: false, mobileOrTablet: false, android: false, ios: false, macOS: true, windows: false, ...createBrowserFlags({ isSafari: true }) })
    })
  })

  describe('detects a browser', () => {
    it('detects Chrome', () => {
      const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36';
      const result = extractDevices(headers, userAgent)
      expect(result.isChrome).toEqual(true)
      expect(result.isFirefox).toEqual(false)
      expect(result.isEdge).toEqual(false)
      expect(result.isSafari).toEqual(false)
      expect(result.isSamsung).toEqual(false)
    })
    it('detects Firefox', () => {
      const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0';
      const result = extractDevices(headers, userAgent)
      expect(result.isChrome).toEqual(false)
      expect(result.isFirefox).toEqual(true)
      expect(result.isEdge).toEqual(false)
      expect(result.isSafari).toEqual(false)
      expect(result.isSamsung).toEqual(false)
    })
    it('detects Edge', () => {
      const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 Edg/81.0.416.72';
      const result = extractDevices(headers, userAgent)
      expect(result.isChrome).toEqual(false)
      expect(result.isFirefox).toEqual(false)
      expect(result.isEdge).toEqual(true)
      expect(result.isSafari).toEqual(false)
      expect(result.isSamsung).toEqual(false)
    })
    it('detects Safari', () => {
      const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1'
      const result = extractDevices(headers, userAgent)
      expect(result.isChrome).toEqual(false)
      expect(result.isFirefox).toEqual(false)
      expect(result.isEdge).toEqual(false)
      expect(result.isSafari).toEqual(true)
      expect(result.isSamsung).toEqual(false)
    })
    it('detects Samsung', () => {
      const userAgent = 'Mozilla/5.0 (Linux; Android 10; SAMSUNG SM-A515F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/12.1 Chrome/79.0.3945.136 Mobile Safari/537.36'
      const result = extractDevices(headers, userAgent)
      expect(result.isChrome).toEqual(false)
      expect(result.isFirefox).toEqual(false)
      expect(result.isEdge).toEqual(false)
      expect(result.isSafari).toEqual(false)
      expect(result.isSamsung).toEqual(true)
    })
  })

  describe('detects an-app browser', () => {
    it('Instagram', () => {
      const userAgent =
        'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15A372 Instagram';

      expect(extractDevices(headers, userAgent)).toEqual({ mobile: true, mobileOrTablet: true, android: false, ios: true, macOS: true, windows: false, ...createBrowserFlags( { isSafari: true })})
    })
    it('Facebook', () => {
      const userAgent =
        "Mozilla/5.0 ((iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit (KHTML, like Gecko) Mobile [FBAN/FBForIPhone;FBAV/4.1;FBBV/4100.0;FBDV/iPhone3,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/5.1.1;FBSS/2; tablet;FBLC/en_US]";

      expect(extractDevices(headers, userAgent)).toEqual({ mobile: true, mobileOrTablet: true, android: false, ios: true, macOS: true, windows: false, ...createBrowserFlags({ isSafari: true })})
    })
  })

  it('detects cloudflare headers', () => {
    headers['cf-device-type'] = 'mobile'
    expect(extractDevices(headers, '')).toEqual({ mobile: true, mobileOrTablet: true, ...defaultOsSettings, ...defaultBrowserFlags })

    headers['cf-device-type'] = 'tablet'
    expect(extractDevices(headers, '')).toEqual({ mobile: false, mobileOrTablet: true, ...defaultOsSettings, ...defaultBrowserFlags })

    headers['cf-device-type'] = 'desktop'
    expect(extractDevices(headers, '')).toEqual({ mobile: false, mobileOrTablet: false, ...defaultOsSettings, ...defaultBrowserFlags })
  })

  it('detects crawlers', () => {
      const googlebots = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
      expect(extractDevices(headers, googlebots).isCrawler).toEqual(true)
      const yahoobots = "Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)"
      expect(extractDevices(headers, yahoobots).isCrawler).toEqual(true)
      const biduspider = "Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)"
      expect(extractDevices(headers, biduspider).isCrawler).toEqual(true)
  });

  describe('UserAgentData', () => {
    const base = {
      "brands": [
      {
        "brand": " Not A;Brand",
        "version": "99"
      },
      {
        "brand": "Chromium",
        "version": "100"
      },
      {
        "brand": "Google Chrome",
        "version": "100"
      }
    ],
      "mobile": false,
      "platform": "macOS"
    }
    it('can detect brand', () => {
      {
        let {
          isChrome,
          isEdge
        } = extractFromUserAgentData({ ...base, "brands": [{"brand": "Google Chrome", "version": "100"}] })
        expect([isChrome, isEdge]).toEqual([true, false])
      }
      {
        let {
          isChrome,
          isEdge
        } = extractFromUserAgentData({ ...base, "brands": [{"brand": "Microsoft Edge", "version": "100"}] })
        expect([isChrome, isEdge]).toEqual([false, true])
      }
    })

    it('can detect platform', () => {
      {
        let {
          macOS,
          windows
        } = extractFromUserAgentData({ ...base })
        expect([macOS, windows]).toEqual([true, false])
      }
      {
        let {
          macOS,
          windows
        } = extractFromUserAgentData({
          ...base,
          "platform": "Windows"
        })
        expect([macOS, windows]).toEqual([false, true])
      }
    })
    it('can detect mobile', () => {
      {
        let {
          mobile
        } = extractFromUserAgentData({ ...base, mobile: false })
        expect(mobile).toEqual(false)
      }
      {
        let {
          mobile,
        } = extractFromUserAgentData({
          ...base,
          mobile: true
        })
        expect(mobile).toEqual(true)
      }
    })
  })

  describe('clienthint header', () => {
    const base = {
      'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': 'macOS'
    }
    it('can parse arbitrary brand ', () => {
      const result = extractFromUserHint({
        ...base,
        'sec-ch-ua': ' "()-./:;=?_ Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"'
      })
      expect(result).toEqual({
        "mobile": false,
        "windows": false,
        "macOS": true,
        "isEdge": false,
        "isChrome": true
      })
    })
    it('can detect ua', () => {
      const result = extractFromUserHint({
        ...base,
        'sec-ch-ua': '"(Not A;Brand";v="99", "Chromium";v="100", "Microsoft Edge";v="100"'
      })
      expect(result).toEqual({
        "mobile": false,
        "windows": false,
        "macOS": true,
        "isEdge": true,
        "isChrome": false
      })
    })
    it('can detect mobile', () => {
      const result = extractFromUserHint({
        ...base,
        'sec-ch-ua-mobile': '?1',
      })
      expect(result).toEqual({
        "mobile": true,
        "mobileOrTablet": true,
        "windows": false,
        "macOS": true,
        "isEdge": false,
        "isChrome": true
      })
    })
    it('can detect platform', () => {
      const result = extractFromUserHint({
        ...base,
        'sec-ch-ua-platform': 'Windows',
      })
      expect(result).toEqual({
        "mobile": false,
        "windows": true,
        "macOS": false,
        "isEdge": false,
        "isChrome": true
      })
    })
  })
})
