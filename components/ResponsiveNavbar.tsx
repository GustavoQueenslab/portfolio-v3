import { useRouter } from "next/router";

import CloseIcon from "@mui/icons-material/Close";

import LanguagePicker from "./LanguagePicker";
import { getNavbarItems } from "./navbar";

export default function ResponsiveNavbar({ responsive, onCloseMenu }) {
  const router = useRouter();
  return (
    <>
      {responsive && (
        <>
          <section className="fixed top-0 left-0 z-50 w-full h-full bg-white">
            <div className="sticky top-0 z-40 flex items-center justify-between h-24 px-10 py-4 text-white bg-secondary">
              <div className="pl-3 text-3xl uppercase border-l-8 border-blue-400">
                <p>Gustavo</p>
              </div>
              <CloseIcon fontSize="large" onClick={() => onCloseMenu(false)} />
            </div>
            <nav className="text-center mt-28">
              <ul className="flex flex-col items-center gap-16">
                {getNavbarItems(router.pathname, onCloseMenu)}
                <LanguagePicker className="lg:basis-1/5" />
              </ul>
            </nav>
          </section>
        </>
      )}
    </>
  );
}
