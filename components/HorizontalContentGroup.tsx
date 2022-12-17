import HorizontalContent, { ContentProps } from "./HorizontalContent";

export default function HorizontalContentGroup({ content }) {
  return (
    <>
      {content.map((item: ContentProps) => (
        <HorizontalContent
          key={item.title}
          title={item.title}
          category={item.category}
          description={item.description}
          url={item.url}
        />
      ))}
    </>
  );
}
