import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import solid from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import prism from 'rehype-prism-plus'

export default defineConfig({
  site: 'https://omarelhawary.me',
  vite: { resolve: { alias: { '@': '/src' } } },
  markdown: { syntaxHighlight: false, rehypePlugins: [prism] },
  prefetch: { prefetchAll: true },
  integrations: [mdx(), sitemap(), solid(), tailwind()],
})
