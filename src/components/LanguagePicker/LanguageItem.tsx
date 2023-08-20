import Link from "next/link";
import { useRouter } from "next/router";

import CheckIcon from "@mui/icons-material/Check";
import { i18n } from "next-i18next";
import ReactCountryFlag from "react-country-flag";
import useLocalStorage from "use-local-storage";

export default function LanguageItem({ item }) {
  const router = useRouter();
  const [, setStorageLanguage] = useLocalStorage("LANG", "");
  return (
    <Link href={router.pathname} locale={item.locale}>
      <div
        onClick={() => setStorageLanguage(item.locale)}
        className="flex items-center justify-between w-full gap-4 px-2 py-1 text-start hover:text-tertiary"
      >
        <div className="flex items-center gap-2">
          <ReactCountryFlag countryCode={item.country} />
          <p className="text-xs">{item.name}</p>
        </div>
        {i18n.language == item.locale && (
          <CheckIcon fontSize="small" color="success" />
        )}
      </div>
    </Link>
  );
}
