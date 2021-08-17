import { H1, H2, Link, List, ListItem, Text } from '@/elements'
import { Page } from '@/layouts'

const title = 'Projects'
const description = 'List of some personal projects and tools.'

const content = [
  [
    'Outline',
    'Video/Chat web application',
    'https://outlineapp.netlify.app',
    ['TypeScript', 'React', 'Node.js', 'GraphQL', 'WebRTC'],
  ],
  [
    'Render',
    'Opinionated React template',
    'https://github.com/oedotme/render',
    ['TypeScript', 'React', 'React Router', 'Tailwind', 'Vite'],
  ],
  ['Simple terminal', 'Fork of st - simple terminal', 'https://github.com/oedotme/st', ['C']],
] as const

export default function Projects() {
  return (
    <Page title={title} description={description}>
      <H1>Projects</H1>
      <Text className="opacity-60">{description}</Text>

      <H2>Personal</H2>
      <List className="list-none">
        {content.map(([name, description, link, tech]) => (
          <ListItem key={name}>
            <Link href={link}>{name}</Link> — <span>{description}&ensp;</span>
            <Text className="text-sm inline leading-relaxed opacity-60">{tech?.join(', ')}</Text>
          </ListItem>
        ))}
      </List>
    </Page>
  )
}
