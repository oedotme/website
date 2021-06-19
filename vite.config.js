import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import mdx from 'vite-plugin-mdx'
import frontmatter from 'remark-frontmatter'
import { remarkMdxFrontmatter as mdxfrontmatter } from 'remark-mdx-frontmatter'
import prism from '@mapbox/rehype-prism'

export default defineConfig({
  plugins: [preact(), mdx({ remarkPlugins: [frontmatter, mdxfrontmatter], rehypePlugins: [prism] })],
  resolve: { alias: { '@': '/src' } },
})
