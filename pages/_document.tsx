import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
	  <link rel="apple-touch-icon" href="/apple-icon.png"></link>
		<link rel="preconnect" href="https://fonts.googleapis.com"></link>
		<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
		<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed&family=IBM+Plex+Sans:wght@300&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}