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
    <footer className="flex flex-col-reverse items-center justify-between gap-8 p-2 text-sm md:flex-row md:gap-32">
      <span className="opacity-25">&copy; 2021 Omar Elhawary</span>

      <nav>
        <ul className="flex flex-wrap gap-4 justify-center sm:gap-10">
          {links.map(({ content, to }) => (
            <li key={content}>
              <Link href={to}>{content}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
