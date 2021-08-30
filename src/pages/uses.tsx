import { constants } from '@/config'
import { H1, H2, Link, List, ListItem, Text } from '@/elements'
import { Page } from '@/layouts'

const title = 'Uses'
const description = "Tools I'm using for software development"

export default function Uses() {
  return (
    <Page title={title} description={description}>
      <H1>Uses</H1>
      <Text className="opacity-70">{description}</Text>

      <H2>Environment</H2>
      <List className="list-none">
        {constants.uses.environment.map(({ name, description, link }) => (
          <ListItem key={name}>
            <Link href={link}>{name}</Link> — {description}
          </ListItem>
        ))}
      </List>

      <H2>CLI</H2>
      <List className="list-none">
        {constants.uses.cli.map(({ name, description, link }) => (
          <ListItem key={name}>
            <Link href={link}>{name}</Link> — {description}
          </ListItem>
        ))}
      </List>
    </Page>
  )
}
