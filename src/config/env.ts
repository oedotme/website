const dev = import.meta.env.DEV

export const env = {
  api: {
    url: dev ? 'http://localhost:4000/api' : 'https://omarelhawary.me/api',
  },
  web: {
    url: dev ? 'http://localhost:3000' : 'https://omarelhawary.me',
  },
}
