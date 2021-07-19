import { useRef, useState } from 'preact/hooks'

export const Code = ({ children, ...props }: JSX.HTMLAttributes<HTMLElement>): JSX.Element => {
  return (
    <code {...props} className="bg-neutral border border-elevate font-medium text-sm rounded py-1 px-2">
      {children}
    </code>
  )
}

export const Pre = ({ children, ...props }: JSX.HTMLAttributes<HTMLPreElement>): JSX.Element => {
  const ref = useRef<HTMLPreElement>(null)
  const [copy, setCopy] = useState('Copy')

  const handleClick = () => {
    try {
      const code = ref.current?.firstChild
      const range = document.createRange()
      const selection = window.getSelection()

      range.selectNodeContents(code as Node)
      selection?.removeAllRanges()
      selection?.addRange(range)
      document.execCommand('copy')
      selection?.removeAllRanges()

      setCopy('Copied!')
    } catch {
      setCopy('Not supported')
    }
  }

  return (
    <div className="relative group">
      <button
        className="absolute bg-elevate font-medium hidden top-2 right-2 text-xs py-1 px-2 rounded-sm group-hover:block"
        onClick={handleClick}
        onBlur={() => setCopy('Copy')}
      >
        {copy}
      </button>

      <pre
        {...props}
        className="bg-neutral border border-elevate my-7 leading-normal overflow-x-scroll rounded text-sm p-5 pr-6"
        ref={ref}
      >
        {children}
      </pre>
    </div>
  )
}
