import { useRef, useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import ReactCountryFlag from "react-country-flag";

import LanguageItem from "./LanguageItem";
import { useOnClickOutside } from "../../hooks/OnClickOutside";

interface LanguagePickerProps {
  className?: string;
}

const LANGUAGE_ITEMS: { name: string; locale: string; country: string }[] = [
  { name: "English", locale: "en", country: "GB" },
  { name: "Portuguese", locale: "pt", country: "BR" },
  { name: "Swedish", locale: "sv", country: "SE" },
];

const LANGUAGE_FLAGS: Record<string, string> = {
  pt: "PT",
  sv: "SE",
  en: "GB",
};

function getCurrentFlag(abbreviation: string) {
  const countryCode = LANGUAGE_FLAGS[abbreviation];
  return <ReactCountryFlag countryCode={countryCode} />;
}
export default function LanguagePicker({ className }: LanguagePickerProps) {
  const { i18n } = useTranslation("home");
  const [handleDropdown, setHandleDropdown] = useState(false);
  const languagePickerRef = useRef(null);

  useOnClickOutside(languagePickerRef, () => setHandleDropdown(false));

  return (
    <div className={clsx("w-36 relative", className)} ref={languagePickerRef}>
      <button
        className="flex items-center justify-center w-full"
        onClick={() => setHandleDropdown(!handleDropdown)}
      >
        {getCurrentFlag(i18n.language)}
        <KeyboardArrowDownIcon />
      </button>
      {handleDropdown && (
        <div className="absolute flex flex-col items-center w-full mt-4">
          <div className="flex flex-col items-center gap-1 py-1 text-black bg-white rounded-md cursor-pointer">
            {LANGUAGE_ITEMS.map((item) => (
              <LanguageItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
