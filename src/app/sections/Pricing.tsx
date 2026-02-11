import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Sparkles,
  Calendar,
  Package,
  Wand2,
  ShieldCheck,
  Rocket,
  Users,
  PhoneCall,
  X,
} from "lucide-react";

type Props = {
  onOpenContact: () => void;
};

type PlanCol = {
  name: string;
  price: string;
  approx?: string;
  subtitle: string;
  cta: string;
  popular?: boolean;
};

type TableRow = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  cells: React.ReactNode[]; // must match plans length
};

export default function Pricing({ onOpenContact }: Props) {
  // ✅ screenshot-style comparison (same KrishnaTech theme)
  const plans: PlanCol[] = [
    {
      name: "Baseline",
      price: "$5,000",
      approx: "approx",
      subtitle: "AI-led planning for a clear product roadmap",
      cta: "Get a Quote",
    },
    {
      name: "Advanced",
      price: "$8,000",
      approx: "approx",
      subtitle: "Rapid MVP development with AI support",
      cta: "Get a Quote",
    },
    {
      name: "Optimized",
      price: "$21,000",
      approx: "approx",
      subtitle: "AI-enhanced build for growing product needs",
      cta: "Get a Quote",
      popular: true,
    },
    {
      name: "Enterprise ready",
      price: "Custom",
      subtitle:
        "Advanced delivery designed to support enterprise systems with reliability, scalability, and continuous improvement",
      cta: "Get a Quote",
    },
  ];

  const rows: TableRow[] = [
    {
      label: "Timeline",
      icon: Calendar,
      cells: ["3 Weeks", "8 Weeks", "8 Weeks", "As per requirements"],
    },
    {
      label: "Deliverables",
      icon: Package,
      cells: [
        <ul className="list-disc pl-5 space-y-2">
          <li>Architecture blueprint</li>
          <li>AI-driven estimates</li>
          <li>Wireframes & clickable prototypes</li>
        </ul>,
        <ul className="list-disc pl-5 space-y-2">
          <li>MVP with 3–5 features</li>
          <li>Staging environment</li>
          <li>AI-generated documentation</li>
        </ul>,
        <ul className="list-disc pl-5 space-y-2">
          <li>6–10 modules</li>
          <li>Admin dashboard</li>
          <li>Integrations + AI-tested UI/UX</li>
        </ul>,
        <ul className="list-disc pl-5 space-y-2">
          <li>10+ modules</li>
          <li>Multilingual support</li>
          <li>AI-enabled monitoring</li>
          <li>Advanced integrations</li>
        </ul>,
      ],
    },
    {
      label: "AI advantage",
      icon: Wand2,
      cells: [
        <ul className="list-disc pl-5 space-y-2">
          <li>AI-refined requirements</li>
          <li>AI-powered wireframes</li>
        </ul>,
        <ul className="list-disc pl-5 space-y-2">
          <li>Copilot coding</li>
          <li>AI test scenarios</li>
          <li>AI sprint planning</li>
        </ul>,
        <ul className="list-disc pl-5 space-y-2">
          <li>Playwright MCP regression testing</li>
          <li>Automated test generation</li>
        </ul>,
        <ul className="list-disc pl-5 space-y-2">
          <li>Full AI QA pipeline</li>
          <li>Predictive optimization</li>
          <li>Observability & anomaly detection</li>
        </ul>,
      ],
    },
    {
      label: "QA approach",
      icon: ShieldCheck,
      cells: [
        "Requirement validation only",
        "AI-generated test scenarios + manual QA",
        "Manual + functional + agentic regression (Playwright MCP)",
        "End-to-end AI QA automation integrated with CI/CD",
      ],
    },
    {
      label: "Deployment",
      icon: Rocket,
      cells: [
        <div className="flex items-center gap-2 text-slate-700">
          <X className="w-4 h-4 text-red-500" />
          <span>Not included</span>
        </div>,
        "CI/CD for staging & production with AI hooks",
        "CI/CD across dev, staging, prod with AI monitoring",
        "Enterprise CI/CD + rollback automation + AI alerts",
      ],
    },
    {
      label: "Team setup",
      icon: Users,
      cells: [
        "Product designer + tech lead",
        "Senior fullstack dev (Copilot-enabled)",
        "Cross-functional team (Devs + QA + tech lead)",
        "Scalable team with Devs, QA, Tech lead + AI/MCP",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100/40 via-pink-100/40 to-orange-100/40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="inline-block text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent"
          >
            Transparent Pricing Plans
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-slate-600 mt-3 max-w-3xl mx-auto"
          >
            Choose a plan that fits your project goals. Final pricing depends on
            scope, features, and timeline.
          </motion.p>
        </div>

        {/* ✅ Comparison layout (scroll on small screens) */}
        <div className="rounded-2xl overflow-hidden border border-purple-200/70 bg-white/55 backdrop-blur shadow-sm">
          <div className="overflow-x-auto">
            <div className="min-w-[1100px]">
              {/* Top row: Help + Plans */}
              <div className="grid grid-cols-5">
                {/* Help column */}
                <div className="p-6 border-b border-purple-200/60 border-r border-purple-200/60 bg-white/55">
                  <div className="text-sm text-slate-700 font-semibold">
                    Get help for choosing right plan?
                  </div>

                  <button
                    onClick={onOpenContact}
                    className="mt-4 w-full px-4 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white shadow hover:shadow-purple-500/30 transition flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4" />
                    Book a Call
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="mt-4 text-xs text-slate-500">
                    We’ll suggest the best plan based on your scope & timeline.
                  </div>
                </div>

                {plans.map((p) => (
                  <div
                    key={p.name}
                    className={`p-6 border-b border-purple-200/60 border-r border-purple-200/60 last:border-r-0 bg-white/55 ${
                      p.popular ? "relative" : ""
                    }`}
                  >
                    {p.popular && (
                      <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white shadow">
                        <Sparkles className="w-3.5 h-3.5" />
                        Most Popular
                      </div>
                    )}

                    <div className="font-bold text-slate-900">{p.name}</div>

                    <div className="mt-3 flex items-end gap-2">
                      <div className="text-2xl font-extrabold text-slate-900">
                        {p.price}
                      </div>
                      {p.approx && (
                        <div className="text-sm text-slate-500">{p.approx}</div>
                      )}
                    </div>

                    <div className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {p.subtitle}
                    </div>

                    <button
                      onClick={onOpenContact}
                      className={`mt-4 inline-flex items-center gap-2 font-semibold ${
                        p.popular
                          ? "text-purple-700 hover:text-purple-800"
                          : "text-purple-700 hover:text-purple-800"
                      }`}
                    >
                      {p.cta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Table rows */}
              {rows.map((r, idx) => {
                const RowIcon = r.icon;
                return (
                  <div
                    key={r.label}
                    className={`grid grid-cols-5 ${
                      idx === rows.length - 1 ? "" : "border-b"
                    } border-purple-200/60`}
                  >
                    <div className="p-6 border-r border-purple-200/60 bg-white/55">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white flex items-center justify-center shadow-sm">
                          <RowIcon className="w-4.5 h-4.5" />
                        </div>
                        <div className="font-semibold text-slate-900">
                          {r.label}
                        </div>
                      </div>
                    </div>

                    {r.cells.map((cell, i) => (
                      <div
                        key={`${r.label}-${i}`}
                        className="p-6 border-r border-purple-200/60 last:border-r-0 bg-white/55 text-slate-700"
                      >
                        <div className="text-sm leading-relaxed">{cell}</div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          
        </div>

        {/* small spacing to match overall page rhythm */}
        <div className="mt-8" />
      </div>
    </section>
  );
}
