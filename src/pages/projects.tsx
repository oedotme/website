import { Head } from '@/components'
import { H1, H2, Link, List, ListItem } from '@/elements'

const title = 'Projects'
const description = 'Personal and open source projects'

const content = [
  ['Outline', 'Video/Chat web application', 'https://outlineapp.netlify.app'],
  ['Render', 'Opinionated React template', 'https://github.com/oedotme/render'],
  ['Simple terminal', 'Fork of st - simple terminal', 'https://github.com/oedotme/st'],
]

export default function Projects() {
  return (
    <>
      <Head title={title} description={description} />

      <H1>Projects</H1>

      <H2>Personal</H2>
      <List className="list-none">
        {content.map(([name, description, link]) => (
          <ListItem key={name}>
            <Link href={link}>{name}</Link> - {description}
          </ListItem>
        ))}
      </List>
    </>
  )
}
