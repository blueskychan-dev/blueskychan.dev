// About.js
import Twemoji from "react-twemoji"
import Link from "next/link"
import PageLink from "./PageLink.jsx"
const About = () => {
  return (
    <>
      <span className="font-bold text-lg px-4">About Me!</span>
      <div className="p-2">
        <div className="border-t md:border-t-2"></div>
      </div>
      <div className="p-4 text-balance max-w-md ">
        <Twemoji options={{ className: "twemoji w-4 h-4 inline-block", base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/' }}>
          Hey, I'm blueskychan_, a 15-year-old student at{" "}
          <Link
            className="border px-2.5 py-0.5 mr-1 rounded-lg hover:underline bg-blue-600/20 transition-colors hover:bg-blue-700 font-bold"
            href="https://bs.ac.th"
          >
            Benjamarachanusorn
          </Link>
          School in Nonthaburi, Thailand 🇹🇭. I love computer and programming,
          with skills in C# and C++. Currently learning Python, JavaScript, and
          More! I play osu! for daily and other for sometimes, Music is
          randomly, and I've got a <PageLink to="/blog" text="blog" />!
          too—check it out! :3<br />
          (Also check out my{" "}
          <PageLink to="/gallery" text="gallery" /> too! :3)
          <br />
          (Need all my socials? Visit the{" "}
          <PageLink to="/links" text="links" />!)
        </Twemoji>
      </div>
    </>
  )
}

export default About
