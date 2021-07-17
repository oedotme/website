import { Link } from '@/elements'

const links = [
  { content: 'Email', href: 'mailto:oedotme@gmail.com' },
  { content: 'Resume', href: 'https://omarelhawary.me/files/omar-elhawary-resume.pdf' },
  { content: 'GitHub', href: 'https://github.com/oedotme' },
  { content: 'Twitter', href: 'https://twitter.com/oedotme' },
  { content: 'LinkedIn', href: 'https://linkedin.com/in/oedotme' },
]

export const Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-col-reverse items-center justify-between gap-8 p-2 text-sm md:flex-row md:gap-32">
      <span className="text-comment opacity-50">&copy; 2021 Omar Elhawary</span>

      <nav>
        <ul className="flex flex-wrap gap-4 justify-center sm:gap-10">
          {links.map(({ content, href }) => (
            <li key={content}>
              <Link href={href}>{content}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
