import { useState } from "react";
import LanguageOption from "./LanguageOption";

export default function LanguagePicker() {
  const [handleDropdown, setHandleDropdown] = useState(false);
  return (
    <>
      <div className="w-36">
        <button
          className="w-full "
          onClick={() => setHandleDropdown(!handleDropdown)}
        >
          GB EN {"<"}
        </button>
        {handleDropdown && (
          <div className="flex flex-col items-center mt-2">
            <div className="inline-block w-3 -mt-2 overflow-hidden">
              <div className="w-2 h-2 origin-bottom-left transform rotate-45 bg-white"></div>
            </div>

            <div className="flex flex-col items-center gap-1 py-1 text-black bg-white rounded-md cursor-pointer">
              <LanguageOption
                flag="/images/flags/sweden.png"
                language="Swedish"
                locale="sv"
              />
              <LanguageOption
                flag="/images/flags/portugal.png"
                language="Portuguese"
                locale="pt"
              />
              <LanguageOption
                flag="/images/flags/uk.png"
                language="English"
                locale="en"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
