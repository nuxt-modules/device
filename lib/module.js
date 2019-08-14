const path = require('path')

module.exports = function (moduleOptions) {
  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    ssr: true,
    options: moduleOptions
  })
}

module.exports.meta = require('../package.json')
