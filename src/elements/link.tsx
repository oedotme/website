import { Link as InternalLink } from 'wouter-preact'

import { classNames } from '@/utils'

type Props = JSX.HTMLAttributes<HTMLAnchorElement> & { href: string }

const styles = {
  base: 'outline-none text-primary underline',
  states: {
    focus: 'ring-primary ring-offset-2 ring-offset-surface focus-visible:ring-1',
  },
}

export const Link = ({ children, className, href, ...props }: Props): JSX.Element => {
  const { base, states } = styles

  if (href?.startsWith('/')) {
    return (
      <InternalLink className={className} to={href}>
        {children}
      </InternalLink>
    )
  }

  return (
    <a {...props} className={classNames(base, states.focus)} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
