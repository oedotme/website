import fs from 'fs/promises'
import { bundleMDX } from 'mdx-bundler'
import prism from 'rehype-prism-plus'

export type Post = {
  title: string
  description: string
  tags: string[]
  image: string
  coauthored: boolean
  date: string
  slug: string
}

export const getPostsMeta = async () => {
  const path = `${process.cwd()}/content/posts`
  const files = await fs.readdir(path)

  const posts = (
    await Promise.all(
      files.map(async (file) => {
        const slug = `/blog/${file.replace('.mdx', '')}`
        const source = await fs.readFile(`${path}/${file}`, 'utf8')
        const frontmatter = (await bundleMDX({ source })).frontmatter as Post
        return { ...frontmatter, slug }
      })
    )
  ).sort((a, b) => +new Date(b.date) - +new Date(a.date))

  const tags = [...new Set(posts.flatMap((post) => post.tags))].sort()

  return { posts, tags }
}

export const getPostBySlug = async (slug: string) => {
  const path = `${process.cwd()}/content/posts`
  const source = await fs.readFile(`${path}/${slug}.mdx`, 'utf8')
  const image = `/images/posts/${slug}.png`

  const { frontmatter, code } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.rehypePlugins = [...(options.rehypePlugins ?? []), prism]
      return options
    },
  })
  const meta = { ...frontmatter, image, slug: `/blog/${slug}` } as Post

  return { meta, code }
}
