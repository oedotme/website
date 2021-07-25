const dev = process.env.NODE_ENV !== 'production'

export const env = {
  mode: {
    dev,
  },
  api: {
    url: dev ? 'http://localhost:4000/api' : 'https://omarelhawary.me/api',
  },
  web: {
    url: dev ? 'http://localhost:3000' : 'https://omarelhawary.me',
  },
}
