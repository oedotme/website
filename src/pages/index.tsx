import { Head } from '@/components'
import { env } from '@/config'
import { Link } from '@/elements'

export default function Home() {
  return (
    <>
      <Head
        title="Home"
        description="I'm a frontend developer and a linux enthusiast interested in user/dev experience, design systems, statically typed languages and functional programming"
      />

      <section className="flex flex-col justify-center gap-6 min-h-[50vh]">
        <h1 className="font-extrabold leading-loose mb-2 text-4xl sm:mb-6">Hi! Iʼm Omar!</h1>

        <h2 className="font-normal leading-loose text-xl max-w-2xl sm:leading-loose ">
          Iʼm a <span className="font-semibold">frontend developer</span> and a linux enthusiast interested in user/dev
          experience, design systems, statically typed languages and functional programming.
        </h2>

        <h3 className="font-normal leading-loose text-xl max-w-2xl sm:leading-loose">
          Make sure to check out my <Link href={env.web.url + '/blog'}>blog</Link>, Iʼll be writing about web
          development, linux, vim and more.
        </h3>

        <h3 className="font-normal leading-loose text-xl max-w-2xl sm:leading-loose">
          Feel free to <Link href="mailto:oedotme@gmail.com">contact me</Link> if you want to reach out!
        </h3>
      </section>
    </>
  )
}
