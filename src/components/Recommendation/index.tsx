import RecomendationCarroussel from "./RecommendationCarroussel";

export default function Recommendation() {
  return (
    <section className="px-6 py-20 text-white lg:px-60 bg-secondary">
      <h3 className="text-2xl font-bold text-center font-quicksand">
        Recommendations
      </h3>
      <RecomendationCarroussel />
    </section>
  );
}
