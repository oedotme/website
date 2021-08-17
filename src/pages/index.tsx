import { Email, GitHub, Twitter } from '@/components'
import { constants, env } from '@/config'
import { Link, List, ListItem } from '@/elements'
import { Page } from '@/layouts'
import { getPostsMeta, Post } from '@/lib'

type Props = {
  posts?: Post[]
}

export default function Home({ posts = [] }: Props) {
  return (
    <Page>
      <h1 className="font-bold mb-10 text-4xl">Hi, Iʼm Omar!</h1>

      <section className="mt-14 space-y-2">
        <h2 className="font-normal leading-loose text-xl sm:leading-loose ">
          Iʼm a frontend developer and linux enthusiast interested in user/dev experience, design systems, statically
          typed languages and functional programming.
        </h2>

        <h3 className="font-normal leading-loose text-xl sm:leading-loose">
          I <Link href={env.web.url + '/blog'}>blog</Link> about web development, tooling, linux and productivity.
        </h3>
      </section>

      <section className="mt-12 space-x-4">
        <Link href={constants.profile.links.email} className="text-default">
          <Email />
        </Link>

        <Link href={constants.profile.links.github} className="text-default">
          <GitHub />
        </Link>

        <Link href={constants.profile.links.twitter} className="text-default">
          <Twitter />
        </Link>
      </section>

      <section>
        <h2 className="font-bold mt-28 text-2xl">Recent posts</h2>

        <ul className="mt-12 mb-16">
          {posts.slice(0, 3).map((post) => (
            <li key={post.slug} className="flex flex-col mt-10">
              <Link href={post.slug}>
                <h3 className="font-semibold leading-loose text-lg max-w-6xl">{post.title}</h3>
                <span className="text-sm">{post.date}</span>
                <p className="mt-2">{post.description}</p>
              </Link>
            </li>
          ))}

          <Link href="/blog" className="inline-block font-medium mt-10">
            View all posts <span className="ml-2">{'—>'}</span>
          </Link>
        </ul>
      </section>

      <section>
        <h2 className="font-bold mt-28 text-2xl">Latest projects</h2>

        <ul className="mt-12 mb-16">
          <List className="list-none space-y-4">
            {constants.projects.slice(0, 3).map(({ name, description, link }) => (
              <ListItem key={name}>
                <Link href={link}>{name}</Link> — {description}
              </ListItem>
            ))}
          </List>

          <Link href="/projects" className="inline-block font-medium mt-10">
            View all projects <span className="ml-2">{'—>'}</span>
          </Link>
        </ul>
      </section>
    </Page>
  )
}

export const getStaticProps = async () => {
  const { posts } = await getPostsMeta()

  return { props: { posts } }
}
