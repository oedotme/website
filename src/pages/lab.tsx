import { Head } from '@/components'
import { H1, H2, Link, List, ListItem } from '@/elements'

const title = 'Lab'
const description = 'Projects, open source and other links'

const content = [
  ['Outline', 'Video/Chat web application', 'https://outlineapp.netlify.app'],
  ['Render', 'Opinionated React template', 'https://github.com/oedotme/render'],
]

export default function Lab() {
  return (
    <>
      <Head title={title} description={description} />

      <H1>Lab</H1>

      <H2>Links</H2>
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
