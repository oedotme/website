import '@/styles'
import { Container, Footer, Header } from '@/components'
import { Routes } from '@/config'

export function App(): JSX.Element {
  return (
    <Container>
      <Header />
      <Routes />
      <Footer />
    </Container>
  )
}
