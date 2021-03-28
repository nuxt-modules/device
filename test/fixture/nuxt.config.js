const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: resolve(__dirname),
  render: {
    resourceHints: false
  },
  buildModules: [require('../../')],
  device: {
    test: true,
    refreshOnResize: true
  },
  plugins: ['~/plugins/custom-flag.js']
}
