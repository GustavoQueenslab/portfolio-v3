import { components } from "../queries/components";
import { storyblokQuery } from "./storyblok";

export function getContent(tabIndex: number) {
  switch (tabIndex) {
    case 0:
      storyblokQuery(components);
      break;
    case 1:
      storyblokQuery(components);
      break;
    case 2:
      storyblokQuery(components);
      break;
    default:
      storyblokQuery(components);
      break;
  }
}
