import { Link } from '@/elements'

type Props = { tags: string[] }

export const Tags = ({ tags }: Props) => {
  return (
    <ul className="flex gap-3 mt-4">
      {tags.map((tag) => (
        <li key={tag}>
          <Link
            className="bg-elevate border-2 border-elevate font-medium text-sm py-1 px-2 rounded-sm"
            href={`/blog?tags=${tag}`}
            as="/blog"
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  )
}
