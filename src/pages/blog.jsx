import fs from "fs"
import matter from "gray-matter"
import Link from "next/link"
import Head from "next/head"

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
    <>
    <Head>
      <title>My Blog :3</title>
      <meta name="theme-color" content="#FFC0CB" />
      <meta property="og:title" content="Blog" key="title" />
      <meta
        property="og:description"
        content="My blog :3"
      />
    </Head>
    <div className="md:grid-cols-3 lg:grid-cols-4 p-4">
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="border-2 border-gray-300/80 bg-gray-700/50 rounded-xl shadow-lg overflow-hidden flex flex-col m-2 backdrop-blur-md"
        >
          <Link href={`/post/${slug}`}>
            <h1 className="p-4 text-1xl font-bold">{frontmatter.title}</h1>
          </Link>
        </div>
      ))}
    </div>
    </>
  )
}
