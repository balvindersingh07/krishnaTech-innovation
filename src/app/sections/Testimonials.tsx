// src/app/sections/Testimonials.tsx
import { useEffect, useMemo, useState } from "react";
import { TestimonialCard } from "../components/TestimonialCard";

type T = {
  quote: React.ReactNode;
  author: React.ReactNode;
  company: string;
  rating: number;
  country: string;
  flag: string;
  verified?: boolean;
};

const DATA: T[] = [
  // 🇮🇳 INDIA
  {
    flag: "🇮🇳",
    country: "India",
    rating: 5,
    verified: true,
    quote: (
      <>
        Working with <em><strong>Balvinder Singh Soni</strong></em> and the team was seamless.
        The delivery was fast, stable, and the UI felt premium.
      </>
    ),
    author: <em><strong>Aarav Mehta</strong></em>,
    company: "Mumbai Retail Group, India",
  },
  {
    flag: "🇮🇳",
    country: "India",
    rating: 5,
    verified: true,
    quote: (
      <>
        <em><strong>Neha Katoch</strong></em> improved our organic visibility with clear audits and practical fixes.
        Reporting and execution were on point.
      </>
    ),
    author: <em><strong>Riya Sharma</strong></em>,
    company: "Delhi Wellness Studio, India",
  },
  {
    flag: "🇮🇳",
    country: "India",
    rating: 5,
    verified: true,
    quote: (
      <>
        The frontend work by <em><strong>Ankit Choudhary</strong></em> was clean and responsive.
        Great UX attention and quick iterations.
      </>
    ),
    author: <em><strong>Kunal Verma</strong></em>,
    company: "Jaipur Fashion Mart, India",
  },
  {
    flag: "🇮🇳",
    country: "India",
    rating: 5,
    verified: true,
    quote: (
      <>
        <em><strong>Alisha Satish Gadhave</strong></em> handled SaaS support professionally.
        Fast ticket resolution with clear communication.
      </>
    ),
    author: <em><strong>Sneha Iyer</strong></em>,
    company: "Bengaluru SaaS Partner, India",
  },

  // 🇬🇧 UK
  {
    flag: "🇬🇧",
    country: "UK",
    rating: 5,
    verified: true,
    quote: (
      <>
        Delivery was smooth and on schedule. The team maintained a strong standard across UI, performance, and handover.
      </>
    ),
    author: <em><strong>Oliver Bennett</strong></em>,
    company: "London Growth Studio, UK",
  },
  {
    flag: "🇬🇧",
    country: "UK",
    rating: 5,
    verified: true,
    quote: (
      <>
        Backend APIs were structured and secure. Ownership and updates were consistent from start to deployment.
      </>
    ),
    author: <em><strong>Amelia Carter</strong></em>,
    company: "Bristol Commerce Co., UK",
  },

  // 🇪🇺 EUROPE
  {
    flag: "🇩🇪",
    country: "Europe",
    rating: 5,
    verified: true,
    quote: (
      <>
        <em><strong>Krati Shrivastava</strong></em> provided accurate analysis and validation.
        The insights helped us make confident decisions.
      </>
    ),
    author: <em><strong>Jonas Weber</strong></em>,
    company: "Berlin Data Studio, Germany",
  },
  {
    flag: "🇫🇷",
    country: "Europe",
    rating: 5,
    verified: true,
    quote: (
      <>
        UI implementation was excellent and responsive. The project felt organized and professionally handled.
      </>
    ),
    author: <em><strong>Camille Dubois</strong></em>,
    company: "Paris Retail Studio, France",
  },

  // 🇺🇸 USA
  {
    flag: "🇺🇸",
    country: "USA",
    rating: 5,
    verified: true,
    quote: (
      <>
        Admin + API integration worked exactly as expected. Production readiness and deployment support were solid.
      </>
    ),
    author: <em><strong>James Walker</strong></em>,
    company: "Austin Tech Solutions, USA",
  },
  {
    flag: "🇺🇸",
    country: "USA",
    rating: 5,
    verified: true,
    quote: (
      <>
        We got a polished experience with great performance. UX details and stability stood out during launch.
      </>
    ),
    author: <em><strong>Sophia Martinez</strong></em>,
    company: "Miami Retail Co., USA",
  },

  // extra
  {
    flag: "🇮🇳",
    country: "India",
    rating: 5,
    verified: true,
    quote: (
      <>
        Clean delivery, quick fixes, and a helpful handover. Everything worked smoothly after launch.
      </>
    ),
    author: <em><strong>Priya Nair</strong></em>,
    company: "Pune Services Group, India",
  },
  {
    flag: "🇬🇧",
    country: "UK",
    rating: 5,
    verified: true,
    quote: (
      <>
        Reliable execution with minimal revisions. The final build matched requirements perfectly.
      </>
    ),
    author: <em><strong>George Collins</strong></em>,
    company: "Birmingham Consultancy, UK",
  },
  {
    flag: "🇺🇸",
    country: "USA",
    rating: 5,
    verified: true,
    quote: (
      <>
        Strong communication and fast turnaround. The team handled deployment and post-launch changes well.
      </>
    ),
    author: <em><strong>Daniel Harris</strong></em>,
    company: "Chicago Digital Labs, USA",
  },
];

