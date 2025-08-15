import { useEffect, useRef } from "react"
import { useRouter } from "next/router"

export default function Comments({ theme = "github-dark" }) {
  const containerRef = useRef(null)
  const { asPath } = useRouter()

  useEffect(() => {
    if (!containerRef.current) return

    // Clear any previous instance (e.g., when navigating between posts)
    containerRef.current.innerHTML = ""

    const script = document.createElement("script")
    script.src = "https://utteranc.es/client.js"
    script.async = true
    script.setAttribute("repo", "blueskychan-dev/blueskychan.dev")
    script.setAttribute("issue-term", "pathname")
    script.setAttribute("theme", theme)
    script.setAttribute("crossorigin", "anonymous")

    containerRef.current.appendChild(script)
  }, [theme, asPath])

  return <section ref={containerRef} className="mt-10" aria-label="Comments" />
}
