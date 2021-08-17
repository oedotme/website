import { ThemeToggle } from '@/components'
import { constants } from '@/config'
import { Link } from '@/elements'
import { theme } from '@/utils'

export const Header = () => {
  const toggleTheme = () => theme.set(theme.get() === 'light' ? 'dark' : 'light')

  return (
    <header>
      <nav className="flex justify-between">
        <ul className="flex flex-wrap gap-2 items-center font-medium text-base sm:gap-6">
          {constants.links.internal.map(({ name, link }) => (
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
