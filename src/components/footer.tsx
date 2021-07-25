import { Link } from '@/elements'

const content = [
  ['Email', 'mailto:oedotme@gmail.com'],
  ['Resume', 'https://omarelhawary.me/files/omar-elhawary-resume.pdf'],
  ['GitHub', 'https://github.com/oedotme'],
  ['Twitter', 'https://twitter.com/oedotme'],
  ['LinkedIn', 'https://linkedin.com/in/oedotme'],
]

export const Footer = () => {
  return (
    <footer className="flex flex-col-reverse items-center justify-between gap-8 p-2 text-sm md:flex-row md:gap-32">
      <span className="text-comment opacity-50">&copy; 2021 Omar Elhawary</span>

      <nav>
        <ul className="flex flex-wrap gap-4 justify-center sm:gap-8">
          {content.map(([name, link]) => (
            <li key={name}>
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
