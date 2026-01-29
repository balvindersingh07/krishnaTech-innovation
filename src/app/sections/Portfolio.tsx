import type { PortfolioItem } from "../data/portfolio";
import { PortfolioCard } from "../components/PortfolioCard";

type Props = {
  items: PortfolioItem[];
  onSelect: (id: number) => void;
};

export default function Portfolio({ items, onSelect }: Props) {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4 font-bold">
            Our Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <PortfolioCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              category={item.category}
              onClick={() => onSelect(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
