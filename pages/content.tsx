import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["content"])),
    },
  };
}

function Content(props: any) {
  return (
    <>
      <Layout></Layout>
    </>
  );
}

export default Content;
