import Head from "next/head"
import { socialLinks } from "~/data/socialLinks"

const Links = () => {
  return (
    <>
      <Head>
        <title>All My Links | blueskychan_ :3</title>
        <meta name="theme-color" content="#FFC0CB" />
        <meta
          property="og:title"
          content="All My Links | blueskychan_ :3"
          key="title"
        />
        <meta
          property="og:description"
          content="Find me across the internet — socials, code, and more!"
        />
      </Head>

      <main className="flex min-h-screen justify-center px-4 py-16 sm:py-20">
        <section className="w-full max-w-3xl space-y-6 rounded-3xl border border-white/10 bg-[#2a154f]/60 p-6 backdrop-blur overflow-y-auto h-screen">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold text-[#FFC0CB]">
              Find Me Online!
            </h1>
            <p className="text-sm text-gray-200">
              All my socials, contact spots, and places I hang out. Say hi! :3
            </p>
          </div>

          <div className="space-y-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/30">
                      <Icon size={28} weight="fill" color={link.accent} />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">
                        {link.platform}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-300 md:text-right">
                    {link.handle}
                  </div>
                </a>
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export default Links
