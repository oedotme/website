import { Link as InternalLink } from 'wouter-preact'

import { classNames } from '@/utils'

type Props = JSX.HTMLAttributes<HTMLAnchorElement> & { to: string }

const styles = {
  base: 'outline-none',
  states: {
    focus: 'focus-visible:ring-1 ring-black ring-offset-2',
    hover: 'hover:opacity-100',
  },
  type: {
    internal: 'p-2',
    external: 'text-primary underline ring-primary',
  },
}

export const Link = ({ children, className, to, ...props }: Props): JSX.Element => {
  const { base, states, type } = styles

  if (to.startsWith('/')) {
    return (
      <InternalLink className={classNames(base, states.focus, states.hover, type.internal, className)} to={to}>
        {children}
      </InternalLink>
    )
  }

  return (
    <a
      {...props}
      className={classNames(base, states.focus, states.hover, type.external)}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
