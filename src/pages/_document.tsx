import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" color-scheme="auto" dir="ltr">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="theme-color" content="#fcfcfc" />
          <meta name="color-scheme" content="light dark" />
          <link rel="preload" href="/fonts/ibm-plex-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="shortcut icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        </Head>

        <body className="overflow-y-scroll bg-surface text-default selection:bg-default selection:text-surface">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
