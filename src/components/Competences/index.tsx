import { useState } from "react";

import LanguageCard from "@/components/Competences/LanguageCard";
import Wrapper from "@/components/Wrapper";

export default function Languages({ competences }) {
  const [description, setDescription] = useState("");

  if (!competences) return <></>;

  return (
    <Wrapper className="flex flex-col items-center justify-center lg:flex-row">
      <article className="h-3 text-center lg:pr-16 basis-2/5">
        <p className="text-3xl font-semibold lg:-mt-14 text-primary font-quicksand">
          {competences.title}
        </p>
        <p className="hidden mt-5 text-xl text-primary lg:block">
          {description}
        </p>
      </article>
      <div className="grid grid-cols-2 mt-8 lg:mt-0 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {competences.items.map((card) => (
          <div
            key={card.name}
            onMouseEnter={() => setDescription(card.description)}
            onMouseLeave={() => setDescription("")}
          >
            <LanguageCard
              image={card.image.filename}
              language={card.name}
            ></LanguageCard>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
