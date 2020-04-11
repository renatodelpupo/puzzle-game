var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../gh-pages/index.html'),
    assetsRoot: path.resolve(__dirname, '../gh-pages'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/puzzle-game/',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}