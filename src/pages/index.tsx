"use client";

import { useQueries } from "@tanstack/react-query";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Certificates from "@/components/Certificated";
import ChatbotButton from "@/components/chatbot/ChatbotButton";
import Competences from "@/components/Competences";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Layout from "@/components/Layout";
import Metadata from "@/components/Metadata";
import Projects from "@/components/Projects";
import Recomendation from "@/components/Recommendation";
import Services from "@/components/Services";
import homeService from "@/services/home";

export default function Home() {
  const [
    aboutMe,
    competences,
    services,
    certificates,
    projects,
    recommendations,
  ] = useQueries({
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
      {
        queryKey: ["certificates"],
        queryFn: homeService.getCertificates,
      },
      {
        queryKey: ["projects"],
        queryFn: homeService.getProjects,
      },
      {
        queryKey: ["recommendations"],
        queryFn: homeService.getRecommendations,
      },
    ],
  });
  return (
    <Layout>
      <Metadata />
      <Introduction introduction={aboutMe.data?.AboutmeItem.content} />
      <Competences competences={competences.data?.CompetencesItem.content} />
      <Services services={services.data?.ServicesItem.content} />
      <Certificates
        certificates={certificates.data?.CertificatesItem.content}
      />
      <Projects projects={projects.data?.ProjectsItem.content} />
      <Recomendation
        recommendations={recommendations.data?.RecommendationsItem.content}
      />
      <ChatbotButton />
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}
