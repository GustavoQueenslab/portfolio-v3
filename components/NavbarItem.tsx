import { t } from "i18next";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarItemProps {
  routeName: string;
  href?: string;
}

export default function NavbarItem({ routeName, href }: NavbarItemProps) {
  const { t } = useTranslation();
  const samePageRedirect = `#${routeName}`;
  const getRedirectType = href ? href : samePageRedirect;
  const router = useRouter();
  const routeRemovedSlash = router.pathname.replace("/", "");

  return (
    <Link href={getRedirectType}>
      <p className="cursor-pointer ">
        {t(`${routeRemovedSlash}:${routeName}`)}
      </p>
    </Link>
  );
}
