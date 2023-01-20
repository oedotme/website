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
      <p className="mb-4">{meta.description}</p>

      <Tags tags={meta.tags} />

      <div className="mt-5 text-sm">
        {meta.coauthored ? (
          <>
            <span className="opacity-70">Written with</span> <Link href="https://marianmolina.com"> Marian Molina</Link>
            <span className="mx-1"> — </span>
          </>
        ) : null}
        <span className="opacity-70">{meta.date}</span>
      </div>

      <hr className="h-16 border-0" />

      <Component components={MDXComponents} />

      <hr className="h-4 border-0" />

      <section className="my-8 text-sm">
        <div className="my-8 flex justify-center gap-4 sm:justify-end sm:gap-6">
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

        <div className="my-4 flex gap-8 text-sm">
          {prev && (
            <Link className="mr-auto flex w-1/2 truncate rounded-sm py-2 text-left font-medium" href={prev.slug}>
              <span className="mr-2">←</span>
              <span className="flex-1 truncate">{prev.title}</span>
            </Link>
          )}

          {next && (
            <Link className="ml-auto flex w-1/2 truncate rounded-sm py-2 text-right font-medium" href={next.slug}>
              <span className="flex-1 truncate">{next.title}</span>
              <span className="ml-2">→</span>
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
