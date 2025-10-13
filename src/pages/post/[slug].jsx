import fs from "fs"
import matter from "gray-matter"
import md from "markdown-it"
import Head from "next/head"
import { useEffect, useRef } from "react"

function Comments({
  repo = "blueskychan-dev/blueskychan.dev",
  theme = "github-dark",
  issueTerm = "pathname",
  widgetKey, // pass slug or slug+theme
}) {
  const boxRef = useRef(null)

  useEffect(() => {
    // ensure the mount target exists and is attached to the DOM
    if (!boxRef.current || !boxRef.current.isConnected) return

    // remove any old iframe (e.g., when slug/theme changes)
    const old = boxRef.current.querySelector("iframe.utterances-frame")
    if (old) old.remove()

    // create script tag for utterances
    const s = document.createElement("script")
    s.src = "https://utteranc.es/client.js"
    s.async = true
    s.setAttribute("repo", repo)
    s.setAttribute("issue-term", issueTerm)
    s.setAttribute("theme", theme)
    s.setAttribute("crossorigin", "anonymous")

    // defer a tick so Strict Mode dev unmount/remount doesn’t race it
    const id = requestAnimationFrame(() => {
      if (boxRef.current?.isConnected) boxRef.current.appendChild(s)
    })

    // cleanup: cancel RAF and remove iframe if present
    return () => {
      cancelAnimationFrame(id)
      const iframe = boxRef.current?.querySelector("iframe.utterances-frame")
      iframe?.remove()
    }
  }, [repo, theme, issueTerm, widgetKey])

  return <section ref={boxRef} className="mt-10" aria-label="Comments" />
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts")
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8")
  const { data: frontmatter, content } = matter(fileName)
  return { props: { frontmatter, content, slug } }
}

export default function PostPage({ frontmatter, content, slug }) {
  const postTags = (frontmatter.tags ?? []).map((tag) => (
    <div
      className="inline-block border rounded-md font-bold text-lg mr-1 py-0.5 px-2.5"
      key={String(tag)}
    >
      {tag}
    </div>
  ))

  const proseClass =
    "prose p-4 prose-invert prose-neutral mx-auto bg-gray-700/50 backdrop-blue-md h-100 overflow-y-auto h-screen"

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.desc} />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={frontmatter.desc} />
      </Head>

      <div className={proseClass}>
        <p className="font-bold text-md">{frontmatter.date}</p>
        <h1 className="border-b-2 p-1">{frontmatter.title}</h1>
        <div>{postTags}</div>

        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />

        {/* Utterances comments */}
        <Comments theme="github-dark" widgetKey={slug} />
      </div>
    </>
  )
}
