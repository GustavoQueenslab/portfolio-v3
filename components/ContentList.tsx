import { articles } from "../lib/content/articles";
import { components } from "../lib/content/components";
import { projects } from "../lib/content/projects";
import { ContentProps } from "./HorizontalContent";
import HorizontalContent from "./HorizontalContentGroup";

interface ContentListProps {
  category: number;
}

function changeShowedCategory(actualCategory: number) {
  switch (actualCategory) {
    case 0:
      return <HorizontalContent content={components} />;
    case 1:
      return <HorizontalContent content={articles} />;
    case 2:
      return <HorizontalContent content={projects} />;
    default:
      return <HorizontalContent content={components} />;
  }
}

export default function ContentList({ category }: ContentListProps) {
  return changeShowedCategory(category);
}
