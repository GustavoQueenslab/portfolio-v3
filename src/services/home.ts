import { graphQLClient } from "@/lib/api";
import { aboutMeQuery } from "@/queries/aboutMe";
import { competencesQuery } from "@/queries/competences";
import { servicesQuery } from "@/queries/services";
import type { AboutMe, Competences, Services } from "@/types/storyblok";
import { getQueryLocale } from "@/utils/storyblok";

const getAboutMe = async (): Promise<AboutMe> => {
  return await graphQLClient.request(aboutMeQuery, getQueryLocale());
};

const getCompetences = async (): Promise<Competences> => {
  return await graphQLClient.request(competencesQuery, getQueryLocale());
};

const getServices = async (): Promise<Services> => {
  return await graphQLClient.request(servicesQuery, getQueryLocale());
};

const homeService = {
  getAboutMe,
  getCompetences,
  getServices,
};

export default homeService;
