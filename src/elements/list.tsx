type Props = JSX.HTMLAttributes<HTMLUListElement>

export const List = ({ children, ...props }: Props): JSX.Element => {
  return (
    <ul {...props} className="flex flex-col gap-4">
      {children}
    </ul>
  )
}

const Item = ({ children, ...props }: JSX.HTMLAttributes<HTMLLIElement>): JSX.Element => {
  return (
    <li {...props} className="leading-relaxed text-base">
      {children}
    </li>
  )
}

List.Item = Item
