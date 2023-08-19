import { useState } from "react";

import { useRouter } from "next/router";

import MenuIcon from "@mui/icons-material/Menu";

import LanguagePicker from "./LanguagePicker";
import NavbarItem from "./NavbarItem";
import ResponsiveNavbar from "./ResponsiveNavbar";

export function getNavbarItems(route: string, onCloseMenu) {
  if (route == "/content") {
    return (
      <NavbarItem routeName="Home" href="/" closeResponsiveMenu={onCloseMenu} />
    );
  }
  return (
    <>
      <NavbarItem routeName="competences" closeResponsiveMenu={onCloseMenu} />
      <NavbarItem routeName="projects" closeResponsiveMenu={onCloseMenu} />
      <NavbarItem
        routeName="content"
        href="/content"
        closeResponsiveMenu={onCloseMenu}
      />
    </>
  );
}

export default function Navbar() {
  const router = useRouter();
  const [responsive, setResponsive] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 flex items-center justify-between h-24 px-10 py-4 text-white bg-secondary">
        <div className="pl-3 text-3xl uppercase border-l-8 border-blue-400 lg:basis-2/5">
          <p className="flex items-center gap-3">
            Gustavo <span className="hidden lg:block">Ferreira</span>
          </p>
        </div>
        <div className="justify-center hidden py-2 text-xl uppercase gap-44 lg:basis-full lg:flex">
          {getNavbarItems(router.pathname, null)}
        </div>
        <LanguagePicker className="hidden lg:block lg:basis-1/5" />
        <button className="block lg:hidden">
          <MenuIcon fontSize="large" onClick={() => setResponsive(true)} />
        </button>
      </nav>
      <ResponsiveNavbar responsive={responsive} onCloseMenu={setResponsive} />
    </>
  );
}
