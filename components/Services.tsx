import ServiceCategory from "./ServiceCategory";
import ServicesCategories from "../lib/services";

export default function Services() {
  return (
    <section className="flex flex-col items-center justify-center py-16">
      <p className="text-2xl font-bold">Services</p>
      <div className="flex flex-col gap-8 mt-16 xl:flex-row">
        {ServicesCategories.map((category, index) => (
          <ServiceCategory
            title={`${index + 1}. ${category.title}`}
            body={category.body}
            index={index}
            key={category.id}
          />
        ))}
      </div>
    </section>
  );
}
