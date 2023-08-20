import { useState } from "react";

import { useTranslation } from "next-i18next";

import LanguageCard from "./LanguageCard";
import Wrapper from "../Wrapper";

interface CompetenceCardProps {
  name: string;
  body: string;
}
function getCompetenceImage(name: string) {
  switch (name) {
    case "HTML":
      return "/images/languages/html.png";
    case "Css":
      return "/images/languages/css.png";
    case "React":
      return "/images/languages/react.png";
    case "Flutter":
      return "/images/languages/flutter.png";
    case "Vue.js":
      return "/images/languages/vue.png";
    case "Svelte":
      return "/images/languages/svelte.png";
    case "Javascript":
      return "/images/languages/javascript.png";
    case "Git":
      return "/images/languages/git.png";
    default:
      return "/images/languages/html.png";
  }
}
export default function Languages() {
  const [description, setDescription] = useState("");
  const { t } = useTranslation();
  const competenceCards: CompetenceCardProps[] = t("home:competenceCards", {
    returnObjects: true,
  });
  return (
    <Wrapper className="flex flex-col items-center justify-center lg:flex-row">
      <article className="h-3 text-center lg:pr-16 basis-2/5">
        <p className="text-3xl font-semibold lg:-mt-14 text-primary font-quicksand">
          Competences
        </p>
        <p className="hidden mt-5 text-xl text-primary lg:block">
          {description}
        </p>
      </article>
      <div className="grid grid-cols-2 mt-8 lg:mt-0 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {competenceCards.map((card) => (
          <div
            key={card.name}
            onMouseEnter={() => setDescription(card.body)}
            onMouseLeave={() => setDescription("")}
          >
            <LanguageCard
              image={getCompetenceImage(card.name)}
              language={card}
            ></LanguageCard>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
