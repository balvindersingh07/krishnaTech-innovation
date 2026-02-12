// src/app/sections/Footer.tsx
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
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
    icon: Linkedin,
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
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 border-t border-purple-700 px-4 sm:px-6 lg:px-8">
      {/* ✅ Big watermark brand text (fixed: more visible + no cutting) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* subtle glow blobs */}
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-pink-500/12 blur-3xl" />

        {/* watermark text (centered + responsive + no nowrap cutting) */}
        <div className="absolute inset-0 flex items-center justify-center select-none">
          <div className="text-center leading-none">
            <div className="text-[60px] sm:text-[110px] md:text-[150px] lg:text-[200px] font-extrabold tracking-tight text-white/[0.08]">
              KrishnaTech
            </div>
            <div className="-mt-4 sm:-mt-6 md:-mt-8 text-[48px] sm:text-[90px] md:text-[120px] lg:text-[160px] font-extrabold tracking-tight text-white/[0.06]">
              Innovations
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto pt-10 pb-10">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-10">
          {/* Brand + Social */}
          <div className="lg:col-span-2">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl p-2 bg-white/10 border border-purple-400/30 backdrop-blur-sm shadow-md flex-shrink-0">
                <img
                  src={logo}
                  alt="KrishnaTech Innovations"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <div className="text-xl sm:text-2xl font-bold leading-snug flex flex-wrap items-baseline gap-x-2">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                    KrishnaTech
                  </span>
                  <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                    Innovations
                  </span>
                </div>

                <div className="text-purple-300 italic text-sm mt-1">
                  Technology with Divine Intelligence
                </div>
              </div>
            </div>

            <p className="text-purple-200 max-w-md leading-relaxed">
              We design and build scalable web & mobile products, secure backend
              systems, and growth-focused digital marketing — with clean UI/UX
              and reliable delivery.
            </p>

            <div className="flex items-center gap-4 mt-6">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="group w-11 h-11 flex items-center justify-center rounded-full
                             border border-purple-400/50 bg-white/10
                             transition-all duration-300 shadow-md
                             hover:shadow-purple-500/60 hover:-translate-y-[1px]
                             hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-500"
                >
                  <Icon className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white mb-4 font-semibold">Company</h3>
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
                onClick={() => onScroll("portfolio")}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                Our Work
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

          {/* Services */}
          <div>
            <h3 className="text-white mb-4 font-semibold">Services</h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => onScroll("services")}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                Web & Mobile Development
              </button>
              <button
                onClick={() => onScroll("services")}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                Software Development
              </button>
              <button
                onClick={() => onScroll("services")}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                Digital Marketing (SEO/Ads)
              </button>
              <button
                onClick={() => onScroll("services")}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                Social Media Management
              </button>
              <button
                onClick={() => onScroll("process")}
                className="text-purple-200 hover:text-white transition-colors text-left"
              >
                Process & Support
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4 font-semibold">Contact</h3>

            <div className="space-y-4">
              <a
                href="tel:+919784903092"
                className="flex items-start gap-3 text-purple-200 hover:text-white transition-colors"
              >
                <span className="w-9 h-9 rounded-xl bg-white/10 border border-purple-400/25 flex items-center justify-center">
                  <Phone className="w-4.5 h-4.5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-white/90 text-sm font-semibold">
                    Phone
                  </span>
                  <span className="block text-sm">+91 9784903092</span>
                </span>
              </a>

              <a
                href="mailto:contact@krishnatechinnovations.com"
                className="flex items-start gap-3 text-purple-200 hover:text-white transition-colors"
              >
                <span className="w-9 h-9 rounded-xl bg-white/10 border border-purple-400/25 flex items-center justify-center">
                  <Mail className="w-4.5 h-4.5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-white/90 text-sm font-semibold">
                    Email
                  </span>
                  <span className="block text-sm break-all">
                    contact@krishnatechinnovations.com
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3 text-purple-200">
                <span className="w-9 h-9 rounded-xl bg-white/10 border border-purple-400/25 flex items-center justify-center">
                  <MapPin className="w-4.5 h-4.5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-white/90 text-sm font-semibold">
                    Location
                  </span>
                  <span className="block text-sm">
                    Ganganagar, Rajasthan, India
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-7 border-t border-purple-700/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-purple-200 text-sm text-center md:text-left">
            © {year} KrishnaTech Innovations. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <button
              onClick={onOpenPrivacy}
              className="text-purple-200 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </button>
            <span className="text-purple-500/80">|</span>
            <button
              onClick={onOpenTerms}
              className="text-purple-200 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
