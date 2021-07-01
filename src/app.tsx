import '@/styles'
import { Container, MDX } from '@/components'
import { Routes } from '@/config'
import { theme } from '@/utils'

theme.load()

export function App(): JSX.Element {
  return (
    <Container>
      <MDX>
        <Routes />
      </MDX>
    </Container>
  )
}
