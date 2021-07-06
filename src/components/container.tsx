import { Footer, Header } from '@/components'

type Props = {
  children: Children
}

export const Container = ({ children }: Props): JSX.Element => {
  return (
    <section className="container flex flex-col mx-auto max-w-5xl min-h-screen py-10 px-6 lg:px-16">
      <Header />
      <main className="flex-1 min-h-xs py-14 px-2 sm:py-20">{children}</main>
      <Footer />
    </section>
  )
}
