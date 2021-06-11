import { Head } from '@/components'

type Props = {
  title: string
  description?: string
  children: Children
}

export default function Page({ title, description, children }: Props): JSX.Element {
  return (
    <>
      <Head title={title} description={description} />
      {children}
    </>
  )
}
