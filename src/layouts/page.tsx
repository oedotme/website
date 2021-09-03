import { Head } from '@/components'

type Props = {
  children: Children
  title?: string
  description?: string
  keywords?: string
  image?: string
  type?: string
  date?: string
}

export const Page = ({ children, ...props }: Props) => {
  return (
    <>
      <Head {...props} />

      {children}
    </>
  )
}
