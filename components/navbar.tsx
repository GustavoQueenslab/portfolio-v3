import { useTranslation } from "next-i18next";
import Link from "next/link";
import LanguagePicker from "./LanguagePicker";

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between h-20 px-10 py-4 text-white bg-secondary">
      <div className="flex items-center pl-3 text-xl uppercase border-l-8 border-blue-400 lg:basis-2/5">
        <p>Gustavo Ferreira</p>
      </div>
      <div className="justify-center hidden text-xl uppercase gap-44 lg:basis-full lg:flex">
        <p>{t("home:competences")}</p>
        <p>{t("home:projects")}</p>
        <p>{t("home:contact")}</p>
      </div>
      <LanguagePicker className="lg:basis-1/5" />
    </nav>
  );
}
