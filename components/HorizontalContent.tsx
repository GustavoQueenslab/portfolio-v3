import clsx from "clsx";
import Link from "next/link";

export interface ContentProps {
  title: string;
  category: string;
  description: string;
  url: string;
}

function getCategoryColor(category: string) {
  switch (category) {
    case "React":
      return "bg-blue-400";
    case "Flutter":
      return "bg-blue-800";
    case "Svelte":
      return "bg-orange-500";
    case "Vue":
      return "bg-green-600";
    case "Css":
      return "bg-yellow-400";
    default:
      return "bg-red-500";
  }
}

export default function HorizontalContent({
  title,
  category,
  description,
  url,
}: ContentProps) {
  return (
    <Link href={url}>
      <a target="_blank">
        <div className="py-4 cursor-pointer">
          <p className="text-2xl font-bold">{title}</p>
          <div className="flex items-center gap-2">
            <div
              className={clsx(
                "w-2.5 h-2.5 rounded-full",
                getCategoryColor(category)
              )}
            ></div>
            <p>{category}</p>
          </div>
          <p className="mt-3">{description}</p>
        </div>
      </a>
    </Link>
  );
}
