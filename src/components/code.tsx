export const Code = ({ children, ...props }: JSX.HTMLAttributes<HTMLElement>): JSX.Element => {
  return (
    <code {...props} className="bg-neutral border border-elevate font-medium text-sm rounded py-1 px-2">
      {children}
    </code>
  )
}

type Props = JSX.HTMLAttributes<HTMLPreElement> & { children: { props: JSX.HTMLAttributes<HTMLElement> } }

export const Pre = ({ children, ...props }: Props): JSX.Element => {
  const { filename = '' } = children?.props

  return (
    <pre
      {...props}
      className="bg-neutral border border-elevate my-7 leading-normal overflow-x-scroll rounded text-sm p-5"
    >
      {filename && <span className="block font-medium mb-5 text-comment text-xs">{filename}</span>}
      {children}
    </pre>
  )
}
