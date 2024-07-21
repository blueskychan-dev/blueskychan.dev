import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="flex backdrop-blur-sm flex-col justify-center items-center h-screen p-2">
        <div className="">
          <Main />
          <NextScript />
          <script src="/random.js" />
        </div>
      </body>
    </Html>
  )
}
