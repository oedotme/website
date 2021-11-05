import { useRef, useState } from 'react'

type Props = HTMLCodeProps

export const Code = ({ children, ...props }: Props) => {
  const ref = useRef<HTMLElement>(null)
  const [copy, setCopy] = useState('Copy')

  const handleClick = () => {
    try {
      const code = ref?.current
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

  if (!props.className?.includes('language-')) {
    return (
      <code {...props} className="bg-element rounded py-1 px-1">
        {children}
      </code>
    )
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

      <code
        {...props}
        className="bg-neutral border border-elevate font-medium grid my-7 leading-normal overflow-x-scroll rounded text-sm p-5 pr-6"
        ref={ref}
      >
        {children}
      </code>
    </div>
  )
}
