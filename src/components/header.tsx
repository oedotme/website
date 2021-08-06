import { ThemeToggle } from '@/components'
import { Link } from '@/elements'
import { theme } from '@/utils'

const content = [
  ['Home', '/'],
  ['Blog', '/blog'],
  ['Uses', '/uses'],
]

export const Header = () => {
  const toggleTheme = () => theme.set(theme.get() === 'light' ? 'dark' : 'light')

  return (
    <header>
      <nav className="flex justify-between">
        <ul className="flex flex-wrap gap-2 items-center font-medium text-base sm:gap-6">
          {content.map(([name, link]) => (
            <li key={name}>
              <Link href={link} className="p-2">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <button aria-label="Toggle Theme" className="mx-1" onClick={toggleTheme}>
          <ThemeToggle />
        </button>
      </nav>
    </header>
  )
}
