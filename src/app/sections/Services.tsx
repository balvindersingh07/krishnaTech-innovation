import type { LucideIcon } from "lucide-react";
import {
  Monitor,
  Smartphone,
  Server,
  Database,
  Cable,
  Cloud,
  CreditCard,
} from "lucide-react";

import type { Service } from "../data/services";
import { ServiceCard } from "../components/ServiceCard";

type Props = {
  services: Service[];
  onSelectService: (id: string) => void;
};

type TechStackGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

export default function Services({ services, onSelectService }: Props) {
  // ✅ Tech stack list (same theme/UX, upgraded cards: icon + hover + premium)
  const techStacks: TechStackGroup[] = [
    {
      title: "Web Frontend",
      icon: Monitor,
      items: [
        "React",
        "TypeScript",
        "Next.js",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      title: "Mobile Apps",
      icon: Smartphone,
      items: [
        "React Native (Expo / CLI)",
        "Flutter (Dart)",
        "Android (Kotlin)",
        "iOS (Swift)",
        "Ionic + Capacitor",
        "Kotlin Multiplatform (KMP)",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      items: [
        "Node.js (Express / NestJS)",
        "Python (FastAPI / Django)",
        "Java (Spring Boot)",
        ".NET (ASP.NET Core)",
        "Go (Gin / Fiber)",
      ],
    },
    {
      title: "Databases",
      icon: Database,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"],
    },
    {
      title: "APIs & Realtime",
      icon: Cable,
      items: ["REST APIs", "GraphQL", "WebSockets", "Socket.IO", "Webhooks"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      items: ["Docker", "Nginx", "CI/CD", "AWS", "Vercel", "Netlify"],
    },
    {
      title: "Payments & Integrations",
      icon: CreditCard,
      items: ["Stripe", "Razorpay", "WhatsApp API", "Email SMTP", "3rd-party APIs"],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 font-bold">
            Our Services
          </h2>
          <p className="text-xl text-slate-600">
            Innovative tech solutions for modern business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onClick={() => onSelectService(service.id)}
            />
          ))}
        </div>

        {/* ✅ Technologies we work with (same theme, premium cards) */}
        <div className="mt-14">
          <div className="text-center mb-8">
            <h3 className="inline-block text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
               Technologies We Work With
            </h3>
            <p className="text-slate-600 mt-2">
              Web + Mobile + Backend stacks for scalable, secure, and high-performance
              products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStacks.map((group) => {
              const Icon = group.icon;

              return (
                <div key={group.title} className="group relative">
                  {/* gradient border */}
                  <div className="rounded-2xl p-[1px] bg-gradient-to-r from-purple-300/60 via-pink-300/60 to-orange-300/60 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="rounded-2xl bg-white/65 backdrop-blur border border-white/60 p-6">
                      {/* header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-[1.03]">
                            <Icon className="w-5 h-5" />
                          </div>

                          <div>
                            <div className="font-semibold text-slate-900 leading-tight">
                              {group.title}
                            </div>
                            <div className="text-xs text-slate-500 mt-1">
                              Production-ready stack options
                            </div>
                          </div>
                        </div>

                        <div className="h-2 w-20 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                      </div>

                      {/* chips */}
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-full text-sm border border-purple-200/70 bg-white/70 text-slate-700 transition-all duration-200 hover:bg-purple-50/70 hover:border-purple-300 hover:-translate-y-[1px]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-6 text-sm text-slate-500">
            Need a different stack? We can adapt based on your product requirements.
          </div>
        </div>
      </div>
    </section>
  );
}
