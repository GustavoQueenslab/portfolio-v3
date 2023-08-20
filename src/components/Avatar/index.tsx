import { useRef, useState } from "react";

import Image from "next/image";

import { useOnClickOutside } from "@/hooks/OnClickOutside";

enum MOOD_ITEMS {
  HAPPY = "happy",
  ANGRY = "angry",
  NAUSEOUS = "nauseous",
}

const AVATAR_IMAGES = {
  [MOOD_ITEMS.HAPPY]: "/images/avatar/happy.svg",
  [MOOD_ITEMS.ANGRY]: "/images/avatar/angry.svg",
  [MOOD_ITEMS.NAUSEOUS]: "/images/avatar/nauseous.svg",
};

export default function AvatarPicker() {
  const [avatarMood, setAvatarMood] = useState(MOOD_ITEMS.HAPPY);
  const avatarRef = useRef(null);

  useOnClickOutside(avatarRef, () => setAvatarMood(MOOD_ITEMS.HAPPY));

  return (
    <div
      onMouseOver={() => setAvatarMood(MOOD_ITEMS.ANGRY)}
      onMouseOut={() => setAvatarMood(MOOD_ITEMS.HAPPY)}
      onClick={() => setAvatarMood(MOOD_ITEMS.NAUSEOUS)}
    >
      <Image
        alt="Avatar"
        src={AVATAR_IMAGES[avatarMood]}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
