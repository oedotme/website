import InternalLink from 'next/link'

import { classNames } from '@/utils'

type Props = HTMLAnchorProps & { as?: string }

const styles = {
  base: 'border-b border-elevate outline-none text-primary',
  focus: 'ring-primary ring-offset-2 ring-offset-surface focus-visible:ring-1',
}

export const Link = ({ className, href = '/', as, ...props }: Props) => {
  const internal = href?.startsWith('/')

  if (internal) {
    return (
      <InternalLink href={href} as={as}>
        <a className={className} href={href} {...props} />
      </InternalLink>
    )
  }

  return (
    <a
      {...props}
      className={classNames(styles.base, styles.focus)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    />
  )
}
