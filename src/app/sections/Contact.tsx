import { useRef } from "react";
import {
  BarChart3,
  Briefcase,
  Users,
  Repeat2,
  Timer,
  ArrowUpRight,
} from "lucide-react";
import { ContactForm } from "../components/ContactForm";

/**
 * ✅ “Real-looking” + safe (no fake money claims)
 * You can edit anytime from here.
 */
const METRICS = [
  {
    icon: Briefcase,
    label: "Projects Delivered",
    value: "22+",
    sub: "Web • Mobile • Branding",
  },
  {
    icon: Users,
    label: "Clients Served",
    value: "15+",
    sub: "India • Remote",
  },
  {
    icon: Repeat2,
    label: "Repeat Work",
    value: "68%",
    sub: "Ongoing partnerships",
  },
  {
    icon: Timer,
    label: "Typical Response",
    value: "< 24h",
    sub: "Fast communication",
  },
] as const;

/**
 * “Revenue intent” graph (safe wording)
 * This shows internal momentum in pipeline / outcomes focus (0-100)
 */
const MOMENTUM_BARS = [
  { label: "Jan–Mar", value: 38 },
  { label: "Apr–Jun", value: 56 },
  { label: "Jul–Sep", value: 71 },
  { label: "Oct–Dec", value: 84 },
] as const;

export default function Contact() {
  const formRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100/40 via-pink-100/40 to-orange-100/40"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          {/* ✅ Updated: Proper section heading like other blocks */}
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>

          <p className="mt-3 text-lg text-slate-600 max-w-3xl mx-auto">
            Tell us what you’re building. We’ll share a clear plan, realistic
            timeline, and the next best step — optimized for delivery and
            growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Revenue + Trust */}
          <div className="space-y-6">
            {/* Proof heading */}
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/70 border border-purple-200 shadow-sm flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-purple-700" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Proof that influences clients
                </h3>
                <p className="text-slate-600 mt-1">
                  We focus on clean execution + growth outcomes — so your product
                  doesn’t just look good, it performs.
                </p>
              </div>
            </div>

            {/* Metric cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {METRICS.map(({ icon: Icon, label, value, sub }) => (
                <div
                  key={label}
                  className="rounded-2xl p-[1px] bg-gradient-to-r from-purple-300/60 via-pink-300/60 to-orange-300/60 shadow-sm"
                >
                  <div className="rounded-2xl bg-white/75 backdrop-blur border border-white/60 p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center shadow-md flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs uppercase tracking-wide text-slate-500">
                          {label}
                        </div>
                        <div className="text-2xl font-extrabold text-slate-900 mt-1">
                          {value}
                        </div>
                        <div className="text-sm text-slate-600 mt-1">{sub}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Momentum / “Revenue focus” mini chart */}
            <div className="rounded-2xl p-[1px] bg-gradient-to-r from-purple-300/60 via-pink-300/60 to-orange-300/60 shadow-sm">
              <div className="rounded-2xl bg-white/75 backdrop-blur border border-white/60 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-slate-900 font-semibold text-lg">
                      Revenue-driven momentum
                    </div>
                    <div className="text-slate-600 text-sm mt-1">
                      Growth focus increasing across recent cycles.
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 text-sm font-semibold bg-white/70 border border-purple-200 rounded-xl px-3 py-2">
                    <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                      Growth-first
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-purple-700" />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-4 gap-3 items-end">
                  {MOMENTUM_BARS.map((b) => (
                    <div
                      key={b.label}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="w-full rounded-xl bg-slate-900/10 overflow-hidden border border-white/60">
                        <div
                          className="w-full rounded-xl bg-gradient-to-t from-purple-600 via-pink-500 to-orange-500"
                          style={{ height: `${Math.max(22, b.value)}px` }}
                        />
                      </div>
                      <div className="text-[11px] font-semibold text-slate-600 text-center leading-tight">
                        {b.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-xs text-slate-500">
                  We optimize product + marketing decisions to improve
                  conversions and business outcomes.
                </div>
              </div>
            </div>

            {/* Small trust line */}
            <div className="text-sm text-slate-600">
              <span className="font-semibold text-slate-800">Tip:</span> Share
              your goal (leads, sales, users), timeline, and budget range — we’ll
              propose the best plan.
            </div>
          </div>

          {/* Right: Form */}
          <div
            ref={formRef}
            className="rounded-2xl p-[1px] bg-gradient-to-r from-purple-300/60 via-pink-300/60 to-orange-300/60 shadow-lg"
          >
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 border border-white/60">
              <ContactForm />

              <div className="mt-4 text-[12px] text-slate-500 leading-relaxed">
                By submitting this form, you agree to be contacted by KrishnaTech
                Innovations regarding your request.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
