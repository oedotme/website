import { useEffect, useMemo, useState } from 'preact/hooks'
import { useLocation } from 'wouter-preact'

import { Link } from '@/elements'
import { classNames } from '@/utils'

export const title = 'Blog'
export const description = "Omar Elhawary's personal blog"

const getQuery = () => (typeof window !== 'undefined' ? window.location.search : undefined)
const getTags = () => new URLSearchParams(getQuery()).get('tags')?.split(',') || []

type Post = { path: string; title: string; description: string; tags: string[]; date: string }

type Props = {
  posts?: Post[]
  titles?: Record<string, number[]>
  tags?: string[]
}

export default function Blog({ posts, tags }: Props): JSX.Element {
  const [mounted, setMounted] = useState(false)
  const [input, setInput] = useState('')
  const [active, setActive] = useState<string[]>(getQuery() === '?tags=' ? [] : getTags())
  const [, setLocation] = useLocation()

  useEffect(() => {
    if (mounted) {
      if (active.length > 0) setLocation(`/blog?tags=${active.join(',')}`, { replace: true })
      else setLocation('/blog', { replace: true })
    }
  }, [mounted, active, setLocation])

  const handleInput = (event: Event) => setInput((event.target as HTMLInputElement).value)
  const handleSubmit = (event: Event) => {
    event.preventDefault()
    const input = (event.target as HTMLFormElement)?.firstChild as HTMLInputElement
    input?.blur()
  }
  const handleClick = (tag: string) => {
    active.includes(tag)
      ? (setActive((values) => values.filter((value) => value !== tag)), setMounted(true))
      : (setActive((values) => [...values, tag]), setMounted(true))
  }

  const filteredPosts = useMemo(
    () =>
      posts
        ?.filter((post) => !active.length || active.every((tag) => post.tags.includes(tag)))
        .filter((post) => JSON.stringify(post).toLowerCase().includes(input.toLowerCase())),
    [posts, active, input]
  )

  return (
    <>
      <h1 className="font-extrabold mb-10 text-4xl">All Posts</h1>

      <form className="relative" onSubmit={handleSubmit}>
        <input
          className="bg-neutral border border-elevate p-2 placeholder-comment outline-none rounded w-full focus:border-default"
          type="text"
          placeholder="Search posts..."
          value={input}
          onInput={handleInput}
        />
        <span className="absolute top-1 right-2 bg-neutral py-1 px-2 text-comment">{filteredPosts?.length}</span>
      </form>

      <ul className="flex gap-3 my-6">
        {tags?.map((tag) => (
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
        {filteredPosts?.length ? (
          filteredPosts?.map((post) => (
            <li key={post.path} className="flex flex-col mt-10">
              <Link href={post.path}>
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
