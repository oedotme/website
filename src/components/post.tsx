import { Tags } from '@/components'
import { H1, Link } from '@/elements'

type Props = { children: Children }

export const Post = ({ children }: Props): JSX.Element => {
  return <>{children}</>
}

const PostHeader = ({ title, tags, date }: { title: string; tags: string[]; date: string }): JSX.Element => {
  return (
    <section>
      <Link className="inline-block mb-6 -mx-4 py-2 px-4" href="/blog">
        ⟵
      </Link>
      <H1>{title}</H1>
      <span className="text-sm">{date}</span>
      <Tags tags={tags} />
    </section>
  )
}

const PostFooter = (): JSX.Element => {
  return (
    <section>
      <span>Share</span>
    </section>
  )
}

Post.Header = PostHeader
Post.Footer = PostFooter
