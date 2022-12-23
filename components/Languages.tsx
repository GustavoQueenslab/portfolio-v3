import { languagesMedias } from "../lib/languages";
import LanguageCard from "./LanguageCard";
import Wrapper from "./Wrapper";
import { useState } from "react";

export default function Languages() {
  const [description, setDescription] = useState("");
  return (
    <Wrapper className="flex flex-col items-center justify-center lg:flex-row">
      <article className="h-3 text-center basis-2/5">
        <p className="text-3xl font-semibold lg:-mt-14 text-primary font-quicksand">
          Competences
        </p>
        <p className="hidden mt-5 text-xl text-primary lg:block">
          {description}
        </p>
      </article>
      <div className="grid grid-cols-2 mt-8 lg:mt-0 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {languagesMedias.map((card) => (
          <div
            key={card.id}
            onMouseEnter={() => setDescription(card.name)}
            onMouseLeave={() => setDescription("")}
          >
            <LanguageCard
              key={card.id}
              image={card.path}
              name={card.name}
            ></LanguageCard>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
