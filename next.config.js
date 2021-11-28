module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.resolve.alias['react'] = 'preact/compat'
      config.resolve.alias['react-dom'] = 'preact/compat'
    }
    return config
  },
  redirects: () => [
    {
      source: '/blog/faster-directory-navigation',
      destination: '/blog/faster-directory-navigation-with-fzf',
      permanent: true,
    },
    {
      source: '/blog/file-based-routing-with-react-router-2',
      destination: '/blog/file-based-routing-with-react-router-code-splitting',
      permanent: true,
    },
  ],
}
