import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

type Props = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
  onScroll: (id: string) => void;
  onOpenContact: () => void;
};

export default function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
  onScroll,
  onOpenContact,
}: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-purple-200 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="KrishnaTech Innovations"
              className="w-18 h-14 sm:w-16 sm:h-16 object-contain"
            />

            <div className="leading-tight">
              <span className="block text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
                KrishnaTech{" "}
                <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                  Innovations
                </span>
              </span>

              <span className="block text-xs sm:text-sm text-slate-500 italic">
                Technology with Divine Intelligence
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => onScroll("home")} className="text-slate-700 hover:text-purple-600 font-medium">
              Home
            </button>
            <button onClick={() => onScroll("about")} className="text-slate-700 hover:text-purple-600 font-medium">
              About
            </button>
            <button onClick={() => onScroll("services")} className="text-slate-700 hover:text-purple-600 font-medium">
              Services
            </button>
            <button onClick={() => onScroll("process")} className="text-slate-700 hover:text-purple-600 font-medium">
              Process
            </button>
            <button onClick={() => onScroll("portfolio")} className="text-slate-700 hover:text-purple-600 font-medium">
              Portfolio
            </button>
            <button onClick={() => onScroll("testimonials")} className="text-slate-700 hover:text-purple-600 font-medium">
              Testimonials
            </button>
            <button onClick={() => onScroll("contact")} className="text-slate-700 hover:text-purple-600 font-medium">
              Contact
            </button>

            <button
              onClick={onOpenContact}
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 font-medium"
            >
              GET STARTED
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-purple-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden py-4 border-t border-purple-200"
          >
            <div className="flex flex-col gap-4">
              <button onClick={() => onScroll("home")} className="text-slate-700 hover:text-purple-600 text-left font-medium">Home</button>
              <button onClick={() => onScroll("about")} className="text-slate-700 hover:text-purple-600 text-left font-medium">About</button>
              <button onClick={() => onScroll("services")} className="text-slate-700 hover:text-purple-600 text-left font-medium">Services</button>
              <button onClick={() => onScroll("process")} className="text-slate-700 hover:text-purple-600 text-left font-medium">Process</button>
              <button onClick={() => onScroll("portfolio")} className="text-slate-700 hover:text-purple-600 text-left font-medium">Portfolio</button>
              <button onClick={() => onScroll("testimonials")} className="text-slate-700 hover:text-purple-600 text-left font-medium">Testimonials</button>
              <button onClick={() => onScroll("contact")} className="text-slate-700 hover:text-purple-600 text-left font-medium">Contact</button>

              <button
                onClick={() => {
                  onOpenContact();
                  setMobileMenuOpen(false);
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-lg font-medium"
              >
                GET STARTED
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}