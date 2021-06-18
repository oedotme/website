import { useRef } from 'preact/hooks'

import { Link } from '@/elements'
import { Page } from '@/layouts'

export default function Home(): JSX.Element {
  const projects = useRef<HTMLElement>()
  const contact = useRef<HTMLElement>()

  const scrollToProjects = () => projects?.current?.scrollIntoView()
  const scrollToContact = () => contact?.current?.scrollIntoView()

  return (
    <Page title="Omar Elhawary — Frontend developer">
      <section className="flex flex-col justify-center font-medium min-h-screen py-28">
        <h1 className="leading-loose text-2xl xl:w-3/4">
          I’m a frontend developer interested in user/dev experience, design systems, statically typed languages and
          functional programming.
        </h1>

        <h2 className="leading-loose text-2xl xl:w-3/4 mt-14">
          I’m currently working at <Link to="https://wuzzuf.net">Wuzzuf</Link> as a frontend engineer using React and
          TypeScript.
        </h2>
        <h2 className="leading-loose text-2xl xl:w-1/2 mt-14">
          I also <Link to="/blog">blog</Link> about web development, linux and vim.
        </h2>

        <ul className="flex gap-3 mt-28 text-lg">
          <li>
            <button className="font-medium focus:outline-none" onClick={scrollToProjects}>
              Projects
            </button>
          </li>
          <span>—</span>
          <li>
            <button className="font-medium focus:outline-none" onClick={scrollToContact}>
              Contact
            </button>
          </li>
        </ul>
      </section>

      <section ref={projects} className="flex flex-col min-h-screen py-24">
        <h2 className="font-semibold text-2xl">Projects</h2>

        <h3 className="font-medium text-xl mt-28">Outline</h3>
        <p className="font-medium mt-7">Video, audio and text chatting application</p>
        <ul className="font-medium mt-7">
          <li>
            <Link to="https://outlineapp.netlify.app">Demo</Link>
          </li>
        </ul>
      </section>

      <section ref={contact} className="flex flex-col min-h-3/4-screen py-24">
        <h2 className="font-semibold text-2xl">Contact</h2>

        <p className="font-medium mt-16">
          Email me at <Link to="mailto:oedotme@gmail.com">oedotme@mail.com</Link>
        </p>
        <p className="flex gap-2 font-medium mt-8">
          Find me on <Link to="https://github.com/oedotme">GitHub,</Link>
          <Link to="https://twitter.com/oedotme">Twitter</Link> and
          <Link to="https://linkedin.com/in/oedotme">LinkedIn</Link>
        </p>
        <p className="font-medium mt-8">
          View my <Link to="https://omarelhawary.me/files/omar-elhawary-resume.pdf">resume</Link>
        </p>
      </section>
    </Page>
  )
}
