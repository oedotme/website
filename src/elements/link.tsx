import { Link as InternalLink } from 'wouter-preact'

import { classNames } from '@/utils'

type Props = JSX.HTMLAttributes<HTMLAnchorElement> & { href: string }

const styles = {
  base: 'outline-none',
  states: {
    focus: 'focus-visible:ring-1 ring-offset-2 ring-offset-surface',
    hover: 'hover:opacity-100',
  },
  type: {
    internal: 'ring-default',
    external: 'text-primary underline ring-primary',
  },
}

export const Link = ({ children, className, href, ...props }: Props): JSX.Element => {
  const { base, states, type } = styles

  if (href?.startsWith('/')) {
    return (
      <InternalLink className={classNames(base, states.focus, states.hover, type.internal, className)} to={href}>
        {children}
      </InternalLink>
    )
  }

  return (
    <a
      {...props}
      className={classNames(base, states.focus, states.hover, type.external)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
