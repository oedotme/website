import { Head } from '@/components'
import { H1, H2, Link, List, ListItem } from '@/elements'

const title = 'Projects'
const description = 'Personal and open source projects'

const content = {
  personal: [['Outline', 'Video/Chat web application', 'https://outlineapp.netlify.app']],
  opensource: [
    ['Render', 'Opinionated React template', 'https://github.com/oedotme/render'],
    ['ST', 'Fork of st - simple terminal emulator', 'https://github.com/oedotme/st'],
  ],
}

export default function Projects() {
  return (
    <>
      <Head title={title} description={description} />

      <H1>Projects</H1>

      <H2>Personal</H2>
      <List className="list-none">
        {content.personal.map(([name, description, link]) => (
          <ListItem key={name}>
            <Link href={link}>{name}</Link> - {description}
          </ListItem>
        ))}
      </List>

      <H2>Open source</H2>
      <List className="list-none">
        {content.opensource.map(([name, description, link]) => (
          <ListItem key={name}>
            <Link href={link}>{name}</Link> - {description}
          </ListItem>
        ))}
      </List>
    </>
  )
}
