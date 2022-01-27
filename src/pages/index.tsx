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
      <h1 className="mb-10 text-4xl font-bold">Hi, Iʼm Omar!</h1>

      <section className="mt-14 space-y-2">
        <h2 className="text-xl font-normal leading-loose sm:leading-loose ">
          I’m a frontend developer and linux enthusiast interested in user/dev experience, software architecture, design
          systems and functional programming.
        </h2>

        <h3 className="text-xl font-normal leading-loose sm:leading-loose">
          I <Link href={constants.profile.url + '/blog'}>blog</Link> about web development, tooling, linux and developer
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
        <h2 className="mt-28 text-2xl font-bold">Recent posts</h2>

        <List className="mt-12">
          {posts.slice(0, 3).map((post) => (
            <ListItem key={post.slug} className="mt-10 flex flex-col">
              <Link href={post.slug}>
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <span className="mt-1 block text-sm opacity-70">{post.date}</span>
                <p className="mt-2">{post.description}</p>
              </Link>
            </ListItem>
          ))}
        </List>

        <Link href="/blog" className="mt-10 inline-block font-medium">
          View all posts <span className="ml-2">{'-->'}</span>
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="mt-28 text-2xl font-bold">Latest projects</h2>

        <List className="mt-12 list-none space-y-4">
          {constants.projects.slice(0, 3).map(({ name, description, link }) => (
            <ListItem key={name}>
              <Link href={link}>{name}</Link> — {description}
            </ListItem>
          ))}
        </List>

        <Link href="/projects" className="mt-10 inline-block font-medium">
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
