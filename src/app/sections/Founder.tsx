// src/app/sections/Founder.tsx
import { motion } from "motion/react";
import founderImg from "../../assets/team/balvindersinghsoni.png";
import { Linkedin } from "lucide-react";

export default function Founder() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8 bg-white"
    >
      {/* Floating Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:justify-start"
          >
            <motion.div
              whileHover={{ rotateY: 6, rotateX: 4 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative group"
            >
              {/* Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-orange-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <img
                src={founderImg}
                alt="Balvinder Singh Soni"
                className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] object-cover rounded-3xl shadow-2xl border border-white/50 backdrop-blur"
              />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Meet The Founder
            </h2>

            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2">
              Balvinder Singh Soni
            </h3>

            <p className="text-purple-600 font-medium mb-6 text-lg">
              Founder & Lead Software Architect
            </p>

            {/* Premium Quote Block */}
            <div className="relative mb-6 rounded-2xl bg-white/70 backdrop-blur border border-purple-200 p-6 shadow-md">
              <p className="text-slate-700 text-lg leading-relaxed">
                “Technology should accelerate business growth —
                not slow it down. Every solution we build is engineered
                for performance, scalability, and measurable impact.”
              </p>
            </div>

            <p className="text-slate-700 leading-relaxed mb-5 text-lg">
              KrishnaTech Innovations was founded with a clear mission —
              to help businesses launch faster and scale smarter using
              modern web technologies, scalable cloud architecture,
              and performance-driven design.
            </p>

            <p className="text-slate-700 leading-relaxed text-lg">
              With expertise in Full-Stack Development, SaaS systems,
              Mobile Apps, and DevOps — the focus remains simple:
              <span className="font-semibold">
                {" "}Deliver real business results — not just code.
              </span>
            </p>

            {/* CTA + LinkedIn */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-medium shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
              >
                Work With Us
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-purple-200 shadow hover:bg-purple-50 transition"
              >
                <Linkedin className="w-5 h-5 text-purple-600" />
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
