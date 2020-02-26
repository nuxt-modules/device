const { extractDevices } = require('../lib/deviceDetection')

const defaultOsSettings = { android: null, ios: null, macOS: true, windows: false }

describe('device module', () => {
  let ctx
  let headers

  beforeEach(() => {
    headers = {}
    ctx = {
      req: {
        headers
      }
    }
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
