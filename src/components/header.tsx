import { useLocation } from 'wouter-preact'

import { Link } from '@/elements'
import { classNames } from '@/utils'

const links = [
  { content: 'Home', to: '/' },
  { content: 'Projects', to: '/projects' },
  { content: 'Blog', to: '/blog' },
]

export const Header = (): JSX.Element => {
  const [location] = useLocation()

  return (
    <header>
      <nav>
        <ul className="flex flex-wrap gap-6 items-center font-medium text-base sm:gap-8">
          {links.map(({ content, to }) => (
            <li key={content}>
              <Link
                href={to}
                className={classNames(location === to ? 'opacity-100' : 'opacity-50', 'transition-opacity delay-75')}
              >
                {content}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
