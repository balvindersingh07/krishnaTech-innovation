import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

type Props = {
  onExploreServices: () => void;
  onOpenContact: () => void;
};

export default function Hero({ onExploreServices, onOpenContact }: Props) {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl text-slate-900 mb-6 leading-tight font-bold"
          >
            Launch Faster. Scale Smarter. <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Build Digital Products That Grow
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We help startups and businesses design, develop, and optimize web &
            mobile solutions—focused on performance, conversion, and measurable
            results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={onExploreServices}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2 font-medium"
            >
              VIEW SERVICES
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenContact}
              className="px-8 py-4 bg-white hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 text-slate-800 rounded-lg transition-all duration-300 border-2 border-purple-300 hover:border-purple-500 flex items-center justify-center gap-2 shadow-md font-medium"
            >
              BOOK A FREE CONSULTATION
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
