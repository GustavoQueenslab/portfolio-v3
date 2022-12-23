import Image from "next/image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useReducer } from "react";
import Link from "next/link";
import { recommendations } from "../lib/recomendations";

function handleRecommendation(state, action) {
  let recommendationLength = recommendations.length - 1;
  switch (action.type) {
    case "increment":
      if (state.position <= recommendationLength - 1) {
        return { position: state.position + 1 };
      }
      return { position: 0 };
    case "decrement":
      if (state.position > 0) {
        return { position: state.position - 1 };
      } else {
        return { position: recommendationLength };
      }
  }
}

const initialState = { position: 0 };

export default function Recommendation() {
  const [state, dispatch] = useReducer(handleRecommendation, initialState);
  let currentReccomendation = recommendations[state?.position];
  return (
    <section className="px-6 py-20 text-white lg:px-60 bg-secondary">
      <h3 className="text-2xl font-bold text-center font-quicksand">
        Recommendations
      </h3>
      <section className="flex items-center gap-8 mt-16 lg:gap-24">
        <button
          className="h-20"
          onClick={() => dispatch({ type: "decrement" })}
        >
          <ArrowBackIosIcon />
        </button>
        <div>
          <Link href={currentReccomendation.link}>
            <div className="flex items-center gap-5">
              <Image
                alt="Name"
                src="/images/dhr.png"
                width={50}
                height={50}
                className="rounded-full"
              />
              <u className="font-bold">{currentReccomendation.name}</u>
            </div>
          </Link>

          <p className="mt-5">{currentReccomendation.body}</p>
        </div>
        <button
          className="h-20"
          onClick={() => dispatch({ type: "increment" })}
        >
          <ArrowForwardIosIcon />
        </button>
      </section>
    </section>
  );
}
