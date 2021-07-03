export const title = 'Home | Omar Elhawary'
export const description = "Omar Elhawary's personal website | Frontend developer"

export default function Home(): JSX.Element {
  return (
    <>
      <h1 className="font-extrabold leading-loose mb-4 text-3xl sm:text-4xl sm:mb-10">Hi! Iʼm Omar Elhawary</h1>

      <h2 className="font-normal leading-loose my-2 text-lg max-w-6xl sm:text-2xl sm:leading-loose sm:my-5">
        Iʼm a <span className="font-semibold">frontend developer</span> interested in user/dev experience, design
        systems, statically typed languages and functional programming.
      </h2>

      <h3 className="font-normal leading-loose my-2 text-lg max-w-6xl sm:text-2xl sm:leading-loose sm:my-5">
        Iʼm currently working at Wuzzuf as a frontend engineer using <span className="font-semibold">TypeScript </span>
        and <span className="font-semibold">React</span>.
      </h3>

      <h3 className="font-normal leading-loose my-2 text-lg max-w-6xl sm:text-2xl sm:leading-loose sm:my-5">
        I also <span className="font-semibold">blog</span> about web development, linux and vim.
      </h3>
    </>
  )
}
