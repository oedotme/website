import { useEffect, useState } from 'preact/hooks'
import { useLocation } from 'wouter-preact'

import { classNames } from '@/utils'

export const title = 'Blog | Omar Elhawary'
export const description = "Omar Elhawary's personal blog"

const posts = [
  { id: '1', title: 'First title', description: 'First description', updated: 'July 1, 2021', tags: ['web'] },
  { id: '2', title: 'Second title', description: 'Second description', updated: 'July 2, 2021', tags: ['linux'] },
  { id: '3', title: 'Third title', description: 'Third description', updated: 'July 3, 2021', tags: ['vim'] },
  {
    id: '4',
    title: 'Fourth title',
    description: 'Fourth description',
    updated: 'July 4, 2021',
    tags: ['linux', 'productivity'],
  },
]

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
            <li key={post.id} className="flex flex-col mt-10">
              <h3 className="font-semibold leading-loose text-xl max-w-6xl">{post.title}</h3>
              <span className="text-sm">{post.updated}</span>
              <p className="mt-2">{post.description}</p>
              <ul className="flex gap-3 mt-2">
                {post.tags.map((tag) => (
                  <li key={tag} className="bg-neutral font-medium text-default py-1 px-2 rounded-sm text-sm">
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <li className="mt-10">No posts found</li>
        )}
      </ul>
    </>
  )
}
