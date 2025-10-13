import LinkIcon from "./LinkIcon"
import { socialLinks } from "~/data/socialLinks"

const SocialLinks = () => {
  const IconSize = 20
  return (
    <div className="flex flex-wrap">
      {socialLinks.filter((link) => link.showOnHome).map((link) => {
        const Icon = link.icon
        return (
          <LinkIcon
            key={link.id}
            href={link.href}
            LinkIcon={<Icon size={IconSize} color="#F3F4F6" weight="bold" />}
          />
        )
      })}
    </div>
  )
}

export default SocialLinks
