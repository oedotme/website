import { Head } from '@/components'

type Props = {
  children: Children
  title?: string
  description?: string
  type?: string
  date?: string
}

export const Page = ({ children, title, description }: Props) => {
  return (
    <>
      <Head title={title} description={description} />

      {children}
    </>
  )
}
