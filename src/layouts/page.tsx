import { Head } from '@/components'

type Props = {
  children: Children
  title?: string
  description?: string
  image?: string
  type?: string
  date?: string
}

export const Page = ({ children, title, description, image, type, date }: Props) => {
  return (
    <>
      <Head title={title} description={description} image={image} type={type} date={date} />

      {children}
    </>
  )
}
