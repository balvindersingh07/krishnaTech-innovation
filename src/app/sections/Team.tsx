// src/app/sections/Team.tsx
import { motion } from "motion/react";

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

type Props = {
  members: TeamMember[];
};

export default function Team({ members }: Props) {
  return (
    <section
      id="team"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100/50 via-pink-100/50 to-orange-100/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Team
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 place-items-center">
          {members.map((m, idx) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex flex-col items-center text-center"
            >
              {/* Hover only image */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 0.5 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="relative"
              >
                {/* glow */}
                <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 opacity-0 blur-xl transition-opacity duration-300 hover:opacity-45" />

                {/* image (NO white background wrapper) */}
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-[26px] shadow-xl"
                />
              </motion.div>

              <h3 className="mt-4 text-sm sm:text-base font-semibold text-slate-900">
                {m.name}
              </h3>

              <p className="mt-1 text-[12px] sm:text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {m.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
