import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/navbar";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

function Home(props: any) {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div>{t("home:introduction")}</div>
    </>
  );
}

export default Home;
