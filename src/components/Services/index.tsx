import ServiceCategory from "@/components/Services/ServiceItem";

export default function Services({ services }) {
  if (!services) return <></>;

  return (
    <section className="flex flex-col items-center justify-center py-16">
      <p className="text-3xl font-bold font-quicksand">{services.title}</p>
      <div className="flex flex-col flex-wrap gap-8 mt-16 xl:flex-row">
        {services.items.map((category, i) => (
          <ServiceCategory
            service={{ ...category, item: i }}
            key={category._uid}
          />
        ))}
      </div>
    </section>
  );
}
