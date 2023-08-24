import { useReducer } from "react";

import Image from "next/image";
import Link from "next/link";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const initialState = { position: 0 };

export default function RecommendationCarousel({ recommendations }) {
  const [state, dispatch] = useReducer(handleRecommendation, initialState);
  const currentRecommendation = recommendations[state.position];

  function handleRecommendation(state, action) {
    const recommendationLength = recommendations.length;
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { position: (state.position + 1) % recommendationLength };
      case ACTIONS.DECREMENT:
        return {
          position:
            (state.position - 1 + recommendationLength) % recommendationLength,
        };
      default:
        return state;
    }
  }

  if (!recommendations || recommendations.length === 0) {
    return <div>No recommendations available.</div>;
  }

  return (
    <section className="flex items-center gap-8 lg:gap-24 min-h-[160px]">
      <button
        className="h-20"
        onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
        aria-label="Previous Recommendation"
      >
        <ArrowBackIosIcon />
      </button>
      <div className="w-full">
        <Link href={currentRecommendation.link}>
          <a target="_blank">
            <div className="flex items-center gap-5">
              <Image
                alt={currentRecommendation.image.alt}
                src={currentRecommendation.image.filename}
                width={50}
                height={50}
                className="rounded-full"
              />
              <u className="font-bold">{currentRecommendation.title}</u>
            </div>
          </a>
        </Link>

        <p className="mt-5">{currentRecommendation.description}</p>
      </div>
      <button
        className="h-20"
        onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
        aria-label="Next Recommendation"
      >
        <ArrowForwardIosIcon />
      </button>
    </section>
  );
}
