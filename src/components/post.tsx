import { Tags } from '@/components'
import { env } from '@/config'
import { H1, Link } from '@/elements'

type Post = { path: string; title: string; tags: string[]; date: string }

type Props = {
  children: Children
  posts: Post[]
  titles: Record<string, number[]>
}

export const Post = ({ children, posts, titles, title, tags, date }: Props & Post): JSX.Element => {
  const [prev = -1, current = 0, next = -1] = titles?.[title]

  return (
    <>
      <section className="mb-16">
        <H1>{title}</H1>
        <span className="text-sm">{date}</span>
        <Tags tags={tags} />
      </section>

      {children}

      <section className="my-8 text-sm">
        <div className="flex justify-center gap-4 my-8 sm:justify-end sm:gap-6">
          <Link
            href={
              `https://twitter.com/intent/tweet` +
              `?text=${posts[current].title}` +
              `&url=${env.web.url + posts[current].path}` +
              `&via=oedotme` +
              `&hashtags=${tags.join(',')}`
            }
          >
            Share on Twitter
          </Link>

          <Link href={`https://twitter.com/search?q=${env.web.url + posts[current].path}`}>Discuss on Twitter</Link>
        </div>

        <div className="flex gap-4 text-sm my-4">
          {prev <= posts.length - 1 && (
            <Link
              className="font-medium rounded-sm truncate py-2 w-40"
              href={posts[prev].path}
              title={posts[prev].title}
            >
              &larr;&ensp; Previous post
            </Link>
          )}

          {next >= 0 && posts.length > 0 && (
            <Link
              className="font-medium rounded-sm truncate py-2 w-40 text-right ml-auto"
              href={posts[next].path}
              title={posts[next].title}
            >
              Next post &ensp;&rarr;
            </Link>
          )}
        </div>
      </section>
    </>
  )
}
