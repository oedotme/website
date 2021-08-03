import InternalLink from 'next/link'

import { classNames } from '@/utils'

type Props = HTMLAnchorProps & { as?: string }

const styles = {
  base: 'border-b border-elevate outline-none text-primary',
  states: {
    focus: 'ring-primary ring-offset-2 ring-offset-surface focus-visible:ring-1',
  },
}

export const Link = ({ children, className, href, as, ...props }: Props) => {
  const { base, states } = styles

  if (href?.startsWith('/')) {
    return (
      <InternalLink href={href} as={as}>
        <a className={className} href={href}>
          {children}
        </a>
      </InternalLink>
    )
  }

  return (
    <a {...props} className={classNames(base, states.focus)} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
