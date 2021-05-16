import { LinkOptions, MetaOptions } from 'hoofd/preact'

export function formatHeadTags(metas: MetaOptions[], links: LinkOptions[]): string {
  const unique = new Set()

  const meta = metas.reverse().reduce((accumulator: string, meta: MetaOptions) => {
    const key = 'name' in meta ? 'name' : 'property'
    const value = 'name' in meta ? meta['name'] : meta['property']

    if (!unique.has(value)) {
      unique.add(value)
      return accumulator + `<meta ${key}="${value}" content="${meta.content}">\n\t`
    }

    return accumulator
  }, '')

  const link = links.reduce((accumulator: string, link: LinkOptions) => {
    if (!unique.has(`${link.rel}:${link.href}`)) {
      unique.add(`${link.rel}:${link.href}`)
      return accumulator + `<link rel="${link.rel}" href="${link.href}">\n\t`
    }

    return accumulator
  }, '')

  return `${meta}${link}`
}
