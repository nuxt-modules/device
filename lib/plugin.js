const { extractDevices } = require('./deviceDetection')

export default async function (ctx, inject) {
  let userAgent = ''
  if (typeof ctx.req !== 'undefined') {
    userAgent = ctx.req.headers['user-agent']
  } else if (typeof navigator !== 'undefined') {
    userAgent = navigator.userAgent
  } else {
    <% if (options.defaultUserAgent) { %>
      userAgent = '<%= options.defaultUserAgent %>'
    <% } else { %>
      userAgent = DEFAULT_USER_AGENT
    <% } %>
  }

  const { mobile, mobileOrTablet, ios, android, windows, macOS } = extractDevices(ctx, userAgent)

  ctx.isMobile = mobile
  ctx.isMobileOrTablet = mobileOrTablet
  ctx.isTablet = !mobile && mobileOrTablet
  ctx.isDesktop = !mobileOrTablet
  ctx.isDesktopOrTablet = !mobile
  ctx.isIos = ios
  ctx.isAndroid = android
  ctx.isWindows = windows
  ctx.isMacOS = macOS
  inject('device', {
    isMobile: mobile,
    isMobileOrTablet: mobileOrTablet,
    isTablet: !mobile && mobileOrTablet,
    isDesktop: !mobileOrTablet,
    isIos: ios,
    isAndroid: android,
    isWindows: windows,
    isMacOS: macOS,
    isDesktopOrTablet: !mobile
  })
}
