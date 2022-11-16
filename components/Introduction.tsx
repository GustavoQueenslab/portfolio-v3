import Image from "next/image";
import AngryAvatar from "./avatar/AngryAvatar";
import DefaultAvatar from "./avatar/DefaultAvatar";
import NauseaAvatar from "./avatar/NauseaAvatar";
import AvatarPicker from "./AvatarPicker";
export default function Introduction() {
  return (
    <section className="flex items-center justify-between px-40 text-left my-14">
      <AvatarPicker />
      <article className="flex flex-col gap-4 basis-3/4">
        <p className="text-6xl font-semibold">
          About me <span className="text-tertiary text-8xl">.</span>
        </p>
        <p className="text-2xl">
          Hey!!! I&apos;m Gustavo Ferreira, a 19 years Front-End developer and a
          technology student. I develop modern, responsive and high quality
          interfaces. I currently live in Lisbon. See more about my projects and
          and visit my social medias :)
        </p>
      </article>
    </section>
  );
}
