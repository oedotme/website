import { constants } from '@/config'
import { Link } from '@/elements'

export const Footer = () => {
  return (
    <footer className="flex flex-col-reverse items-center justify-between gap-8 p-2 text-sm md:flex-row md:gap-32">
      <span className="text-default opacity-70">&copy; 2022 Omar Elhawary</span>

      <nav>
        <ul className="flex flex-wrap gap-4 justify-center sm:gap-8">
          {constants.links.external.map(({ name, link }) => (
            <li key={name}>
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
