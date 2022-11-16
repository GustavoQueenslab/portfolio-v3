import CheckIcon from "@mui/icons-material/Check";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface LanguageOptionProps {
  flag: any;
  language: string;
  locale: string;
}

export default function LanguageOption({
  flag,
  locale,
  language,
}: LanguageOptionProps) {
  const { i18n } = useTranslation("home");
  const router = useRouter();
  return (
    <Link href={router.pathname} locale={locale}>
      <div className="flex items-center justify-between w-full gap-4 px-2 py-1 text-start hover:text-tertiary">
        <div className="flex items-center gap-2">
          <Image width={18} height={12} alt={language} src={flag} />
          <p className="text-xs ">{language}</p>
        </div>
        {i18n.language == locale ? (
          <CheckIcon fontSize="small" color="success" />
        ) : (
          <div></div>
        )}
      </div>
    </Link>
  );
}
