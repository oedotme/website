import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useRemoteRefresh } from 'next-remote-refresh/hook'

import '@/styles/colors.css'
import '@/styles/global.css'
import '@/styles/syntax.css'
import '@/styles/layers.css'

import { Container } from '@/components'
import { theme } from '@/utils'

theme.load()

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useRemoteRefresh({ shouldRefresh: (path) => path.includes(router.query.slug as string) })

  return (
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />
    </Container>
  )
}
