const path = require('path')

module.exports = function nuxtToast (moduleOptions) {
  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    ssr: true,
  })
}

module.exports.meta = require('./package.json')
