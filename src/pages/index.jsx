//import { Mali } from "next/font/google"
import About from "~/components/About"
import Avatar from "~/components/Avatar"
import Profile from "~/components/Profile"
import SocialLinks from "~/components/SocialLinks"
import Head from "next/head"

//const inter = Mali({ subsets: ["latin"], weight: "400" })

export default function Home() {
  return (
    <>
      <Head>
        <title>About blueskychan_ :3</title>
        <meta name="theme-color" content="#FFC0CB" />
        <meta property="og:title" content="Hello, World! <3" key="title" />
        <meta
          property="og:description"
          content="About some stupid person call blueskychan, or Mind :3"
        />
      </Head>

      <main>
        <div className="backdrop-blur-md bg-[#2a154f]/50 rounded-lg p-3 max-w-md md:max-w-lg overflow-hidden overflow-ellipsis">
          <div className="flex flex-row space-x-3 items-center p-3">
            <Avatar />
            <Profile />
          </div>
          <div>
            <SocialLinks />
            <About />
          </div>
        </div>
      </main>
    </>
  )
}
