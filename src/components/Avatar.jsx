import Image from "next/image"
import { Tooltip } from "react-tooltip"
const Avatar = () => {
  return (
    <>
      <div className="rounded-2xl overflow-hidden w-24" id="status">
        <Image
          priority={true}
          src="/pfp.png"
          width={128}
          height={128}
          alt="Profile picture"
        />
      </div>
      <Tooltip anchorSelect="#status" content="What are you looking at?" />
    </>
  )
}

export default Avatar
