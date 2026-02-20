// src/app/sections/Team.tsx
import { motion } from "motion/react";

export default function Team() {
  const points = [
    {
      title: "⚡ Fast & Reliable Delivery",
      desc: "Structured workflow with on-time execution and zero compromise on quality.",
    },
    {
      title: "🧠 Scalable Architecture",
      desc: "Built with clean code, modular structure, and cloud-ready infrastructure.",
    },
    {
      title: "📈 Growth-Focused Approach",
      desc: "Every project is optimized for performance, conversion, and measurable results.",
    },
    {
      title: "🤝 Transparent Communication",
      desc: "Clear updates, milestone tracking, and long-term technical support.",
    },
  ];

  return (
    <section
      id="team"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100/50 via-pink-100/50 to-orange-100/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Why Businesses Choose KrishnaTech
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            We combine technical excellence with strategic thinking to build digital
            solutions that scale and deliver real business impact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md border border-purple-200 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
