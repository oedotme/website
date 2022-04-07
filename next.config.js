module.exports = {
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
