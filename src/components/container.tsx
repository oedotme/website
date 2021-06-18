type Props = {
  children: Children
}

export const Container = ({ children }: Props): JSX.Element => {
  return <div className="container mx-auto py-10 px-6 lg:px-16">{children}</div>
}
