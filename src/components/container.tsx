import { Footer, Header } from '@/components'

type Props = {
  children: Children
}

export const Container = ({ children }: Props): JSX.Element => {
  return (
    <section className="container flex flex-col justify-between mx-auto min-h-screen py-10 px-6 lg:px-16">
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  )
}
