import Link from "next/link";
import { useRouter } from "next/router";

import CloseIcon from "@mui/icons-material/Close";

import LanguagePicker from "../LanguagePicker";

export default function ResponsiveNavbar({ responsive, onCloseMenu, items }) {
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
            <nav className="flex flex-col gap-4 text-center mt-28">
              {items.map(({ href, label }) => (
                <button
                  className="text-xl uppercase cursor-pointer h-9 hover:border-l-0 hover:border-r-0 hover:border hover:border-t-0 hover:border-b-4"
                  onClick={() => onCloseMenu(false)}
                  key={href}
                >
                  <Link href={href}>{label}</Link>
                </button>
              ))}
              <ul className="flex flex-col items-center gap-16">
                <LanguagePicker className="lg:basis-1/5" />
              </ul>
            </nav>
          </section>
        </>
      )}
    </>
  );
}
