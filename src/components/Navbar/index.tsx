import { useState } from "react";

import Link from "next/link";

import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "next-i18next";

import LanguagePicker from "@/components/LanguagePicker";
import ResponsiveNavbar from "@/components/Navbar/ResponsiveNavbar";

export default function Navbar() {
  const [responsive, setResponsive] = useState(false);
  const { t } = useTranslation("home");

  const LINK_ITEMS: { href: string; label: string }[] = [
    { href: "#competences", label: t("navbar.competences") },
    { href: "#projects", label: t("navbar.projects") },
  ];

  return (
    <>
      <nav className="sticky top-0 z-40 flex items-center justify-between h-24 px-10 py-4 text-white bg-secondary">
        <div className="pl-3 text-3xl uppercase border-l-8 border-blue-400 lg:basis-2/5">
          <p className="flex items-center gap-3">
            Gustavo <span className="hidden lg:block">Ferreira</span>
          </p>
        </div>
        <div className="justify-center hidden py-2 text-xl uppercase gap-44 lg:basis-full lg:flex">
          {LINK_ITEMS.map(({ href, label }) => (
            <Link href={href} key={href}>
              <p className="text-xl uppercase cursor-pointer h-9 hover:border-l-0 hover:border-r-0 hover:border hover:border-t-0 hover:border-b-4">
                {label}
              </p>
            </Link>
          ))}
        </div>
        <LanguagePicker className="hidden lg:block lg:basis-1/5" />
        <button
          className="block lg:hidden"
          aria-label="Menu button"
          title="Menu button"
        >
          <MenuIcon fontSize="large" onClick={() => setResponsive(true)} />
        </button>
      </nav>
      <ResponsiveNavbar
        items={LINK_ITEMS}
        responsive={responsive}
        onCloseMenu={setResponsive}
      />
    </>
  );
}
