import { Link as InternalLink } from 'wouter-preact'

import { classNames } from '@/utils'

type Props = JSX.HTMLAttributes<HTMLAnchorElement> & { to: string }

const styles = {
  base: 'outline-none',
  decoration: 'underline',
  states: {
    active: 'active:opacity-80',
    focus: 'focus-visible:ring-1 ring-black',
  },
}

export const Link = ({ children, to, ...props }: Props): JSX.Element => {
  const { base, decoration, states } = styles

  if (to.startsWith('/')) {
    return (
      <InternalLink className={classNames(base, states.active, states.focus)} to={to}>
        {children}
      </InternalLink>
    )
  }

  return (
    <a
      {...props}
      className={classNames(base, decoration, states.active, states.focus)}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
