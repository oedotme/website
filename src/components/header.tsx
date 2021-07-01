import { useLocation } from 'wouter-preact'

import { Icons } from '@/config'
import { Link } from '@/elements'
import { classNames, theme } from '@/utils'

const links = [
  { content: 'Home', to: '/' },
  { content: 'Blog', to: '/blog' },
  { content: 'Uses', to: '/uses' },
]

export const Header = (): JSX.Element => {
  const [location] = useLocation()

  const toggleTheme = () => theme.set(['auto', 'light'].includes(theme.get() || '') ? 'dark' : 'light')

  return (
    <header>
      <nav className="flex justify-between">
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

        <button className="outline-none focus:ring-1 ring-default" onClick={toggleTheme}>
          <Icons.Theme />
        </button>
      </nav>
    </header>
  )
}
