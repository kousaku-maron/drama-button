const path = require('path')

module.exports = {
  pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
  build: {
    env: {
      API_KEY: process.env.API_KEY,
      AUTH_DOMAIN: process.env.AUTH_DOMAIN,
      PROJECT_ID: process.env.PROJECT_ID,
      STORAGE_BUCKET: process.env.STORAGE_BUCKET,
      APP_ID: process.env.APP_ID,
      MEASUREMENT_ID: process.env.MEASUREMENT_ID,
      MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID
    }
  },
  env: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname)
    }

    return config
  }
}
