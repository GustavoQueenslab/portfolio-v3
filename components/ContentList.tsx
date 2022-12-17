import HorizontalContent from "./HorizontalContentGroup";

interface ContentListProps {
  category: number;
}

function changeShowedCategory(actualCategory: number) {
  switch (actualCategory) {
    case 0:
      return <HorizontalContent />;
    case 1:
      return <p>232</p>;
    default:
      return <p>teste</p>;
  }
}

export default function ContentList({ category }: ContentListProps) {
  return changeShowedCategory(category);
}
