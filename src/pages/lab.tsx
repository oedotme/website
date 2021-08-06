import { Head } from '@/components'
import { H1, H2, Link, List, ListItem } from '@/elements'

const content = [
  ['Outline', 'Video/Chat web application', 'https://outlineapp.netlify.app'],
  ['Render', 'Opinionated React template', 'https://github.com/oedotme/render'],
]

export default function Lab() {
  return (
    <>
      <Head title="Lab" description="Omar Elhawary's software development lab" />

      <H1>Lab</H1>

      <H2>Links</H2>
      <List>
        {content.map(([name, description, link]) => (
          <ListItem key={name}>
            <Link href={link}>{name}</Link> - {description}
          </ListItem>
        ))}
      </List>
    </>
  )
}
