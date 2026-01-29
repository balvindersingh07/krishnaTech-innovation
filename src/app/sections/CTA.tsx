import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

type Props = {
  onOpenContact: () => void;
};

export default function CTA({ onOpenContact }: Props) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-2xl p-12 shadow-2xl"
        >
          <h2 className="text-4xl sm:text-5xl text-white mb-4 font-bold">
            Have an Idea? Let's Build It Together.
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Schedule a free strategy call to discuss your project and receive a customized plan.
          </p>
          <button
            onClick={onOpenContact}
            className="px-8 py-4 bg-white text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2 font-medium"
          >
            BOOK A FREE STRATEGY CALL <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
