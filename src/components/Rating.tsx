import { useState } from "react";

import clsx from "clsx";
import ReactStars from "react-rating-stars-component";

export default function Rating() {
  const [rating, setRating] = useState(0);
  const [hasChanged, setHasChanged] = useState(false);
  function saveRate(index: number) {
    if (!hasChanged) {
      setRating(index), setHasChanged(true);
    }
  }
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={clsx(
              "text-2xl",
              index <= rating ? "text-yellow-300" : "bg-transparent"
            )}
            onClick={() => saveRate(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}
