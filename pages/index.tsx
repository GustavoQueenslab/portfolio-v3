import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Certificates from "../components/Certificates";
import ChatbotButton from "../components/chatbot/ChatbotButton";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import Languages from "../components/Languages";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Recomendation from "../components/Recommendation";
import Services from "../components/Services";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

function Home(props: any) {
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
