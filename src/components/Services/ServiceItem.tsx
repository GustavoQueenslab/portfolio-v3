import Image from "next/image";

import clsx from "clsx";

const borderCombo = {
  cyan: "border-t-cyan-400",
  red: "border-t-red-400",
  green: "border-t-green-400",
  yellow: "border-t-yellow-400",
  purple: "border-t-purple-400",
};

export default function ServiceCategory({ service }) {
  const borderClassColor = borderCombo[Object.keys(borderCombo)[service.item]];
  return (
    <article
      className={clsx(
        "px-8 border border-t-4 relative rounded shadow-2xl w-80 pt-6 pb-20",
        borderClassColor
      )}
    >
      <p className="text-2xl font-semibold text-gray-600 font-quicksand">{`${service.title}`}</p>
      <p className="mt-1 font-semibold min-h-[60px] text-gray-400 text-start">
        {service.description}
      </p>
      <div className="absolute right-8">
        <Image
          src={service.icon.filename}
          width={60}
          height={60}
          alt={service.icon.alt}
        />
      </div>
    </article>
  );
}
