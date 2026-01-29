import type { Service } from "../data/services";
import { ServiceCard } from "../components/ServiceCard";

type Props = {
  services: Service[];
  onSelectService: (id: string) => void;
};

export default function Services({ services, onSelectService }: Props) {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 font-bold">
            Our Services
          </h2>
          <p className="text-xl text-slate-600">
            Innovative tech solutions for modern business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onClick={() => onSelectService(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
