import Wrapper from "./Wrapper";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
export default function Footer() {
  return (
    <Wrapper className="px-8 pb-24 lg:pb-5 lg:px-36">
      <footer className="flex items-center justify-between text-primary">
        <p className="hidden text-xl text-left lg:block">
          Made by Gustavo Ferreira
        </p>
        <p className="block text-xl text-left lg:hidden">@2022</p>
        <section className="flex items-center gap-8 lg:gap-10">
          <Link href="https://www.instagram.com/gs_ferreiraaa/">
            <InstagramIcon
              fontSize="large"
              className="transform scale-150"
            ></InstagramIcon>
          </Link>
          <Link href="https://github.com/Gustavosf2003">
            <GitHubIcon
              fontSize="large"
              className="transform scale-150"
            ></GitHubIcon>
          </Link>
          <Link href="https://www.linkedin.com/in/gustavo-de-sousa-ferreira-/">
            <LinkedInIcon
              fontSize="large"
              className="transform scale-150"
            ></LinkedInIcon>
          </Link>
        </section>
      </footer>
    </Wrapper>
  );
}
