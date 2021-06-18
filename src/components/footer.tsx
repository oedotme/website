import { Link } from '@/elements'

const links = [
  { content: 'Blog', to: 'https://omarelhawary.me/blog' },
  { content: 'GitHub', to: 'https://github.com/oedotme' },
  { content: 'Twitter', to: 'https://twitter.com/oedotme' },
  { content: 'LinkedIn', to: 'https://linkedin.com/in/oedotme' },
  { content: 'Resume', to: 'https://omarelhawary.me/files/omar-elhawary-resume.pdf' },
]

export const Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-col-reverse items-center gap-16 font-medium md:flex-row md:gap-28">
      <span className="opacity-25">&copy; 2021 Omar Elhawary</span>

      <ul className="flex gap-9 flex-wrap justify-center">
        {links.map(({ content, to }) => (
          <li key={content}>
            <Link to={to}>{content}</Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
