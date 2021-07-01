type Props = JSX.HTMLAttributes<HTMLHeadingElement> & { as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }

const Heading = ({ as, children, ...props }: Props): JSX.Element => {
  const H = as

  const className = {
    h1: 'font-extrabold mb-5 text-4xl',
    h2: 'font-bold mt-12 mb-5 text-2xl max-w-6xl',
    h3: 'font-semibold mt-10 mb-4 text-xl max-w-6xl',
    h4: 'font-semibold mt-10 mb-4 text-lg max-w-6xl',
    h5: 'font-medium mt-8 mb-3 text-md max-w-6xl',
    h6: 'font-medium mt-6 mb-2 text-sm max-w-6xl',
  }

  return (
    <H className={className[as]} {...props}>
      {children}
    </H>
  )
}

export const H1 = (props: Props): JSX.Element => <Heading {...props} as="h1" />
export const H2 = (props: Props): JSX.Element => <Heading {...props} as="h2" />
export const H3 = (props: Props): JSX.Element => <Heading {...props} as="h3" />
export const H4 = (props: Props): JSX.Element => <Heading {...props} as="h4" />
export const H5 = (props: Props): JSX.Element => <Heading {...props} as="h5" />
export const H6 = (props: Props): JSX.Element => <Heading {...props} as="h6" />
