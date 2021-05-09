import { defineConfig } from 'vite'

export default defineConfig({
  assetsInclude: ['pdf'],
  base: process.env.NODE_ENV === 'production' ? '/website/' : '/',
  resolve: { alias: { '@': '/src' } },
})
