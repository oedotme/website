import { useState } from 'react'

import { Page } from '@/layouts'
import { classNames } from '@/utils'

const TAGS = [
  'animation',
  'astro',
  'bash',
  'cli',
  'config',
  'deno',
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
  'skypack',
  'snowpack',
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
        <ul className="flex flex-wrap justify-center content-start gap-3 my-6 mx-auto h-72 px-28">
          {tags.map((tag) => (
            <li key={tag} className="text-xs">
              <button
                className={classNames(
                  'border border-elevate font-medium py-1 px-2 rounded-sm hover:border-default',
                  active.includes(tag)
                    ? active[0] === tag
                      ? 'bg-default text-elevate'
                      : 'bg-elevate'
                    : 'bg-elevate text-default opacity-30'
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
            'absolute inset-0 -top-3 left-4 mx-auto h-[220px] w-[440px] pointer-events-none',
            frame && 'border border-default border-dashed'
          )}
        />

        <div className="text-center space-x-4">
          <button className="font-medium text-sm py-2 px-4" onClick={toggleFrame}>
            Toggle frame
          </button>

          <button className="font-medium text-sm py-2 px-4" onClick={shuffleTags}>
            Shuffle
          </button>
        </div>
      </section>
    </Page>
  )
}
