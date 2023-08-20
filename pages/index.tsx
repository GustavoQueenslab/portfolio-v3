import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Certificates from "../src/components/Certificates";
import ChatbotButton from "../src/components/chatbot/ChatbotButton";
import Footer from "../src/components/Footer";
import Introduction from "../src/components/Introduction";
import Languages from "../src/components/Languages";
import Layout from "../src/components/Layout";
import Projects from "../src/components/Projects";
import Recomendation from "../src/components/Recommendation";
import Services from "../src/components/Services";

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
        <Languages />
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
