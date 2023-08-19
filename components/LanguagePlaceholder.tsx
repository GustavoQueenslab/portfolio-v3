import Image from "next/image";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTranslation } from "next-i18next";

interface LanguagePlaceholderProps {
  event: React.MouseEventHandler<HTMLButtonElement>;
}

function FlagPlaceholder({ image, name }) {
  return (
    <>
      <Image src={image} alt={name} width={18} height={12} />
      <KeyboardArrowDownIcon />
    </>
  );
}

function getCurrentFlag(abbreviation: string) {
  switch (abbreviation) {
    case "pt":
      return (
        <FlagPlaceholder
          image="/images/flags/portugal.png"
          name="Portuguese Flag"
        />
      );
    case "sv":
      return (
        <FlagPlaceholder image="/images/flags/sweden.png" name="Swedish Flag" />
      );
    case "en":
      return (
        <FlagPlaceholder
          image="/images/flags/uk.png"
          name="United Kingdom Flag"
        />
      );
    default:
      return <FlagPlaceholder image="/images/flags/uk.png" name={name} />;
  }
}

export default function LanguagePlaceholder({
  event,
}: LanguagePlaceholderProps) {
  const { i18n } = useTranslation("home");

  return (
    <button className="flex items-center justify-center w-full" onClick={event}>
      {getCurrentFlag(i18n.language)}
    </button>
  );
}
