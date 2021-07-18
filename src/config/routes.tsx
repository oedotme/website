import { Switch, Route } from 'wouter-preact'

import { Head, Post } from '@/components'

const files = import.meta.globEager('../pages/**/*.{md,mdx,tsx}')

const paths = { '/404': '' }

type Post = { path: string; title: string; tags: string[]; date: string }

type Props = {
  posts?: Post[]
  titles?: Record<string, number[]>
  tags?: string[]
}

const routes = Object.keys(files)
  .reverse()
  .map((file) => {
    const url = file.replace(/\.\.\/pages|index|\.(mdx?|tsx)$/g, '').replace(/\[(.+)\]/, ':$1')
    const path = url.length === 1 ? url : url.replace(/\/$/, '')

    return {
      path: path in paths ? paths[path as keyof typeof paths] : path,
      component: files[file]?.default as (props: Props) => JSX.Element,
      title: files[file]?.title as string,
      description: files[file]?.description as string,
      tags: files[file]?.tags as string[],
      date: files[file]?.date as string,
    }
  })

const posts = routes
  .filter((file) => file.path.includes('/blog/'))
  .sort((a, b) => +new Date(b.date) - +new Date(a.date))

const titles: Record<string, number[]> = posts.reduce(
  (titles, current, index) => ({ ...titles, [current.title]: [index + 1, index, index - 1] }),
  {}
)

const filters = [...new Set(posts.flatMap((post) => post.tags))].sort()

export function Routes(): JSX.Element {
  return (
    <Switch>
      {routes.map(({ path, component: Component, title, description, tags, date }) => (
        <Route key={path} path={path}>
          {(params) => (
            <>
              {path !== paths['/404'] && <Head title={title} description={description} date={date}></Head>}

              {path.startsWith('/blog/') ? (
                <Post {...{ posts, titles, path, title, date, tags }}>
                  <Component {...params} />
                </Post>
              ) : (
                <Component {...{ ...params, posts, titles, tags: filters }} />
              )}
            </>
          )}
        </Route>
      ))}
    </Switch>
  )
}
