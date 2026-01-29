import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  delay?: number;
}

export function TestimonialCard({ quote, author, company, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white rounded-xl p-8 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 shadow-md"
    >
      <Quote className="w-10 h-10 text-yellow-500 mb-4" />
      <p className="text-slate-700 text-lg mb-6 leading-relaxed italic">"{quote}"</p>
      <div className="border-t border-yellow-200 pt-4">
        <p className="text-slate-800 font-semibold">{author}</p>
        <p className="text-slate-600 text-sm">{company}</p>
      </div>
    </motion.div>
  );
}