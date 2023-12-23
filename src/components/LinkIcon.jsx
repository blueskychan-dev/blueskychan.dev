import Link from "next/link"

const ProfileLink = ({ href, LinkIcon }) => {
  return (
    <Link
      href={href}
      aria-label={href}
      className={`bg-base-200 mx-3 rounded-lg p-1.5 transition-transform duration-200 ease-in-out hover:scale-110`}
    >
      {LinkIcon}
    </Link>
  )
}

export default ProfileLink
