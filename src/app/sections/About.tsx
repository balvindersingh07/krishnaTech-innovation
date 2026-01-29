import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100/50 via-pink-100/50 to-orange-100/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 font-bold">
            About KrishnaTech Innovations
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed">
            We are a technology services company specializing in software
            development, digital transformation, and strategic growth solutions
            that help businesses succeed online.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
