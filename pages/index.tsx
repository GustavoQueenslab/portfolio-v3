import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Certificates from "@/components/Certificated";
import Competences from "@/components/Competences";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

import ChatbotButton from "../src/components/chatbot/ChatbotButton";
import Footer from "../src/components/Footer";
import Layout from "../src/components/Layout";
import Recomendation from "../src/components/Recommendation";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

function Home() {
  return (
    <>
      <Layout>
        <Introduction />
        <Competences />
        <Services />
        <Certificates />
        <Projects />
        <Recomendation />
        <ChatbotButton />
        <Footer />
      </Layout>
    </>
  );
}

export default Home;
