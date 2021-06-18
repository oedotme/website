import { Link } from '@/elements'

export const Header = (): JSX.Element => {
  return (
    <header>
      <nav className="flex gap-6 items-center">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  )
}
