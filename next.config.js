const path = require('path')
const remoteRefresh = require('next-remote-refresh')

const config = {
  reactStrictMode: true,
  swcMinify: true,
  // webpack: (config, { dev, isServer }) => {
  //   if (!dev && !isServer) {
  //     config.resolve.alias['react'] = 'preact/compat'
  //     config.resolve.alias['react-dom'] = 'preact/compat'
  //   }
  //   return config
  // },
}

const withRemoteRefresh = remoteRefresh({ paths: path.resolve(__dirname, 'content') })

module.exports = withRemoteRefresh(config)
