import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "./hooks/OnClickOutside";
import LanguageOption from "./LanguageOption";
import LanguagePlaceholder from "./LanguagePlaceholder";

interface LanguagePickerProps {
  className?: string;
}

export default function LanguagePicker({ className }: LanguagePickerProps) {
  const [handleDropdown, setHandleDropdown] = useState(false);
  const languagePickerRef = useRef(null);

  useOnClickOutside(languagePickerRef, () => setHandleDropdown(false));
  return (
    <div className={clsx("w-36 ", className)} ref={languagePickerRef}>
      <LanguagePlaceholder event={() => setHandleDropdown(!handleDropdown)} />
      {handleDropdown && (
        <div className="flex flex-col items-center mt-4 lg:mt-20">
          <div className="w-3 -mt-2 overflow-hidden ">
            <div className="w-2 h-2 origin-bottom-left transform rotate-45 bg-white"></div>
          </div>

          <div className="flex flex-col items-center gap-1 py-1 text-black bg-white rounded-md cursor-pointer">
            <LanguageOption
              flag="/images/flags/uk.png"
              language="English"
              locale="en"
            />
            <LanguageOption
              flag="/images/flags/portugal.png"
              language="Portuguese"
              locale="pt"
            />
            <LanguageOption
              flag="/images/flags/sweden.png"
              language="Swedish"
              locale="sv"
            />
          </div>
        </div>
      )}
    </div>
  );
}