import Image from "next/image"
import { Tooltip } from "react-tooltip"
const Avatar = () => {
  return (
    <>
      <div className="rounded-2xl overflow-hidden w-24" id="status">
        <Image src="/pfp.jpg" width={128} height={128} alt="Profile picture" />
      </div>
      <Tooltip anchorSelect="#status" content=":3" />
    </>
  )
}

export default Avatar
