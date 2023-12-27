// About.js
import Twemoji from "react-twemoji"
import PageLink from "./PageLink.jsx"
const About = () => {
  return (
    <>
      <span className="font-bold text-lg px-4">About</span>
      <div className="p-2">
        <div className="border-t md:border-t-2"></div>
      </div>
      <div className="p-4 text-balance max-w-md ">
        <Twemoji options={{ className: "twemoji w-4 h-4 inline-block" }}>
          Hey, I'm blueskychan_, a 14-year-old student at{" "}
          <a
            className="p-1 bg-blue-600/20 transition-colors hover:bg-blue-700 font-bold"
            href="https://bs.ac.th"
          >
            Benjamarachanusorn
          </a>
          School in Nonthaburi, Thailand 🇹🇭. I love computer and programming,
          with skills in C# and C++. Currently learning Python, JavaScript, and
          Go! I enjoy osu!, Minecraft, and Roblox. Music is randomly, and I've
          got a <PageLink to="/blog" text="blog" />! too—check it out! 😊
        </Twemoji>
      </div>
    </>
  )
}

export default About
