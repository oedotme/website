export const title = 'Home | Omar Elhawary'
export const description = "Omar Elhawary's personal website | Frontend developer"

export default function Index(): JSX.Element {
  return (
    <section className="flex flex-col justify-center gap-6 min-h-[68vh]">
      <h1 className="font-extrabold leading-loose mb-2 text-2xl sm:text-4xl sm:mb-6">Hi! Iʼm Omar Elhawary</h1>

      <h2 className="font-normal leading-loose text-lg max-w-6xl sm:text-xl sm:leading-loose ">
        Iʼm a <span className="font-semibold">frontend developer</span> interested in user/dev experience, design
        systems, statically typed languages and functional programming.
      </h2>

      <h3 className="font-normal leading-loose text-lg max-w-6xl sm:text-xl sm:leading-loose">
        Iʼm currently working at Wuzzuf as a frontend engineer using <span className="font-semibold">TypeScript </span>
        and <span className="font-semibold">React</span>.
      </h3>

      <h3 className="font-normal leading-loose text-lg max-w-6xl sm:text-xl sm:leading-loose">
        I also <span className="font-semibold">blog</span> about web development, linux and vim.
      </h3>
    </section>
  )
}
