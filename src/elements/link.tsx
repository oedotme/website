import InternalLink from 'next/link'

import { classNames } from '@/utils'

type Props = Omit<HTMLAnchorProps & { as?: string }, 'ref'>

const styles = {
  base: 'border-b border-elevate outline-none text-primary',
  focus: 'ring-primary ring-offset-2 ring-offset-surface focus-visible:ring-1',
}

export const Link = ({ href = '/', as, ...props }: Props) => {
  const internal = href?.startsWith('/')

  if (internal) {
    return <InternalLink href={href} as={as} {...props} />
  }

  return (
    <a
      className={classNames(styles.base, styles.focus)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  )
}
