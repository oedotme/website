import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import { MDXComponents, Tags } from '@/components'
import { constants } from '@/config'
import { H1, Link } from '@/elements'
import { Page } from '@/layouts'
import { getPostBySlug, getPostsMeta, Post } from '@/lib'

const keywords = 'blog, post'

type Props = {
  post: {
    meta: Post
    code: string
    position: [Post, Post]
  }
}

export default function BlogPost({ post: { meta, code, position } }: Props) {
  const [prev, next] = position

  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <Page
      title={meta.title}
      description={meta.description}
      keywords={keywords + ', ' + meta.tags.join(', ')}
      image={meta.image}
      type="article"
      date={meta.date}
    >
      <H1>{meta.title}</H1>
      <span className="text-sm opacity-70">{meta.date}</span>
      <Tags tags={meta.tags} />

      <hr className="border-0 h-16" />

      <Component components={MDXComponents} />

      <hr className="border-0 h-4" />

      <section className="my-8 text-sm">
        <div className="flex justify-center gap-4 my-8 sm:justify-end sm:gap-6">
          <Link
            href={
              `https://twitter.com/intent/tweet` +
              `?text=${meta.title} — ${meta.description}` +
              `&url=${constants.profile.url + meta.slug}` +
              `&via=oedotme` +
              `&hashtags=${meta.tags.join(',')}`
            }
          >
            Share on Twitter
          </Link>

          <Link href={`https://twitter.com/search?q=${constants.profile.url + meta.slug}&src=typed_query`}>
            Discuss on Twitter
          </Link>
        </div>

        <div className="flex gap-8 my-4 text-sm">
          {prev && (
            <Link className="font-medium rounded-sm flex w-1/2 py-2 text-left truncate mr-auto" href={prev.slug}>
              <span className="mr-2">{'<--'}</span>
              <span className="flex-1 truncate">{prev.title}</span>
            </Link>
          )}

          {next && (
            <Link className="font-medium rounded-sm flex w-1/2 py-2 text-right truncate ml-auto" href={next.slug}>
              <span className="flex-1 truncate">{next.title}</span>
              <span className="ml-2">{'-->'}</span>
            </Link>
          )}
        </div>
      </section>
    </Page>
  )
}

export const getStaticPaths = async () => {
  const { posts } = await getPostsMeta()
  const paths = posts.map((post) => post.slug)

  return { paths, fallback: false }
}

export const getStaticProps = async (context: { params: { slug: string } }) => {
  const slug = context.params?.slug
  const { meta, code } = await getPostBySlug(slug)
  const { posts } = await getPostsMeta()

  const index = posts.map((post) => post.slug).indexOf(meta.slug)
  const position = [posts?.[index + 1] || null, posts?.[index - 1] || null]

  return { props: { post: { meta, code, position } } }
}
