import { useEffect, useMemo, useState } from 'preact/hooks'
import { useLocation } from 'wouter-preact'

import { Link } from '@/elements'
import { classNames } from '@/utils'

export const title = 'Blog'
export const description = "Omar Elhawary's personal blog"

const files = import.meta.globEager('../pages/**/*.{md,mdx}')

const posts = Object.keys(files)
  .filter((file) => file.includes('/blog/'))
  .map((file) => {
    const path = file.replace(/\.\.\/pages|\.mdx?$/g, '')

    return {
      path,
      title: files[file]?.title as string,
      description: files[file]?.description as string,
      tags: files[file]?.tags as string[],
      date: files[file]?.date as string,
    }
  })
  .sort((a, b) => +new Date(b.date) - +new Date(a.date))

const tags = [...new Set(posts.flatMap((post) => post.tags))].sort()

const getQuery = () => (typeof window !== 'undefined' ? window.location.search : undefined)
const getTags = () => new URLSearchParams(getQuery()).get('tags')?.split(',') || []

export default function Blog(): JSX.Element {
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
  const handleClick = (tag: string) => {
    active.includes(tag)
      ? (setActive((values) => values.filter((value) => value !== tag)), setMounted(true))
      : (setActive((values) => [...values, tag]), setMounted(true))
  }

  const filteredPosts = useMemo(
    () =>
      posts
        .filter((post) => !active.length || active.every((tag) => post.tags.includes(tag)))
        .filter((post) => JSON.stringify(post).toLowerCase().includes(input.toLowerCase())),
    [active, input]
  )

  return (
    <>
      <h1 className="font-extrabold mb-10 text-4xl">All Posts</h1>

      <input
        className="bg-neutral border border-elevate p-2 placeholder-comment outline-none rounded w-full focus:border-default"
        type="text"
        placeholder="Search posts..."
        value={input}
        onInput={handleInput}
      />

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
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
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
