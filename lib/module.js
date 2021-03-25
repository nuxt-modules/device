const path = require('path')
const defu = require('defu')

module.exports = function (moduleOptions) {
  const options = defu(moduleOptions, this.options.device, {
    defaultUserAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36',
    refreshOnResize: false
  })
  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'device.plugin.js',
    options
  })
}

module.exports.meta = require('../package.json')
