const path = require('path')

module.exports = {
  pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname)
    }

    return config
  }
}
