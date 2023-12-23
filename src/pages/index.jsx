import { Inter } from "next/font/google"
import About from "~/components/About"
import Avatar from "~/components/Avatar"
import Profile from "~/components/Profile"
import SocialLinks from "~/components/SocialLinks"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-center justify-center ${inter.className}`}
    >
      <div className="backdrop-blur-md bg-gray-700/50 rounded-lg">
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
