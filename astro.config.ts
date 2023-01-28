import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import prefetch from '@astrojs/prefetch'
import sitemap from '@astrojs/sitemap'
import solid from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import prism from 'rehype-prism-plus'

export default defineConfig({
  site: 'https://omarelhawary.me',
  vite: { resolve: { alias: { '@': '/src' } } },
  integrations: [mdx({ syntaxHighlight: 'prism', rehypePlugins: [prism] }), prefetch(), sitemap(), solid(), tailwind()],
})