export default function Testimonials() {
  const [start, setStart] = useState(0);
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(3);

  const deliveredCount = 50; // ✅ Count badge
  const brand = "KrishnaTech Innovations";

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 768) setVisible(1);
      else if (w < 1024) setVisible(2);
      else setVisible(3);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  useEffect(() => {
    if (hover) return;
    const id = window.setInterval(() => {
      setStart((s) => (s + 1) % DATA.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [hover]);

  const shown = useMemo(() => {
    const out: T[] = [];
    for (let i = 0; i < visible; i++) out.push(DATA[(start + i) % DATA.length]);
    return out;
  }, [start, visible]);

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-100/50 via-orange-100/50 to-red-100/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header + promotion + count badge */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent mb-4 font-bold">
            Client Testimonials
          </h2>

          <p className="text-lg text-slate-600">
            Trusted by clients across <span className="font-semibold">India</span>,{" "}
            <span className="font-semibold">UK</span>,{" "}
            <span className="font-semibold">Europe</span> &{" "}
            <span className="font-semibold">USA</span>
          </p>

          <div className="mt-3 flex items-center justify-center gap-2 flex-wrap">
            <span className="text-sm px-4 py-1.5 rounded-full bg-white border border-yellow-200 text-slate-700 shadow-sm">
              ✅ Delivered by <span className="font-semibold">{brand}</span>
            </span>

            <span className="text-sm px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-50 to-red-50 border border-yellow-200 text-slate-700 shadow-sm">
              📈 <span className="font-semibold">{deliveredCount}+</span> projects delivered
            </span>
          </div>
        </div>

        {/* slider controls */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            type="button"
            onClick={() => setStart((s) => (s - 1 + DATA.length) % DATA.length)}
            className="px-4 py-2 rounded-xl border border-yellow-200 bg-white hover:bg-yellow-50 transition text-slate-700"
          >
            ← Prev
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: 6 }).map((_, i) => {
              const on = i === (start % 6);
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setStart((s) => (s - (s % 6) + i) % DATA.length)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    on
                      ? "bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"
                      : "bg-yellow-200"
                  }`}
                  aria-label={`Go to set ${i + 1}`}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setStart((s) => (s + 1) % DATA.length)}
            className="px-4 py-2 rounded-xl border border-yellow-200 bg-white hover:bg-yellow-50 transition text-slate-700"
          >
            Next →
          </button>
        </div>

        {/* slider grid */}
        <div
          className="grid gap-8"
          style={{ gridTemplateColumns: `repeat(${visible}, minmax(0, 1fr))` }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {shown.map((t, i) => (
            <TestimonialCard
              key={`${start}-${i}`}
              quote={t.quote}
              author={t.author}
              company={t.company}
              rating={t.rating}
              country={t.country}
              flag={t.flag}
              verified={t.verified ?? true}
              watermarkText="KrishnaTech"
              deliveredBy={brand}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
