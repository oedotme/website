import { useRef, useState } from 'react'

type Props = HTMLCodeProps

export const Code = ({ children, ...props }: Props) => {
  const ref = useRef<HTMLElement>(null)
  const [copy, setCopy] = useState('Copy')

  const handleClick = async () => {
    try {
      const code = ref?.current
      await navigator.clipboard.writeText(String(code?.textContent))
      setCopy('Copied!')
    } catch {
      setCopy('Not supported')
    }
  }

  if (!props.className?.includes('language-')) {
    return (
      <code {...props} className="rounded bg-element py-1 px-1">
        {children}
      </code>
    )
  }

  return (
    <div className="group relative">
      <button
        className="absolute top-2 right-2 z-10 hidden rounded-sm bg-elevate py-1 px-2 text-xs font-medium group-hover:block"
        onClick={handleClick}
        onBlur={() => setCopy('Copy')}
      >
        {copy}
      </button>

      <code
        {...props}
        className="my-7 grid overflow-x-scroll rounded border border-elevate bg-neutral p-5 pr-6 text-sm font-medium leading-normal"
        ref={ref}
      >
        {children}
      </code>
    </div>
  )
}
