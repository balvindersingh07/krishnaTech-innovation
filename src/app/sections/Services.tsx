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
        "React Native",
        "Flutter",
        "Android (Kotlin)",
        "iOS (Swift)",
        "Ionic",
        "KMP",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      items: [
        "Node.js",
        "FastAPI",
        "Spring Boot",
        ".NET Core",
        "Go",
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
      items: ["REST", "GraphQL", "WebSockets", "Socket.IO", "Webhooks"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      items: ["Docker", "CI/CD", "AWS", "Vercel", "Netlify"],
    },
    {
      title: "Payments & Integrations",
      icon: CreditCard,
      items: ["Stripe", "Razorpay", "WhatsApp API", "SMTP", "3rd-party APIs"],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-purple-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
            Services That Drive Growth
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From idea validation to scalable production systems — we build
            technology that delivers measurable business impact.
          </p>
        </div>

        {/* Core Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                onClick={() => onSelectService(service.id)}
              />
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Technologies We Work With
            </h3>
            <p className="text-slate-600 mt-3">
              Modern, scalable stacks for high-performance products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStacks.map((group) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.title}
                  className="group rounded-3xl p-[1px] bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="rounded-3xl bg-white p-6 h-full">

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>

                      <h4 className="font-semibold text-slate-900">
                        {group.title}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-sm border border-purple-200 bg-purple-50 text-slate-700 hover:bg-purple-100 transition"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10 text-sm text-slate-500">
            Need a custom stack? We architect solutions tailored to your product.
          </div>
        </div>

      </div>
    </section>
  );
}
