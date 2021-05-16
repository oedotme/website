import { hydrate } from 'preact'
import { Router } from 'wouter-preact'

import { App } from '@/app'

hydrate(
  <Router>
    <App />
  </Router>,
  document.querySelector('#app') as Element
)
