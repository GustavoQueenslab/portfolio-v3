import { graphQLClient } from "@/lib/api";
import { aboutMeQuery } from "@/queries/aboutMe";
import { getQueryLocale } from "@/utils/storyblok";

interface AboutMe {
  AboutmeItem: {
    content: {
      title: string;
      description: string;
    };
  };
}

const getAboutMe = async (): Promise<AboutMe> => {
  return await graphQLClient.request(aboutMeQuery, getQueryLocale());
};

const homeService = {
  getAboutMe,
};

export default homeService;
