import { useState } from "react";

import Image from "next/image";

import clsx from "clsx";
import { TypeAnimation } from "react-type-animation";

import { useOnClickOutside } from "@/hooks/OnClickOutside";

interface ProjectCardProps {
  project: {
    title: string;
    subtitle: string;
    image: string;
    imageWidth: number;
    imageHeight: number;
  };
}

export default function ProjectITem({ project }: ProjectCardProps) {
  const [active, setActive] = useState(false);
  const projectCardRef = useState(null);
  useOnClickOutside(projectCardRef, () => setActive(false));

  return (
    <div
      className={clsx(
        "flex flex-col gap-8 transition hover:opacity-80 px-7 py-8 w-80 h-[440px] bg-dhr",
        active ? "text-justify break-all" : "justify-center items-center"
      )}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      {!active && (
        <Image
          src={project.image}
          alt={project.title}
          width={project.imageWidth}
          height={project.imageHeight}
        />
      )}
      {active && (
        <article>
          <TypeAnimation
            className="text-2xl font-semibold text-white font-quicksand"
            cursor={false}
            sequence={[project.title]}
            speed={30}
            wrapper="p"
          />
          <p className="mt-4 text-xl text-gray-400 lg:mt-10">
            {project.subtitle}
          </p>
        </article>
      )}
    </div>
  );
}
