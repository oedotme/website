import { useEffect, useState } from 'preact/hooks'
import { useLocation } from 'wouter-preact'

import { Tags } from '@/components'
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

  const filteredPosts = posts
    .filter((post) => !active.length || active.every((tag) => post.tags.includes(tag)))
    .filter((post) => JSON.stringify(post).toLowerCase().includes(input.toLowerCase()))

  return (
    <>
      <h1 className="font-extrabold mb-10 text-4xl">All Posts</h1>

      <input
        className="p-2 border-2 border-neutral focus:border-default outline-none w-full rounded bg-surface"
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
                'font-medium',
                active.includes(tag) ? 'bg-default text-neutral' : 'bg-neutral text-default',
                'py-1 px-2 rounded-sm'
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
                <Tags tags={post.tags} />
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
