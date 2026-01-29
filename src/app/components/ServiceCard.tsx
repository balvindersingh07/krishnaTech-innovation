import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

export function ServiceCard({ icon: Icon, title, description, onClick }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-purple-200/50"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 shadow-lg">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl text-slate-800 mb-3 font-semibold">{title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
      <button
        onClick={onClick}
        className="text-purple-600 hover:text-pink-600 transition-colors inline-flex items-center gap-2 font-medium"
      >
        View Details
        <span>→</span>
      </button>
    </motion.div>
  );
}