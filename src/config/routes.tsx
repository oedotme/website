import { Switch, Route } from 'wouter-preact'

const files = import.meta.globEager(`../pages/**/*.(md|mdx|tsx)`)

const paths = { '/404': '' }

const routes = Object.keys(files)
  .reverse()
  .map((file) => {
    const url = file.replace(/\.\.\/pages|index|\.(mdx?|tsx)$/g, '').replace(/\[(.+)\]/, ':$1')
    const path = url.length === 1 ? url : url.replace(/\/$/, '')

    return {
      path: path in paths ? paths[path as keyof typeof paths] : path,
      component: files[file].default as () => JSX.Element,
    }
  })

export function Routes(): JSX.Element {
  return (
    <Switch>
      {routes.map(({ path, component: Component }) => (
        <Route key={path} path={path}>
          {(params) => (Component ? <Component {...params} /> : <></>)}
        </Route>
      ))}
    </Switch>
  )
}
