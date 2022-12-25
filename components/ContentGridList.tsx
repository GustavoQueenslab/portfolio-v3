import { useState } from "react";
import ContentGridCard from "./ContentGridCard";

export default function ContentGridList({ contentList }) {
  console.log(contentList);
  return (
    <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
      {/* {content
        ? content.map((item: any, i: number) => (
            <ContentGridCard content={item} key={i} />
          ))
        : null} */}
    </div>
  );
}
