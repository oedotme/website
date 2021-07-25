import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { Head } from '@/components'
import { Link } from '@/elements'
import { getPostsMeta, Post } from '@/lib'
import { classNames } from '@/utils'

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
        .filter((post) => JSON.stringify(post).toLowerCase().includes(input.toLowerCase())),
    [posts, active, input]
  )

  return (
    <>
      <Head title="Blog" description="Omar Elhawary's personal blog" />

      <h1 className="font-extrabold mb-10 text-4xl">All Posts</h1>

      <form className="relative" onSubmit={handleSubmit}>
        <input
          className="bg-neutral border border-elevate p-2 placeholder-comment outline-none rounded w-full focus:border-default"
          type="text"
          placeholder="Search posts..."
          value={input}
          onChange={handleChange}
          ref={ref}
        />
        <span className="absolute top-1 right-2 bg-neutral py-1 px-2 text-comment">{filteredPosts?.length}</span>
      </form>

      <ul className="flex gap-3 my-6">
        {tags.map((tag) => (
          <li key={tag} className="text-sm">
            <button
              className={classNames(
                'border border-elevate font-medium py-1 px-2 rounded-sm',
                active.includes(tag)
                  ? 'bg-default border-default text-elevate'
                  : 'bg-elevate text-default hover:border-default'
              )}
              onClick={() => handleClick(tag)}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>

      <ul className="mt-20 mb-16">
        {filteredPosts.length ? (
          filteredPosts.map((post) => (
            <li key={post.slug} className="flex flex-col mt-10">
              <Link href={post.slug}>
                <h3 className="font-semibold leading-loose text-xl max-w-6xl">{post.title}</h3>
                <span className="text-sm">{post.date}</span>
                <p className="mt-2">{post.description}</p>
              </Link>
            </li>
          ))
        ) : (
          <li className="mt-10">No posts found</li>
        )}
      </ul>
    </>
  )
}

export const getStaticProps = async () => {
  const { posts, tags } = await getPostsMeta()

  return { props: { posts, tags } }
}
