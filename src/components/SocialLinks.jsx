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
  const IconSize = 20
  const profileLinks = [
    {
      href: "https://facebook.com/fusemeoww",
      LinkIcon: <FacebookLogo size={IconSize} color="#F3F4F6" weight="bold" />,
    },
    {
      href: "https://twitter.com/blueskychan_",
      LinkIcon: <TwitterLogo size={IconSize} color="#F3F4F6" weight="bold" />,
    },
    {
      href: "https://t.me/bskychan",
      LinkIcon: <TelegramLogo size={IconSize} color="#F3F4F6" weight="bold" />,
    },
    {
      href: "https://discord.com/users/736163902835916880",
      LinkIcon: <DiscordLogo size={IconSize} color="#F3F4F6" weight="bold" />,
    },
    {
      href: "https://www.instagram.com/blueskychan_irl",
      LinkIcon: <InstagramLogo size={IconSize} color="#F3F4F6" weight="bold" />,
    },
    {
      href: "https://github.com/blueskychan-dev",
      LinkIcon: <GithubLogo size={IconSize} color="#F3F4F6" weight="bold" />,
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
