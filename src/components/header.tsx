import { Image } from '@/elements'
import { Link } from 'wouter-preact'

export const Header = (): JSX.Element => {
  return (
    <header>
      <nav className="flex justify-between items-center">
        <Link to="/">
          <a className="" href="/">
            <Image
              className="h-14 w-72"
              height="56"
              width="288"
              src="/assets/icons/logo.svg"
              alt="Omar Elhawary"
              title="Omar Elhawary"
            />
          </a>
        </Link>

        <button>
          <Image className="h-6 w-6" height="24" width="24" src="/assets/icons/theme.svg" alt="theme" title="Theme" />
        </button>
      </nav>
    </header>
  )
}
