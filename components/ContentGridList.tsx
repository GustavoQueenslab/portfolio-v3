import ContentGridCard from "./ContentGridCard";

export default function ContentGridList({ contentList }) {
  return (
    <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
      {contentList.map((item: any, i: number) => (
        <ContentGridCard content={item} key={i} />
      ))}
    </div>
  );
}
