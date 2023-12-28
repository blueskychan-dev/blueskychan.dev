import { Inter } from "next/font/google"
import About from "~/components/About"
import Avatar from "~/components/Avatar"
import Profile from "~/components/Profile"
import SocialLinks from "~/components/SocialLinks"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-center justify-center ${inter.className}`}
    >
      <Head>
        <title>About blueskychan_ :3</title>
        <meta property="og:title" content="Hello, World! >3" key="title" />
        <meta
          property="og:description"
          content="About some stupid person call blueskychan, aka Fuse/Mind :3"
        />
      </Head>
      <div className="backdrop-blur-md bg-gray-700/50 rounded-lg p-2">
        <div className="flex flex-row space-x-3 p-4 items-center ">
          <Avatar />
          <Profile />
        </div>
        <div>
          <SocialLinks />
          <About />
        </div>
      </div>
    </main>
  )
}
