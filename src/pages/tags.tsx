import { useState } from 'react'

import { Page } from '@/layouts'
import { classNames } from '@/utils'

const TAGS = [
  'astro',
  'bash',
  'cli',
  'docker',
  'dotfiles',
  'expo',
  'fish',
  'framer-motion',
  'fzf',
  'git',
  'graphql',
  'javascript',
  'jest',
  'linux',
  'mongodb',
  'neovim',
  'next',
  'node',
  'npm',
  'plugin',
  'productivity',
  'react',
  'react-native',
  'react-query',
  'react-router',
  'redis',
  'redux',
  'rescript',
  'script',
  'storybook',
  'tailwind',
  'tmux',
  'tools',
  'typescript',
  'vifm',
  'vite',
  'webpack',
  'webrtc',
]

const shuffle = (list: string[]) => list.sort(() => 0.5 - Math.random())

export default function Tags() {
  const [tags, setTags] = useState(TAGS)
  const [active, setActive] = useState<string[]>([])
  const [frame, setFrame] = useState(false)

  const toggleFrame = () => setFrame((value) => !value)
  const shuffleTags = () => setTags((value) => [...shuffle(value)])
  const handleClick = (tag: string) => {
    active.includes(tag)
      ? setActive((values) => values.filter((value) => value !== tag))
      : setActive((values) => [...values, tag])
  }

  return (
    <Page title="Tags">
      <section className="relative">
        <ul className="my-6 mx-auto flex h-72 flex-wrap content-start justify-center gap-3 px-28">
          {tags.map((tag) => (
            <li key={tag} className="text-sm">
              <button
                className={classNames(
                  'rounded-sm border border-elevate py-1 px-2 font-medium hover:border-default',
                  active.includes(tag)
                    ? active[0] === tag
                      ? 'bg-default text-elevate'
                      : 'border-default bg-elevate'
                    : 'bg-elevate text-default opacity-50'
                )}
                onClick={() => handleClick(tag)}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>

        <div
          className={classNames(
            'pointer-events-none absolute inset-0 -top-3 left-4 mx-auto h-[220px] w-[440px]',
            frame && 'border border-dashed border-default'
          )}
        />

        <div className="space-x-4 text-center">
          <button className="py-2 px-4 text-sm font-medium" onClick={toggleFrame}>
            Toggle frame
          </button>

          <button className="py-2 px-4 text-sm font-medium" onClick={shuffleTags}>
            Shuffle
          </button>
        </div>
      </section>
    </Page>
  )
}
