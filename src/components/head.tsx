import NextHead from 'next/head'
import { useRouter } from 'next/router'

import { env } from '@/config'

type Props = {
  title?: string
  description?: string
  image?: string
  type?: string
  date?: string
}

export const Head = (props: Props) => {
  const router = useRouter()
  const url = env.web.url + router.asPath

  const title = props.title ? props.title + ' | Omar Elhawary' : 'Omar Elhawary'
  const description = props.description
    ? props.description
    : "I'm frontend developer and linux enthusiast interested in user/dev experience, design systems, statically typed languages and functional programming."

  const { image = env.web.url + '/assets/logo.svg', type = 'website', date = '' } = props

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:site_name" content="Omar Elhawary" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@oedotme" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {date && <meta property="article:published_time" content={new Date(date).toISOString()} />}
    </NextHead>
  )
}
