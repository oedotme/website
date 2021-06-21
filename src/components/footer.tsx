import { Link } from '@/elements'

const links = [
  { content: 'Email', to: 'mailto:oedotme@gmail.com' },
  { content: 'Resume', to: 'https://omarelhawary.me/files/omar-elhawary-resume.pdf' },
  { content: 'GitHub', to: 'https://github.com/oedotme' },
  { content: 'Twitter', to: 'https://twitter.com/oedotme' },
  { content: 'LinkedIn', to: 'https://linkedin.com/in/oedotme' },
]

export const Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-col-reverse items-center gap-16 text-sm md:flex-row md:gap-32">
      <span className="opacity-25">&copy; 2021 Omar Elhawary</span>

      <ul className="flex flex-wrap gap-10 justify-center">
        {links.map(({ content, to }) => (
          <li key={content}>
            <Link to={to}>{content}</Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}
