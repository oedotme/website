import { defineConfig } from 'vite'

export default defineConfig({
  assetsInclude: ['pdf'],
  resolve: { alias: { '@': '/src' } },
})
