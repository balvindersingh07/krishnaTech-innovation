import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

type Props = {
  onExploreServices: () => void;
  onOpenContact: () => void;
};

export default function Hero({ onExploreServices, onOpenContact }: Props) {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-24 px-4 sm:px-6 lg:px-8"
    >
      {/* 🌈 Animated Gradient Background Layer */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50" />

      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "linear-gradient(270deg, #a855f7, #ec4899, #f97316, #a855f7)",
          backgroundSize: "600% 600%",
        }}
      />

      {/* 🔥 Floating Blur Shapes */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute top-24 left-16 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-10 right-16 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
        
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-4xl sm:text-6xl lg:text-7xl text-slate-900 mb-6 leading-tight font-bold"
        >
          <span className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 -z-10" />

          Launch Faster. Scale Smarter. <br />
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
            We Build Performance-Driven Digital Products
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-700 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          We help startups, SaaS founders, and growing businesses transform ideas
          into scalable web & mobile solutions — engineered for speed,
          security, and measurable growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            onClick={onOpenContact}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-xl shadow-lg flex items-center justify-center gap-2 font-medium"
          >
            Get Free Strategy Call
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            onClick={onExploreServices}
            className="px-8 py-4 bg-white/80 backdrop-blur text-slate-800 rounded-xl border-2 border-purple-300 hover:border-purple-500 shadow-md flex items-center justify-center gap-2 font-medium"
          >
            View Our Work
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Micro Trust Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-sm text-slate-600"
        >
          ⚡ Fast delivery • 🔒 Secure architecture • 📈 Growth-focused execution
        </motion.p>

      </div>
    </section>
  );
}
