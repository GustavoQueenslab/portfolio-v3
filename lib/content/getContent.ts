import { components } from "../queries/components";
import { storyblokQuery } from "../services/storyblok";

export async function getContent(tabIndex: number) {
  switch (tabIndex) {
    case 0:
      return await storyblokQuery(components);
    case 1:
      return await storyblokQuery(components);
    case 2:
      return await storyblokQuery(components);
    default:
      return await storyblokQuery(components);
  }
}
