import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Certificates from "@/components/Certificated";
import ChatbotButton from "@/components/Chatbot/ChatbotButton";
import Competences from "@/components/Competences";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Layout from "@/components/Layout";
import Projects from "@/components/Projects";
import Recomendation from "@/components/Recommendation";
import Services from "@/components/Services";

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
