import { render } from 'preact'
import { Router } from 'wouter-preact'

import { App } from '@/app'

render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#app') as Element
)
