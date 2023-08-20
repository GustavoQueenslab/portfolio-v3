import ServiceCategory from "@/components/Services/ServiceItem";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section className="flex flex-col items-center justify-center py-16">
      <p className="text-3xl font-bold font-quicksand">Services</p>
      <div className="flex flex-col flex-wrap gap-8 mt-16 xl:flex-row">
        {services.map((category) => (
          <ServiceCategory service={category} key={category.id} />
        ))}
      </div>
    </section>
  );
}
