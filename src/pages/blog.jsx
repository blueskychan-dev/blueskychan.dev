import fs from "fs"
import matter from "gray-matter"
import Link from "next/link"

export async function getStaticProps() {
  const files = fs.readdirSync("posts")

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "")
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8")
    const { data: frontmatter } = matter(readFile)
    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts,
    },
  }
}

export default function Blog({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4">
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="border-2 border-gray-300/80 bg-gray-700/50 rounded-xl shadow-lg overflow-hidden flex flex-col m-2 backdrop-blur-md"
        >
          <Link href={`/post/${slug}`}>
            <h1 className="p-4 text-1xl font-bold ">{frontmatter.title}</h1>
          </Link>
        </div>
      ))}
    </div>
  )
}
