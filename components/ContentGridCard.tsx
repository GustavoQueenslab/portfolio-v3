import { useState } from "react";

import Link from "next/link";

import clsx from "clsx";

import { getCategoryColor } from "./HorizontalContent";

export default function ContentGridCard({ content }) {
  const [hovered, setHovered] = useState(false);
  return (
    <p>s</p>
    // <Link href={content.url}>
    //   <div
    //     className="px-4 py-5 border shadow-xl cursor-pointer border-b-transparent hover:border-b-4 h-44"
    //     onMouseEnter={() => setHovered(true)}
    //     onMouseLeave={() => setHovered(false)}
    //   >
    //     <p className="font-bold">{content.title}</p>
    //     <div className="flex items-center gap-1 mt-2">
    //       <div className="w-3">
    //         <div
    //           className={clsx(
    //             "w-2.5 rounded-sm",
    //             getCategoryColor(content.category),
    //             hovered ? "h-3.5 w-1.5" : "h-2.5 w-2.5"
    //           )}
    //         ></div>
    //       </div>
    //       <p className="capitalize">{content.category}</p>
    //     </div>
    //     <p className="mt-4 line-clamp-3">{content.description}</p>
    //   </div>
    // </Link>
  );
}
