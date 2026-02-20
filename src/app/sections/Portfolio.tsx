import { useState } from "react";
import type { PortfolioItem } from "../data/portfolio";
import { PortfolioCard } from "../components/PortfolioCard";

type Props = {
  items: PortfolioItem[];
  onSelect: (id: number) => void;
};

export default function Portfolio({ items, onSelect }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...new Set(items.map((i) => i.category))];

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            Our Work
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Real projects. Real results. We design and develop scalable
            digital products across industries and business models.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="transition-transform duration-300 hover:-translate-y-2"
            >
              <PortfolioCard
                title={item.title}
                description={item.description}
                image={item.image}
                category={item.category}
                onClick={() => onSelect(item.id)}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-4 text-lg">
            Have a project in mind?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-semibold shadow-lg hover:opacity-95 transition"
          >
            Let’s Build Something Amazing →
          </a>
        </div>

      </div>
    </section>
  );
}
