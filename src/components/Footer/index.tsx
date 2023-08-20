import Link from "next/link";

import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";

import Wrapper from "@/components/Wrapper";

const socialMediaLinks = [
  {
    url: "https://www.instagram.com/gs_ferreiraaa/",
    icon: <Instagram fontSize="large" />,
  },
  {
    url: "https://github.com/Gustavosf2003",
    icon: <GitHub fontSize="large" />,
  },
  {
    url: "https://www.linkedin.com/in/gustavo-de-sousa-ferreira-/",
    icon: <LinkedIn fontSize="large" />,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper className="px-8 pb-24 lg:pb-5 lg:px-36">
      <footer className="flex items-center justify-between text-primary">
        <p className="text-xl text-left lg:block">Made by Gustavo Ferreira</p>
        <p className="text-xl text-left lg:hidden">@ {currentYear}</p>
        <section className="flex items-center gap-8 lg:gap-10">
          {socialMediaLinks.map((link) => (
            <Link key={link.url} href={link.url}>
              <div className="transform scale-150 cursor-pointer">
                {link.icon}
              </div>
            </Link>
          ))}
        </section>
      </footer>
    </Wrapper>
  );
};

export default Footer;
