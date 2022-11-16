import { useRouter } from "next/router";
import LanguagePicker from "./LanguagePicker";
import NavbarItem from "./NavbarItem";

function getNavbarItems(route: string) {
  if (route == "/content") {
    return <NavbarItem routeName="Home" href="/" />;
  }
  return (
    <>
      <NavbarItem routeName="competences" />
      <NavbarItem routeName="projects" />
      <NavbarItem routeName="content" href="/content" />
    </>
  );
}

export default function Navbar() {
  const router = useRouter();
  console.log(
    "🚀 ~ file: Navbar.tsx ~ line 20 ~ Navbar ~ router",
    router.pathname
  );
  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between h-24 px-10 py-4 text-white bg-secondary">
      <div className="flex items-center pl-3 text-3xl uppercase border-l-8 border-blue-400 lg:basis-2/5">
        <p>Gustavo Ferreira</p>
      </div>
      <div className="justify-center hidden text-xl uppercase gap-44 lg:basis-full lg:flex">
        {getNavbarItems(router.pathname)}
      </div>
      <LanguagePicker className="lg:basis-1/5" />
    </nav>
  );
}
