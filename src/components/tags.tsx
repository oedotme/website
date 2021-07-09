export const Tags = ({ tags }: { tags: string[] }): JSX.Element => {
  return (
    <ul className="flex gap-3 mt-2">
      {tags.map((tag) => (
        <li key={tag} className="bg-neutral font-medium text-default py-1 px-2 rounded-sm text-sm">
          {tag}
        </li>
      ))}
    </ul>
  )
}
