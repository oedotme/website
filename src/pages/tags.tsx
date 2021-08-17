import { useState } from 'react'

import { Page } from '@/layouts'
import { classNames } from '@/utils'

const TAGS = [
  'cli',
  'docker',
  'fzf',
  'git',
  'graphql',
  'linux',
  'mongodb',
  'neovim',
  'node',
  'npm',
  'productivity',
  'react',
  'rescript',
  'tailwind',
  'typescript',
  'vite',
  'webrtc',
]

const shuffle = (list: string[]) => list.sort(() => 0.5 - Math.random())

const tags = [
  ...shuffle(TAGS),
  ...shuffle(TAGS),
  ...shuffle(TAGS),
  ...shuffle(TAGS),
  ...shuffle(TAGS),
  ...shuffle(TAGS),
  ...shuffle(TAGS),
]

export default function Tags() {
  const [active, setActive] = useState<string[]>([])

  const handleClick = (tag: string) => {
    active.includes(tag)
      ? setActive((values) => values.filter((value) => value !== tag))
      : setActive((values) => [...values, tag])
  }

  return (
    <Page title="Tags">
      <ul className="flex flex-wrap justify-center gap-3 my-6">
        {tags.map((tag, index) => (
          <li key={`${tag}/${index}`} className="text-sm">
            <button
              className={classNames(
                'border border-elevate font-medium py-1 px-2 rounded-sm hover:border-default',
                active.includes(`${tag}/${index}`)
                  ? active[0] === `${tag}/${index}`
                    ? 'bg-default text-elevate'
                    : 'bg-elevate border-default'
                  : 'bg-elevate text-default'
              )}
              onClick={() => handleClick(`${tag}/${index}`)}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </Page>
  )
}
