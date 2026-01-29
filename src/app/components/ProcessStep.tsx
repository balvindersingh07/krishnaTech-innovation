import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stepNumber: number;
}

export function ProcessStep({ icon: Icon, title, description, stepNumber }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: stepNumber * 0.1 }}
      className="relative bg-white rounded-xl p-8 border-2 border-teal-200 hover:border-teal-400 transition-all duration-300 shadow-md"
    >
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg font-bold">
        {stepNumber}
      </div>
      <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center mb-4 mt-2">
        <Icon className="w-7 h-7 text-teal-600" />
      </div>
      <h3 className="text-xl text-slate-800 mb-2 font-semibold">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}