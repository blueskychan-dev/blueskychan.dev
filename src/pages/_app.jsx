import "~/styles/globals.css"

// pages/_app.js
import { useEffect } from "react"
import { useRouter } from "next/router"
import { Roboto, Mali } from "next/font/google"

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
})

const mali = Mali({ subsets: ["latin"], weight: "400" })

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const uwuQuery = router.query.uwu !== undefined

  useEffect(() => {
    if (uwuQuery) {
      document.body.classList.add(mali.className)
      document.body.classList.remove(roboto.className)
    } else {
      document.body.classList.add(roboto.className)
      document.body.classList.remove(mali.className)
    }
  }, [uwuQuery])

  return <Component {...pageProps} />
}

export default MyApp
