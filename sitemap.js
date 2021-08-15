import fs from 'fs/promises'
import prettier from 'prettier'

import { env } from './src/config'

const getFiles = (path) => fs.readdir(process.cwd() + path)

const generateSitemap = async () => {
  const valid = /^[a-z].+\.tsx$/
  const pages = (await getFiles('/src/pages')).map((page) => (valid.test(page) ? `/${page.replace('.tsx', '')}` : ''))
  const posts = (await getFiles('/content/posts')).map((post) => `/blog/${post.replace('.mdx', '')}`)

  const urls = [...pages, ...posts].filter(Boolean)

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
      ${urls
        .map(
          (url) => `
            <url>
              <loc>${env.web.url + `${url === '/index' ? '' : url}`}</loc>
            </url>
          `
        )
        .join('')}
    </urlset>
  `

  const config = await prettier.resolveConfig('./prettier.config.js')
  const formatted = prettier.format(sitemap, { ...config, parser: 'html' })

  await fs.writeFile(process.cwd() + '/public/sitemap.xml', formatted)
}

generateSitemap()
