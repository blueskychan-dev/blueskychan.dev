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
      <Tooltip anchorSelect="#status" content="เมียวเมี่ยวเหมี่ยวเมียว mrrrp เมียวววววววว เมี้ยวเหมี่ยวเมี้ยวเหมี่ยวเมี้ยว ejcjdjcju33ifi3kxg28vi4bsuvjeucj3icj3iehvjrr9vjeuci3ngj3icuenxicueuruvjejgoksh37t8vomehg8ckejt7 hhwutuck3iudiebthix" />
    </>
  )
}

export default Avatar
