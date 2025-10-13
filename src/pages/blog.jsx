import fs from "fs"
import matter from "gray-matter"
import Link from "next/link"
import Head from "next/head"
import { useState } from "react"

export async function getStaticProps() {
  const files = fs.readdirSync("posts")

  const posts = files
    .filter((fileName) => !fileName.endsWith("-th.md"))
    .map((fileName) => {
  const slug = fileName.replace(".md", "")
  const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8")
  const { data: frontmatter } = matter(readFile)

  const rawDate = frontmatter.date
  const parsedDate = new Date(rawDate)

  const isValidDate = !isNaN(parsedDate.getTime())

  return {
    slug,
    frontmatter: {
      ...frontmatter,
      formattedDate: isValidDate
        ? parsedDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "Invalid Date",
      parsedDate: isValidDate ? parsedDate.toISOString() : null,
    },
  }
})
.sort((a, b) => {
  const dateA = a.frontmatter.parsedDate ? new Date(a.frontmatter.parsedDate) : new Date(0)
  const dateB = b.frontmatter.parsedDate ? new Date(b.frontmatter.parsedDate) : new Date(0)
  return dateB.getTime() - dateA.getTime()
})


  return {
    props: {
      posts,
    },
  }
}

export default function Blog({ posts }) {
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState("date")

  const filteredPosts = posts
    .filter(({ frontmatter }) =>
      frontmatter.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "letter") {
        return a.frontmatter.title.localeCompare(b.frontmatter.title)
      } else {
        return (
          new Date(b.frontmatter.parsedDate).getTime() -
          new Date(a.frontmatter.parsedDate).getTime()
        )
      }
    })

  return (
    <>
      <Head>
        <title>My Blog :3</title>
        <meta name="theme-color" content="#FFC0CB" />
        <meta property="og:title" content="Blog" key="title" />
        <meta property="og:description" content="My blog :3" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="p-4 md:p-6 backdrop-blur-md bg-gray-800/50 rounded-lg max-w-7xl mx-auto h-screen">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center text-[#FFC0CB]">Blog</h1>
        <p className="text-center text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
          All of my thoughts and writings :3
        </p>

        {/* Search & Sort */}
        <div className="flex flex-col gap-3 md:gap-4 md:flex-row items-start md:items-center mb-4 md:mb-6 bg-gray-700/50 p-3 md:p-4 rounded-lg">
          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 md:px-4 md:py-2 rounded-xl border border-gray-300 bg-white/80 text-black shadow-md focus:outline-none focus:ring-2 focus:ring-pink-300 flex-grow text-sm md:text-base"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 md:px-4 md:py-2 rounded-xl border border-gray-300 bg-white/80 text-black shadow-md focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm md:text-base"
          >
            <option value="date">Sort by Date</option>
            <option value="letter">Sort by Alphabetical</option>
          </select>
        </div>

        {/* Posts */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filteredPosts.map(({ slug, frontmatter }) => (
              <Link
                key={slug}
                href={`/post/${slug}`}
                className="border-2 border-gray-300/80 bg-gray-700/50 hover:bg-gray-600/70 transition-all duration-300 rounded-xl shadow-lg overflow-hidden flex flex-col backdrop-blur-md hover:shadow-pink-500/20 hover:border-pink-300/50 group"
              >
                <div className="p-3 md:p-4 flex flex-col h-full">
                  <h1 className="text-lg md:text-xl font-bold text-white group-hover:text-[#FFC0CB] transition-colors duration-300 line-clamp-2">
                    {frontmatter.title}
                  </h1>
                  <p className="text-xs md:text-sm text-gray-300 mt-1 mb-2 md:mb-3">
                    {frontmatter.formattedDate}
                  </p>
                  {frontmatter.description && (
                    <p className="text-gray-400 text-xs md:text-sm mt-auto line-clamp-2">
                      {frontmatter.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 md:py-8 bg-gray-700/30 rounded-lg">
            <p className="text-gray-300 text-base md:text-lg">No posts found matching your search.</p>
          </div>
        )}
      </div>
    </>
  )
}
