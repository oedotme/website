import '@/styles'
import { Container, MDX } from '@/components'
import { Routes } from '@/config'

export function App(): JSX.Element {
  return (
    <Container>
      <MDX>
        <Routes />
      </MDX>
    </Container>
  )
}
