type Props = JSX.HTMLAttributes<HTMLHeadingElement> & { as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }

const Heading = ({ as, ...props }: Props): JSX.Element => {
  const H = as

  const className = {
    h1: 'font-extrabold leading-loose mb-10 text-4xl',
    h2: 'font-bold leading-loose my-5 text-2xl max-w-6xl',
    h3: 'font-semibold leading-loose my-5 text-xl max-w-6xl',
    h4: 'font-semibold leading-loose my-5 text-lg max-w-6xl',
    h5: 'font-medium leading-loose my-5 text-md max-w-6xl',
    h6: 'font-medium leading-loose my-5 text-sm max-w-6xl',
  }

  return (
    <H className={className[as]} {...props}>
      Heading
    </H>
  )
}

export const H1 = (): JSX.Element => <Heading as="h1" />
export const H2 = (): JSX.Element => <Heading as="h2" />
export const H3 = (): JSX.Element => <Heading as="h3" />
export const H4 = (): JSX.Element => <Heading as="h4" />
export const H5 = (): JSX.Element => <Heading as="h5" />
export const H6 = (): JSX.Element => <Heading as="h6" />
