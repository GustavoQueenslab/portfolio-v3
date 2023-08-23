import Image from "next/image";

import clsx from "clsx";

const borderCombo = {
  cyan: "border-t-cyan-400 hover:border-b-cyan-400",
  red: "border-t-red-400 hover:border-b-red-400",
  green: "border-t-green-400 hover:border-b-green-400",
  yellow: "border-t-yellow-400 hover:border-b-yellow-400",
  purple: "border-t-purple-400 hover:border-b-purple-400",
};

export default function ServiceCategory({ service }) {
  const borderClassColor = borderCombo[Object.keys(borderCombo)[service.item]];
  return (
    <article
      className={clsx(
        "flex flex-col gap-4 p-4 border border-t-4 border-b-4 border-b-transparent shadow-2xl hover:border-b-4 w-80 shadow-dark hover:border-t-transparent",
        borderClassColor
      )}
    >
      <div>
        <Image
          src={service.icon.filename}
          width={24}
          height={24}
          alt={service.icon.alt}
        />
        <p className="text-xl font-bold font-quicksand">
          {`${service.item + 1}. ${service.title}`}
        </p>
      </div>
      <p className="text-justify">{service.description}</p>
    </article>
  );
}
