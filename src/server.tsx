import renderToString from 'preact-render-to-string'
import { Router } from 'wouter-preact'
import staticLocationHook from 'wouter-preact/static-location'
import { toStatic } from 'hoofd/preact'

import { App } from '@/app'
import { formatHeadTags } from '@/utils'

export function render(url: string): { title: string; head: string; app: string } {
  const app = renderToString(
    <Router hook={staticLocationHook(url)}>
      <App />
    </Router>
  )

  const { title, metas, links } = toStatic()
  const head = formatHeadTags(metas, links)

  return { title, head, app }
}
