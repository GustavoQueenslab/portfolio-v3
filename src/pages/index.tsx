import { useQueries } from "@tanstack/react-query";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Certificates from "@/components/Certificated";
import ChatbotButton from "@/components/chatbot/ChatbotButton";
import Competences from "@/components/Competences";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Layout from "@/components/Layout";
import Projects from "@/components/Projects";
import Recomendation from "@/components/Recommendation";
import Services from "@/components/Services";
import homeService from "@/services/home";

function Home() {
  const [aboutMe, competences, services] = useQueries({
    queries: [
      {
        queryKey: ["aboutMe"],
        queryFn: homeService.getAboutMe,
      },
      {
        queryKey: ["competences"],
        queryFn: homeService.getCompetences,
      },
      {
        queryKey: ["services"],
        queryFn: homeService.getServices,
      },
    ],
  });
  return (
    <Layout>
      <Introduction introduction={aboutMe.data?.AboutmeItem.content} />
      <Competences competences={competences.data?.CompetencesItem.content} />
      <Services services={services.data?.ServicesItem.content} />
      <Certificates />
      <Projects />
      <Recomendation />
      <ChatbotButton />
      <Footer />
    </Layout>
  );
}

export default Home;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
