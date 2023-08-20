import { i18n } from "next-i18next";

//function that returns language param since StoryblokCMS expects "en" as default value
export function getQueryLocale() {
  const locale = i18n.language;
  return locale === "en" ? null : { language: locale };
}
