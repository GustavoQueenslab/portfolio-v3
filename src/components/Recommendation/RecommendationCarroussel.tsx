import { useReducer } from "react";

import Image from "next/image";
import Link from "next/link";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { recommendations } from "../../lib/recomendations";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

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

const initialState = { position: 0 };

export default function RecomendationCarroussel() {
  const [state, dispatch] = useReducer(handleRecommendation, initialState);
  const currentRecommendation = recommendations[state.position];

  return (
    <section className="flex items-center gap-8 mt-16 lg:gap-24">
      <button
        className="h-20"
        onClick={() => dispatch({ type: "decrement" })}
        aria-label="Previous Recommendation"
      >
        <ArrowBackIosIcon />
      </button>
      <div>
        <Link href={currentRecommendation.link}>
          <div className="flex items-center gap-5">
            <Image
              alt="Name"
              src="/images/dhr.png"
              width={50}
              height={50}
              className="rounded-full"
            />
            <u className="font-bold">{currentRecommendation.name}</u>
          </div>
        </Link>

        <p className="mt-5">{currentRecommendation.body}</p>
      </div>
      <button
        className="h-20"
        onClick={() => dispatch({ type: "increment" })}
        aria-label="Next Recommendation"
      >
        <ArrowForwardIosIcon />
      </button>
    </section>
  );
}
