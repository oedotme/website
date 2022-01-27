import { Link } from '@/elements'

type Props = { tags: string[] }

export const Tags = ({ tags }: Props) => {
  return (
    <ul className="mt-4 flex gap-3">
      {tags.map((tag) => (
        <li key={tag}>
          <Link
            className="rounded-sm border-2 border-elevate bg-elevate py-1 px-2 text-sm font-medium"
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
