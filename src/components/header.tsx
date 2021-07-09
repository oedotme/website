import { useLocation } from 'wouter-preact'

import { Icons } from '@/config'
import { Link } from '@/elements'
import { classNames, theme } from '@/utils'

const links = [
  { content: 'Home', href: '/' },
  { content: 'Blog', href: '/blog' },
  { content: 'Uses', href: '/uses' },
]

export const Header = (): JSX.Element => {
  const [location] = useLocation()

  const toggleTheme = () => theme.set(['auto', 'light'].includes(theme.get() || '') ? 'dark' : 'light')

  return (
    <header>
      <nav className="flex justify-between">
        <ul className="flex flex-wrap gap-2 items-center font-medium text-base sm:gap-6">
          {links.map(({ content, href }) => (
            <li
              key={content}
              className={classNames(location === href ? 'opacity-100' : 'opacity-50', 'transition-opacity delay-75')}
            >
              <Link href={href} className="p-2">
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
