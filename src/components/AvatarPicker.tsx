import { useState } from "react";

import AngryAvatar from "./avatar/AngryAvatar";
import DefaultAvatar from "./avatar/DefaultAvatar";

function getAvatar(angry: boolean) {
  if (angry) {
    return <AngryAvatar />;
  }
  return <DefaultAvatar />;
}

export default function AvatarPicker() {
  const [angry, setAngry] = useState(false);
  return (
    <div
      onMouseOver={() => setAngry(true)}
      onMouseOut={() => setAngry(false)}
      className="hidden lg:block basis-1/4"
    >
      {getAvatar(angry)}
    </div>
  );
}
