import { useTranslation } from "next-i18next";
import Link from "next/link";
import LanguagePicker from "./LanguagePicker";

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="sticky top-0 z-40 h-20 px-10 py-4 text-white bg-secondary">
      <p>{t("home:name")}</p>
      <LanguagePicker />
    </nav>
  );
}
