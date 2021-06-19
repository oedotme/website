import { useLocation } from 'wouter-preact'
import { useLink, useMeta, useTitle } from 'hoofd/preact'

type Props = {
  title: string
  description?: string
  image?: string
  type?: string
  date?: string
}

export const Head = (props: Props): null => {
  const [location] = useLocation()

  const base = 'https://omarelhawary.me'
  const url = base + location
  const handler = ''

  const {
    title = 'Omar Elhawary',
    description = 'Frontend developer working with TypeScript and React',
    image = base + '/assets/logo.svg',
    type = 'website',
    date = '',
  } = props

  useTitle(title)
  useMeta({ name: 'robots', content: 'follow, index' })
  useMeta({ name: 'description', content: description })
  useMeta({ property: 'og:url', content: url })
  useMeta({ property: 'og:type', content: type })
  useMeta({ property: 'og:site_name', content: title })
  useMeta({ property: 'og:title', content: title })
  useMeta({ property: 'og:description', content: description })
  useMeta({ property: 'og:image', content: image })
  useMeta({ name: 'twitter:card', content: 'summary_large_image' })
  useMeta({ name: 'twitter:site', content: handler })
  useMeta({ name: 'twitter:title', content: title })
  useMeta({ name: 'twitter:description', content: description })
  useMeta({ name: 'twitter:image', content: image })
  useMeta({ property: 'article:published_time', content: date })
  useLink({ rel: 'canonical', href: url })

  return null
}
