import { useState } from "react";

import clsx from "clsx";
import { TypeAnimation } from "react-type-animation";

import { useOnClickOutside } from "@/hooks/OnClickOutside";

export default function ProjectITem({ project }) {
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
      {!active && <img src={project.image.filename} alt={project.image.alt} />}
      {active && (
        <article className="mt-8">
          <TypeAnimation
            className="text-2xl font-semibold text-white font-quicksand"
            cursor={false}
            sequence={[project.title]}
            speed={30}
            wrapper="p"
          />
          <p className="mt-4 text-xl text-gray-400 break-normal text-start lg:mt-10">
            {project.description}
          </p>
        </article>
      )}
    </div>
  );
}
