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

  const stright = router.query.stright !== undefined
  useEffect(() => {
    if (stright) {
      document.body.classList.add(roboto.className)
      document.body.classList.remove(mali.className)
    } else {
      document.body.classList.add(mali.className)
      document.body.classList.remove(roboto.className)
    }
  }, [stright])

  return <Component {...pageProps} />
}

export default MyApp
