type Props = HTMLUListProps

export const List = ({ children, ...props }: Props) => {
  return (
    <ul {...props} className="flex flex-col gap-4">
      {children}
    </ul>
  )
}

type ItemProps = HTMLLIProps

const Item = ({ children, ...props }: ItemProps) => {
  return (
    <li {...props} className="leading-relaxed text-base">
      {children}
    </li>
  )
}

List.Item = Item
