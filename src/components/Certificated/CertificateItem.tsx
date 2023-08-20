import Image from "next/image";

import Tilt from "../Tilt";

interface CertificateItemProps {
  certificate: {
    title: string;
    description: string;
  };
}

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
export default function CertificateItem({ certificate }: CertificateItemProps) {
  return (
    <div className="relative flex flex-col px-5 pt-10 pb-5 mb-8 text-center bg-black rounded-md lg:mb-0 w-80 text-primary">
      <div className="absolute flex items-center self-center text-center -top-32">
        <Tilt>
          <Image
            alt={certificate.title}
            src={getImage(certificate.title)}
            width={120}
            height={120}
          />
        </Tilt>
      </div>
      <div>
        <p className="text-lg font-bold font-quicksand">{certificate.title}</p>
        <p className="mt-4 text-justify break-all">{certificate.description}</p>
      </div>
    </div>
  );
}
