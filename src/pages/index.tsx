export const title = 'Omar Elhawary'
export const description = 'Frontend Developer'

export default function Home(): JSX.Element {
  return (
    <>
      <h1 className="font-extrabold leading-loose mb-10 text-4xl">Hi! Iʼm Omar Elhawary</h1>

      <h2 className="font-normal leading-loose my-5 text-2xl max-w-6xl">
        Iʼm a <span className="font-semibold">frontend developer</span> interested in user/dev experience, design
        systems, statically typed languages and functional programming.
      </h2>

      <h3 className="font-normal leading-loose my-5 text-2xl max-w-6xl">
        Iʼm currently working at Wuzzuf as a frontend engineer using <span className="font-semibold">TypeScript </span>
        and <span className="font-semibold">React</span>.
      </h3>

      <h3 className="font-normal leading-loose my-5 text-2xl max-w-6xl">
        I also <span className="font-semibold">blog</span> about web development, linux and vim.
      </h3>
    </>
  )
}
