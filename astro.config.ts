import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import prefetch from '@astrojs/prefetch'
import sitemap from '@astrojs/sitemap'
import solid from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import prism from 'rehype-prism-plus'
import { visit } from 'unist-util-visit'

const meta = () => {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.type === 'element' && node.tagName === 'code' && node.properties?.metastring) {
        node.data ??= {}
        node.data.meta = node.properties.metastring
      }
    })
  }
}

export default defineConfig({
  site: 'https://omarelhawary.me',
  vite: { resolve: { alias: { '@': '/src' } } },
  markdown: { syntaxHighlight: false, rehypePlugins: [meta, prism] },
  integrations: [mdx(), prefetch(), sitemap(), solid(), tailwind()],
})
