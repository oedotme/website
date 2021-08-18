import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import { MDXComponents, Tags } from '@/components'
import { constants } from '@/config'
import { H1, Link } from '@/elements'
import { Page } from '@/layouts'
import { getPostBySlug, getPostsMeta, Post } from '@/lib'

type Props = {
  post: {
    meta: Post
    code: string
    position: [string, string]
  }
}

export default function BlogPost({ post: { meta, code, position } }: Props) {
  const [prev, next] = position

  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <Page title={meta.title} description={meta.description} image={meta.image} type="article" date={meta.date}>
      <H1>{meta.title}</H1>
      <span className="text-sm">{meta.date}</span>
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

          <Link href={`https://twitter.com/search?q=${constants.profile.url + meta.slug}`}>Discuss on Twitter</Link>
        </div>

        <div className="flex gap-4 my-4 text-sm">
          {prev && (
            <Link className="font-medium rounded-sm truncate py-2 w-40 text-left mr-auto" href={prev}>
              <span className="mr-2">{'<—'}</span> Previous post
            </Link>
          )}

          {next && (
            <Link className="font-medium rounded-sm truncate py-2 w-40 text-right ml-auto" href={next}>
              Next post <span className="ml-2">{'—>'}</span>
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
  const position = [posts[index + 1]?.slug || null, posts[index - 1]?.slug || null]

  return { props: { post: { meta, code, position } } }
}
