import { hydrate, render } from 'preact'
import { Router } from 'wouter-preact'

import { App } from '@/app'

function Client(): JSX.Element {
  return (
    <Router>
      <App />
    </Router>
  )
}

const app = document.querySelector('#app') as Element

if (app.hasChildNodes()) hydrate(<Client />, app)
else render(<Client />, app)
