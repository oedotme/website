import { Email, GitHub, Twitter } from '@/components'
import { constants } from '@/config'
import { Link, List, ListItem } from '@/elements'
import { Page } from '@/layouts'
import { getPostsMeta, Post } from '@/lib'

const keywords = 'personal, website, blog'

type Props = {
  posts?: Post[]
}

export default function Home({ posts = [] }: Props) {
  return (
    <Page keywords={keywords}>
      <h1 className="font-bold mb-10 text-4xl">Hi, Iʼm Omar!</h1>

      <section className="mt-14 space-y-2">
        <h2 className="font-normal leading-loose text-xl sm:leading-loose ">
          Iʼm a frontend developer and linux enthusiast interested in user/dev experience, design systems, statically
          typed languages and functional programming.
        </h2>

        <h3 className="font-normal leading-loose text-xl sm:leading-loose">
          I <Link href={constants.profile.url + '/blog'}>blog</Link> about web development, tooling, linux and
          productivity.
        </h3>
      </section>

      <section className="mt-12 space-x-4">
        <Link href={constants.profile.links.email} className="text-default" aria-label="Email">
          <Email />
        </Link>

        <Link href={constants.profile.links.github} className="text-default" aria-label="GitHub">
          <GitHub />
        </Link>

        <Link href={constants.profile.links.twitter} className="text-default" aria-label="Twitter">
          <Twitter />
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="font-bold mt-28 text-2xl">Recent posts</h2>

        <List className="mt-12">
          {posts.slice(0, 3).map((post) => (
            <ListItem key={post.slug} className="flex flex-col mt-10">
              <Link href={post.slug}>
                <h3 className="font-semibold leading-loose text-lg">{post.title}</h3>
                <span className="text-sm">{post.date}</span>
                <p className="mt-2">{post.description}</p>
              </Link>
            </ListItem>
          ))}
        </List>

        <Link href="/blog" className="inline-block font-medium mt-10">
          View all posts <span className="ml-2">{'-->'}</span>
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="font-bold mt-28 text-2xl">Latest projects</h2>

        <List className="list-none mt-12 space-y-4">
          {constants.projects.slice(0, 3).map(({ name, description, link }) => (
            <ListItem key={name}>
              <Link href={link}>{name}</Link> — {description}
            </ListItem>
          ))}
        </List>

        <Link href="/projects" className="inline-block font-medium mt-10">
          View all projects <span className="ml-2">{'-->'}</span>
        </Link>
      </section>
    </Page>
  )
}

export const getStaticProps = async () => {
  const { posts } = await getPostsMeta()

  return { props: { posts } }
}
