import { Icons } from '@/config'
import { Link } from '@/elements'
import { theme } from '@/utils'

const links = [
  { content: 'Home', href: '/' },
  { content: 'Blog', href: '/blog' },
  { content: 'Uses', href: '/uses' },
]

export const Header = (): JSX.Element => {
  const toggleTheme = () => theme.set(['auto', 'light'].includes(theme.get() || '') ? 'dark' : 'light')

  return (
    <header>
      <nav className="flex justify-between">
        <ul className="flex flex-wrap gap-2 items-center font-medium text-base sm:gap-6">
          {links.map(({ content, href }) => (
            <li key={content}>
              <Link href={href} className="p-2">
                {content}
              </Link>
            </li>
          ))}
        </ul>

        <button className="mx-1" onClick={toggleTheme}>
          <Icons.Theme />
        </button>
      </nav>
    </header>
  )
}
