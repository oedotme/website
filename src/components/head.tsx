import NextHead from 'next/head'
import { useRouter } from 'next/router'

import { constants } from '@/config'

type Props = {
  title?: string
  description?: string
  keywords?: string
  image?: string
  type?: string
  date?: string
}

const { profile } = constants

export const Head = (props: Props) => {
  const router = useRouter()
  const url = constants.profile.url + router.asPath

  const title = props.title ? `${props.title} | ${profile.title}` : profile.title
  const description = props.description ? props.description : profile.description

  const { image = profile.image, type = 'website', date = '', keywords = '' } = props

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="description" content={description} />
      <meta name="author" content={profile.name} />
      <meta name="keywords" content={keywords} />
      <meta property="og:site_name" content={profile.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={profile.url + image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={`@${profile.username}`} />
      <meta name="twitter:site" content={`@${profile.username}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={profile.url + image} />
      {date && <meta property="article:published_time" content={new Date(date).toISOString()} />}
    </NextHead>
  )
}
