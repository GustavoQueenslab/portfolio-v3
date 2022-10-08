import LanguageCard from "./LanguageCard";
import Wrapper from "./Wrapper";
import Html from "../public/svg/html.svg";
const languagesMedias = [
  {
    id: 0,
    path: "/languages/html.png",
    name: "HTML",
  },
];

export default function Languages() {
  return (
    <>
      <Wrapper>
        {languagesMedias.map((card) => (
          <LanguageCard
            key={card.id}
            image={card.path}
            name={card.name}
          ></LanguageCard>
        ))}
      </Wrapper>
    </>
  );
}
