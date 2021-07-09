import { Switch, Route } from 'wouter-preact'

import { Head, Post } from '@/components'

const files = import.meta.globEager('../pages/**/*.{md,mdx,tsx}')

const paths = { '/404': '' }

const routes = Object.keys(files)
  .reverse()
  .map((file) => {
    const url = file.replace(/\.\.\/pages|index|\.(mdx?|tsx)$/g, '').replace(/\[(.+)\]/, ':$1')
    const path = url.length === 1 ? url : url.replace(/\/$/, '')

    return {
      path: path in paths ? paths[path as keyof typeof paths] : path,
      component: files[file]?.default as () => JSX.Element,
      title: files[file]?.title as string,
      description: files[file]?.description as string,
      tags: files[file]?.tags as string[],
      date: files[file]?.date as string,
    }
  })

export function Routes(): JSX.Element {
  return (
    <Switch>
      {routes.map(({ path, component: Component, title, description, tags, date }) => (
        <Route key={path} path={path}>
          {(params) => (
            <>
              {path !== paths['/404'] && <Head title={title} description={description} date={date}></Head>}
              {path.startsWith('/blog/') && <Post.Header {...{ title, date, tags }} />}
              <Component {...params} />
            </>
          )}
        </Route>
      ))}
    </Switch>
  )
}
