type Props = JSX.HTMLAttributes<HTMLParagraphElement>

export const Text = ({ children, ...props }: Props): JSX.Element => {
  return (
    <p className="leading-relaxed mb-4 text-base" {...props}>
      {children}
    </p>
  )
}