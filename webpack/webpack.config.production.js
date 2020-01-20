const path = require('path')
const config = require('./webpack.config.base')

config.mode = 'production'
config.output = {
  filename: 'main.js',
  path: path.resolve(__dirname, '../dist')
}

module.exports = config
