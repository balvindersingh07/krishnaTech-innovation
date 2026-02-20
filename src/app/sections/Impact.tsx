// src/app/sections/Impact.tsx
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export default function Impact() {
  const stats: Stat[] = [
    { value: 50, suffix: "+", label: "Projects Delivered" },
    { value: 8, suffix: "+", label: "Years Experience" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 3, label: "Countries Served" },
  ];

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const increment = stat.value / 60;

      return setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[index] < stat.value) {
            updated[index] = Math.min(
              stat.value,
              updated[index] + increment
            );
          }
          return updated;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Real Impact. Measurable Results.
          </h2>
          <p className="text-purple-200 text-lg">
            We build technology that delivers performance, scale, and growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl"
            >
              <h3 className="text-4xl font-bold text-white mb-3">
                {Math.floor(counts[index])}
                {item.suffix}
              </h3>
              <p className="text-purple-200 text-sm font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
