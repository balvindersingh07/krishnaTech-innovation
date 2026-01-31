// src/app/sections/Footer.tsx
import { Instagram, Facebook, Send } from "lucide-react";
import logo from "../../assets/logo.png";

type Props = {
  onScroll: (id: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
};

const SOCIAL_LINKS = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/krishnatechinnovations/",
  },
  {
    icon: Send, // ✅ LinkedIn icon
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/krishnatech-innovation/?viewAsMember=true",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587314817968",
  },
];

export default function Footer({ onScroll, onOpenPrivacy, onOpenTerms }: Props) {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 border-t border-purple-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand + Social */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* ✅ LOGO WRAPPER (theme according) */}
              <div
                className="w-14 h-14 rounded-xl p-2
                           bg-white/10 border border-purple-400/30
                           backdrop-blur-sm shadow-md"
              >
                <img
                  src={logo}
                  alt="KrishnaTech Innovations"
                  className="w-full h-full object-contain"
                />
              </div>

              <span className="text-xl text-white font-bold leading-tight">
                KrishnaTech <span className="text-purple-300">Innovations</span>
              </span>
            </div>

            <p className="text-purple-300 italic mb-6">
              Technology with Divine Intelligence
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-6">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="group w-12 h-12 flex items-center justify-center rounded-full
                             border-2 border-purple-400/60
                             bg-white/10
                             transition-all duration-300
                             shadow-md hover:shadow-purple-500/60
                             hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-500"
                >
                  <Icon className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4 font-semibold">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => onScroll("home")}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => onScroll("about")}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => onScroll("services")}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => onScroll("process")}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                Process
              </button>
              <button
                onClick={() => onScroll("portfolio")}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => onScroll("testimonials")}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => onScroll("contact")}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white mb-4 font-semibold">Legal</h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={onOpenPrivacy}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                Privacy Policy
              </button>
              <button
                onClick={onOpenTerms}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-700 pt-8 text-center">
          <p className="text-purple-200">
            © 2022 KrishnaTech Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
