import fs from "fs"
import matter from "gray-matter"
import md from "markdown-it"
import Head from "next/head"

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
  console.log(frontmatter.tags)
  const postTags = frontmatter.tags.map((tag) => (
    <div
      className="inline-block border-2 rounded-md p-1 w-fit h-fit font-bold text-lg mr-1"
      key={tag.toString()}
    >
      {tag}
    </div>
  ))

  const proseClass =
    "prose p-4 prose-invert prose-neutral mx-auto bg-gray-700/50 backdrop-blue-md backdrop-blur-md h-100"
  return (
    <>
      <Head>
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
      </div>
    </>
  )
}
