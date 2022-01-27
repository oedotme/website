import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { Tags } from '@/components'
import { H1, H2, Link, List, ListItem, Text } from '@/elements'
import { Page } from '@/layouts'
import { getPostsMeta, Post } from '@/lib'
import { classNames } from '@/utils'

const title = 'Blog'
const description = 'Writing about web development, tooling, linux and developer productivity'
const keywords = 'blog, web, development, tooling, linux, productivity'

type Props = {
  posts: Post[]
  tags: string[]
}

export default function Blog({ posts = [], tags = [] }: Props) {
  const ref = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const [input, setInput] = useState('')
  const [active, setActive] = useState<string[]>((router.query?.tags as string)?.split(',') || [])

  useEffect(() => {
    if (router.query?.tags) setActive((router.query?.tags as string)?.split(',') || [])
  }, [router.query])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)
  const handleSubmit = (event: React.FormEvent) => (event.preventDefault(), ref.current?.blur())
  const handleClick = (tag: string) => {
    active.includes(tag)
      ? setActive((values) => values.filter((value) => value !== tag))
      : setActive((values) => [...values, tag])
  }

  const filteredPosts = useMemo(
    () =>
      posts
        .filter((post) => !active.length || active.every((tag) => post.tags.includes(tag)))
        .filter((post) =>
          input.split(/\s+/).every((word) => JSON.stringify(post).toLowerCase().includes(word.toLowerCase()))
        ),

    [posts, active, input]
  )

  return (
    <Page title={title} description={description} keywords={keywords}>
      <H1>Blog</H1>
      <Text className="opacity-70">{description}</Text>

      <form className="relative mt-8" onSubmit={handleSubmit}>
        <input
          className="w-full rounded border border-elevate bg-neutral p-3 text-sm outline-none focus:border-default"
          type="text"
          placeholder="Search posts"
          value={input}
          onChange={handleChange}
          ref={ref}
        />
        <span
          className={classNames(
            'absolute top-2 right-2 bg-neutral py-1 px-2',
            input.length || active.length ? 'text-comment' : 'text-neutral'
          )}
        >
          {filteredPosts.length}
        </span>
      </form>

      <List className="my-6 mb-16 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <ListItem key={tag} className="text-sm">
            <button
              className={classNames(
                'rounded-sm border border-elevate py-1 px-2 font-medium hover:border-default',
                active.includes(tag) ? 'bg-default text-elevate' : 'bg-elevate text-default'
              )}
              onClick={() => handleClick(tag)}
            >
              {tag}
            </button>
          </ListItem>
        ))}
      </List>

      <H2>Posts</H2>

      <List className="mb-16">
        {filteredPosts.length ? (
          filteredPosts.map((post, index) => (
            <ListItem key={post.slug} className={classNames('flex flex-col', index !== 0 ? 'mt-12' : 'mt-8')}>
              <Link href={post.slug}>
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <span className="mt-1 block text-sm opacity-70">{post.date}</span>
                <p className="mt-2">{post.description}</p>
              </Link>
              <Tags tags={post.tags} />
            </ListItem>
          ))
        ) : (
          <ListItem className="mt-7">
            <Text className="opacity-70">No posts found</Text>
          </ListItem>
        )}
      </List>
    </Page>
  )
}

export const getStaticProps = async () => {
  const { posts, tags } = await getPostsMeta()

  return { props: { posts, tags } }
}
