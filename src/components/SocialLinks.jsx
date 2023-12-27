import LinkIcon from "./LinkIcon"
import {
  FacebookLogo,
  TwitterLogo,
  TelegramLogo,
  DiscordLogo,
  GithubLogo,
  InstagramLogo,
} from "@phosphor-icons/react"

const SocialLinks = () => {
  const profileLinks = [
    {
      href: "https://facebook.com/fusemeoww",
      LinkIcon: <FacebookLogo size={32} color="#F3F4F6" weight="bold" />,
    },
    {
      href: "https://twitter.com/blueskychan_",
      LinkIcon: <TwitterLogo size={32} color="#F3F4F6" weight="bold" />,
    },
    {
      href: "https://t.me/blueskychan_",
      LinkIcon: <TelegramLogo size={28} color="#F3F4F6" weight="bold" />,
    },
    {
      href: "https://discord.com/users/736163902835916880",
      LinkIcon: <DiscordLogo size={28} color="#F3F4F6" weight="bold" />,
    },
    {
      href: "https://www.instagram.com/blueskychan_irl",
      LinkIcon: <InstagramLogo size={28} color="#F3F4F6" weight="bold" />,
    },
    {
      href: "https://github.com/blueskychan-dev",
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
