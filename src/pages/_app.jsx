// pages/_app.jsx
import "~/styles/globals.css"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { Roboto, Mali } from "next/font/google"

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
})

const mali = Mali({
  subsets: ["latin"],
  weight: "400",
})

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const stright = router.query.stright !== undefined

  useEffect(() => {
    // Font logic
    if (stright) {
      document.body.classList.add(roboto.className)
      document.body.classList.remove(mali.className)
    } else {
      document.body.classList.add(mali.className)
      document.body.classList.remove(roboto.className)
    }

    // Background logic
    if (router.pathname.startsWith("/post/")) {
      // Change wallpaper to solid color (#241f31)
      document.body.style.backgroundImage = "none"
      document.body.style.backgroundColor = "	#241f31"
    } else {
      // Restore default wallpaper behavior
      document.body.style.backgroundColor = ""
      document.body.style.setProperty(
        "--background-image",
        'url("/api/random-background-picture")'
      )
      document.body.style.backgroundImage = "var(--background-image)"
    }
  }, [router.pathname, stright])

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
