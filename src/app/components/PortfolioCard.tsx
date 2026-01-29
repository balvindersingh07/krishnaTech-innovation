import { motion } from 'motion/react';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  onClick: () => void;
}

export function PortfolioCard({ title, description, image, category, onClick }: PortfolioCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-xl overflow-hidden border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-orange-200/50"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm rounded-full shadow-lg font-medium">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl text-slate-800 mb-2 font-semibold">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </motion.div>
  );
}