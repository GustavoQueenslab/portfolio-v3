import RecomendationCarroussel from "./RecommendationCarroussel";

export default function Recommendation({ recommendations }) {
  if (!recommendations) return <></>;
  return (
    <>
      <section className="flex flex-col items-center">
        <p className="text-3xl font-bold font-quicksand">
          {recommendations.title}
        </p>
        <div className="w-8 h-1 mt-1 bg-tertiary" />
        <section className="w-full px-6 py-10 mt-16 text-white lg:px-60 bg-secondary">
          <RecomendationCarroussel
            recommendations={recommendations.items ?? []}
          />
        </section>
      </section>
    </>
  );
}
