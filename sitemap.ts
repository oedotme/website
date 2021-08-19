import fs from 'fs/promises'
import prettier from 'prettier'

import { constants } from './src/config'

const getFiles = (path: string) => fs.readdir(process.cwd() + path)

const generateSitemap = async () => {
  const tsx = /^[a-z].+\.tsx$/
  const pages = (await getFiles('/src/pages')).map((page) => (tsx.test(page) ? `/${page.replace('.tsx', '')}` : ''))
  const posts = (await getFiles('/content/posts')).map((post) => `/blog/${post.replace('.mdx', '')}`)

  const urls = [...pages, ...posts].filter(Boolean)

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
      ${urls
        .map(
          (url) => `
            <url>
              <loc>${constants.profile.url + (url === '/index' ? '' : url)}</loc>
            </url>
          `
        )
        .join('')}
    </urlset>
  `

  const config = await prettier.resolveConfig('./prettier.config.js')
  const formatted = prettier.format(sitemap, { ...config, parser: 'html' })

  await fs.writeFile(process.cwd() + '/public/sitemap.xml', formatted).catch(() => process.exit(1))

  const { cyan, green, reset } = { cyan: '\x1b[36m', green: '\x1b[32m', reset: '\x1b[0m' }
  console.log(`${cyan}info${reset}  - Updated ${green}public/sitemap.xml${reset}`)
}

generateSitemap()
