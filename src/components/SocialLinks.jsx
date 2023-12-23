import LinkIcon from "./LinkIcon"
import { DiscordLogo, GithubLogo, InstagramLogo } from "@phosphor-icons/react"

const SocialLinks = () => {
  const profileLinks = [
    {
      href: "https://discord.com/users/829156179803504670",
      LinkIcon: <DiscordLogo size={28} color="#F3F4F6" weight="bold" />,
    },
    {
      href: "https://www.instagram.com/bluestar.pics",
      LinkIcon: <InstagramLogo size={28} color="#F3F4F6" weight="bold" />,
    },
    {
      href: "https://github.com/bluestarowo",
      LinkIcon: <GithubLogo size={28} color="#F3F4F6" weight="bold" />,
    },
  ]
  return (
    <div className="flex">
      {profileLinks.map((link, index) => (
        <LinkIcon key={index} href={link.href} LinkIcon={link.LinkIcon} />
      ))}
    </div>
  )
}

export default SocialLinks
