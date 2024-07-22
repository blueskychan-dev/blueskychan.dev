import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
  return (
    <Html lang="en">
      <meta property="og:image" content="/favicon.webp" />
      <link rel="icon" href="/favicon.webp" sizes="any" />
      <Head />
      <body className="flex backdrop-blur-sm backdrop-brightness-75 flex-col justify-center items-center h-screen p-2">
        <div className="">
          <Main />
          <NextScript />
          <script src="/random.js" />
        </div>
      </body>
    </Html>
  )
}
