import fs from "fs"
import matter from "gray-matter"
import md from "markdown-it"

export async function getStaticPaths() {
  const files = fs.readdirSync("posts")
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8")
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content,
    },
  }
}

export default function PostPage({ frontmatter, content }) {
  const proseClass =
    "prose p-4 prose-invert prose-neutral mx-auto bg-gray-700/50 backdrop-blue-md backdrop-blur-md h-screen"
  return (
    <div className={proseClass}>
      <h1 className="border-b-2 p-1">{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  )
}
