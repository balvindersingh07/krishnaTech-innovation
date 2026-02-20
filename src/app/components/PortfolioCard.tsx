import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  onClick: () => void;
}

export function PortfolioCard({
  title,
  description,
  image,
  category,
  onClick,
}: PortfolioCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-purple-300 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-purple-200/40"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Smooth overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition" />

        {/* Category badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white text-xs rounded-full shadow-lg font-medium">
          {category}
        </div>

        {/* Hover CTA */}
        <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <span className="flex items-center gap-2 text-white font-medium text-sm">
            View Case Study
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-purple-600 transition">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
