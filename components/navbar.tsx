import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <nav>
      <p>{t("home:name")}</p>
      <Link href="/" locale="en">
        <a>To english</a>
      </Link>
      <Link href="/" locale="pt">
        <a>To portuguese</a>
      </Link>
      <Link href="/" locale="sv">
        <a>To swedish</a>
      </Link>
    </nav>
  );
}
