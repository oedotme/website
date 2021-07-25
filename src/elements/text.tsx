type Props = HTMLParagraphProps

export const Text = ({ children, ...props }: Props) => {
  return (
    <p className="leading-loose mb-4 text-base" {...props}>
      {children}
    </p>
  )
}
