import { t } from "i18next";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavbarItemProps {
  routeName: string;
  href?: string;
  closeResponsiveMenu?:any
}

export default function NavbarItem({ routeName, href,closeResponsiveMenu }: NavbarItemProps) {
  const { t } = useTranslation();
  const samePageRedirect = `#${routeName}`;
  const getRedirectType = href ? href : samePageRedirect;
  const router = useRouter();
  const routeRemovedSlash = router.pathname.replace("/", "");

  return (
    <Link href={getRedirectType}>
      <p
        className="text-xl uppercase cursor-pointer h-9 hover:border-l-0 hover:border-r-0 hover:border hover:border-t-0 hover:border-b-4"
        onClick={() => {
          closeResponsiveMenu ? closeResponsiveMenu(false) : null;
        }}
      >
        {t(`${routeRemovedSlash}:${routeName}`)}
      </p>
    </Link>
  );
}
