import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: string;
  background: string;
  imageWidth: number;
  imageHeight: number;
}

function cardStyle(active: boolean) {
  if (!active) {
    return "justify-center items-center";
  }
  return "text-justify break-all";
}

export default function ProjectCard({
  title,
  image,
  subtitle,
  background,
  imageWidth,
  imageHeight,
}: ProjectCardProps) {
  const [active, setActive] = useState(false);
  return (
    <div
      className={clsx(
        "flex  flex-col gap-8 transition hover:opacity-80 px-7 py-8 w-80 h-[440px] bg-dhr ",
        cardStyle(active)
      )}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      {!active && (
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
        />
      )}
      {active && (
        <article>
          <TypeAnimation
            className="text-2xl font-semibold text-white font-quicksand"
            cursor={false}
            sequence={[title]}
            speed={30}
            wrapper="p"
          />
          <p className="mt-4 text-xl text-gray-400 lg:mt-10">{subtitle}</p>
        </article>
      )}
    </div>
  );
}
