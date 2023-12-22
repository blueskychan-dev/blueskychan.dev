import Image from "next/image"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-center justify-center ${inter.className}`}
    >
      <div>
        <div className="">
          <div className="flex flex-row space-x-3 p-4 items-center">
            <div className="avatar">
              <div className="rounded-2xl w-24 border-zinc-700">
                <img src="https://cdn.discordapp.com/avatars/829156179803504670/e7b883373d4ca9e7c288d47aca47cad6.png?size=1024" />
              </div>
            </div>

            <div className=" text-gray-300 text-lg">
              <p className="space-x-1">
                <span className="text-gray-100">bluestar</span>
                <span className="font-extralight">she/her</span>
              </p>
            </div>
          </div>
          <div>
            <span className="font-bold text-lg px-4">About</span>

            <div className="w-full border-b border-[#3f3f46]"></div>
            <div className="p-4 text-balance max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              optio vitae id, aut accusamus magni deleniti delectus saepe quis
              quidem quae possimus harum voluptas repellat recusandae
              blanditiis, sint ipsa ducimus!
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
