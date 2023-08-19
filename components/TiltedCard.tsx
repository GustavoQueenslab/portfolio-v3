import Image from "next/image";

import { TiltedCardProps } from "./Certificates";
import Tilt from "./Tilt";
function getImage(cardName: string) {
  switch (cardName) {
    case "MTA 98-375":
      return "/images/certificates/mta.png";
    case "Helsinki University":
      return "/images/certificates/helsinki.jpg";
    case "Epic React":
      return "/images/languages/react.png";
    case "Bachelor's degree":
      return "/images/certificates/fiap.png";
    default:
      return "/images/certificates/fiap.png";
  }
}
export default function TiltedCard(content: TiltedCardProps) {
  return (
    <div className="relative flex flex-col px-5 pt-10 pb-5 mb-8 text-center bg-black rounded-md lg:mb-0 w-80 text-primary">
      <div className="absolute flex items-center self-center text-center -top-32">
        <Tilt>
          <Image
            alt={content.title}
            src={getImage(content.title)}
            width={120}
            height={120}
          />
        </Tilt>
      </div>
      <div>
        <p className="text-lg font-bold font-quicksand">{content.title}</p>
        <p className="mt-4 text-justify break-all">{content.description}</p>
      </div>
    </div>
  );
}
