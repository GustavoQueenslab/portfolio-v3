import { useRef, useState } from "react";

import Image from "next/image";

import { useOnClickOutside } from "../hooks/OnClickOutside";

export default function LanguageCard({ language, image }) {
  const [showDescription, setShowDescription] = useState(false);
  const languageCardRef = useRef(null);
  useOnClickOutside(languageCardRef, () => setShowDescription(false));

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          ref={languageCardRef}
          onMouseEnter={() => setShowDescription(true)}
          onMouseLeave={() => setShowDescription(false)}
          className="flex items-center justify-center transition duration-300 ease-in-out shadow-xl hover:opacity-40 duration-400 rounded-2xl w-36 h-36 bg-primary hover:rotate-90 hover:scale-75"
        >
          <Image
            className={showDescription ? "rotate-[270deg]" : ""}
            src={image}
            alt={language.name}
            height={100}
            width={100}
          />
        </div>
        <div className="h-4">
          {showDescription && <p className="text-primary">{language.name}</p>}
        </div>
      </div>
    </>
  );
}
