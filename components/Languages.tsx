import LanguageCard from "./LanguageCard";
import Wrapper from "./Wrapper";
import LanguagesImages from "../lib/languages";

export default function Languages() {
  return (
    <Wrapper className="flex flex-col items-center justify-center lg:flex-row">
      <p className="text-2xl text-primary basis-1/4">Competences</p>
      <div className="grid grid-cols-2 mt-8 lg:mt-0 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {LanguagesImages.map((card) => (
          <LanguageCard
            key={card.id}
            image={card.path}
            name={card.name}
          ></LanguageCard>
        ))}
      </div>
    </Wrapper>
  );
}
