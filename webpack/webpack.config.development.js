const path = require('path')
const config = require('./webpack.config.base')

config.mode = 'development'
config.devtool = 'source-map'
config.devServer = {
  contentBase: './development_build',
  historyApiFallback: true
}
config.output = {
  filename: 'main.js',
  path: path.resolve(__dirname, '../development_build')
}

module.exports = config
