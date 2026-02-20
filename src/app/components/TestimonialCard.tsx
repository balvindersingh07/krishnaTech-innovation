import { Quote, Star, BadgeCheck } from "lucide-react";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface TestimonialCardProps {
  quote: ReactNode;
  author: ReactNode;
  company: string;
  rating?: number;
  country?: string;
  flag?: string;
  verified?: boolean;
  delay?: number;
}

export function TestimonialCard({
  quote,
  author,
  company,
  rating = 5,
  country = "",
  flag = "",
  verified = true,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="group relative h-full"
    >
      {/* Soft Glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />

      {/* Outer Gradient Border */}
      <div className="h-full rounded-2xl p-[1px] bg-gradient-to-r from-yellow-300/60 via-orange-300/60 to-red-300/60 shadow-sm group-hover:shadow-xl transition-all duration-300">
        
        {/* Inner Glass Card */}
        <div className="h-full rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 p-8 flex flex-col relative overflow-hidden">

          {/* Large Decorative Quote */}
          <Quote className="absolute -top-6 -right-6 w-24 h-24 text-yellow-100 opacity-40" />

          {/* ⭐ Star Rating */}
          <div className="flex items-center gap-1 mb-4 relative z-10">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          {/* 💬 Quote Text */}
          <div className="text-slate-700 text-sm leading-relaxed italic mb-6 relative z-10 min-h-[90px]">
            {quote}
          </div>

          <div className="flex-grow" />

          {/* 👤 Author Section */}
          <div className="border-t border-yellow-200/60 pt-4 mt-4 relative z-10">
            <div className="flex items-center justify-between">

              <div>
                <div className="text-slate-900 font-semibold text-sm flex items-center gap-2">
                  {author}
                  {verified && (
                    <BadgeCheck className="w-4 h-4 text-green-500" />
                  )}
                </div>
                <div className="text-slate-600 text-xs mt-1">
                  {company}
                </div>
              </div>

              {country && (
                <div className="text-xs text-slate-500 flex items-center gap-1">
                  {flag && <span>{flag}</span>}
                  <span>{country}</span>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
