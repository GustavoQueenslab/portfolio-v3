import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Languages from "../components/Languages";
import Services from "../components/Services";
import Certificates from "../components/Certificates";
import Projects from "../components/Projects";
import Recomendation from "../components/Recommendation";
import ChatbotButton from "../components/chatbot/ChatbotButton";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";

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
