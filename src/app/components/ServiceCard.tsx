import { LucideIcon, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  onClick,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group relative h-full"
    >
      {/* Glow Aura */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-orange-400/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />

      <div className="h-full rounded-2xl p-[1px] bg-gradient-to-r from-purple-300/60 via-pink-300/60 to-orange-300/60 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-300/30">

        {/* Inner Card */}
        <div className="h-full rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 p-8 flex flex-col relative overflow-hidden">

          {/* Shine Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-12 translate-x-[-120%] group-hover:translate-x-[120%]" />

          {/* Top */}
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Icon className="w-7 h-7 text-white" />
            </div>

            <h3 className="text-xl text-slate-900 mb-3 font-semibold group-hover:text-purple-700 transition-colors duration-300">
              {title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed min-h-[72px]">
              {description}
            </p>
          </div>

          <div className="flex-grow" />

          {/* Bottom CTA */}
          <button
            onClick={onClick}
            className="relative mt-6 flex items-center justify-between font-medium text-purple-600 group-hover:text-pink-600 transition-all duration-300"
          >
            <span className="relative">
              Learn More
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 group-hover:w-full" />
            </span>

            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
