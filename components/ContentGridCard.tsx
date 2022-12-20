import clsx from "clsx";
import { getCategoryColor } from "./HorizontalContent";
import Link from "next/link";

export default function ContentGridCard({ content }) {
  console.log(
    "🚀 ~ file: ContentGridCard.tsx:2 ~ ContentGridCard ~ content",
    content
  );
  return (
    <Link href={content.url}>
      <div className="px-4 py-5 border border-gray-300 rounded-md cursor-pointer h-44">
        <p className="font-bold">{content.title}</p>
        <div className="flex items-center gap-2 mt-2">
          <div
            className={clsx(
              "w-2.5 h-2.5 rounded-full",
              getCategoryColor(content.category)
            )}
          ></div>
          <p className="capitalize">{content.category}</p>
        </div>
        <p className="mt-4 line-clamp-3">{content.description}</p>
      </div>
    </Link>
  );
}
