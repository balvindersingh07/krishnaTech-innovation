import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";

import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Process from "./sections/Process";
import Portfolio from "./sections/Portfolio";
import Team from "./sections/Team";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Modals from "./sections/Modals";

import { services } from "./data/services";
import { portfolioItems } from "./data/portfolio";
import { teamMembers } from "./data/team";

type ChatRole = "user" | "bot";
type ChatMsg = { id: string; role: ChatRole; text: string; ts: number };

// ✅ Backend base (Render URL)
const API_BASE = import.meta.env.VITE_API_BASE_URL;

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedPortfolio, setSelectedPortfolio] = useState<number | null>(null);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  // ---------------- CHATBOT (REAL-TIME AI) ----------------
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);

  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      id: "m1",
      role: "bot",
      text:
        "Hi 👋 I’m KrishnaTech Assistant. What do you want to build today?\n\nYou can ask about Web/Mobile Apps, Software Development, or Marketing.",
      ts: Date.now(),
    },
  ]);

  const listEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const selectedServiceData = services.find((s) => s.id === selectedService);
  const selectedPortfolioData = portfolioItems.find((p) => p.id === selectedPortfolio);

  const pushUser = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: `u-${cryptoRandom()}`, role: "user", text, ts: Date.now() },
    ]);
  };

  const pushBot = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: `b-${cryptoRandom()}`, role: "bot", text, ts: Date.now() },
    ]);
  };

  // ✅ Auto-scroll to latest message when chat is open
  useEffect(() => {
    if (!chatOpen) return;
    listEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatOpen, chatLoading]);

  const quickReplies = useMemo(
    () => [
      {
        label: "Services",
        action: () => {
          setChatOpen(true);
          scrollToSection("services");
          pushBot("Sure — here are our services section. Want a free consultation?");
        },
      },
      {
        label: "Portfolio",
        action: () => {
          setChatOpen(true);
          scrollToSection("portfolio");
          pushBot("Here’s our recent work. Tell me your project type (Web/Mobile/SaaS).");
        },
      },
      {
        label: "Contact",
        action: () => {
          setChatOpen(true);
          scrollToSection("contact");
          pushBot("Perfect — share your requirement in the contact form. We’ll reply fast.");
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // ---------------- REAL-TIME AI CALL ----------------
  async function askAI(question: string) {
    if (!API_BASE) throw new Error("VITE_API_BASE_URL missing");

    const res = await fetch(`${API_BASE}/api/ai/ask`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    // Try to parse JSON even for errors
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw new Error(data?.message || data?.error || "AI request failed");
    }

    // backend may return: {answer} OR {data:{answer}} OR {reply}
    return (
      data?.answer ||
      data?.reply ||
      data?.data?.answer ||
      "Thanks! Please share more details (goal + timeline)."
    );
  }

  // ---------------- FALLBACK (old rule-based) ----------------
  const fallbackReply = (text: string) => {
    const lower = text.toLowerCase();

    if (lower.includes("price") || lower.includes("cost") || lower.includes("budget")) {
      return "Pricing depends on scope. Tell me: (1) Web or Mobile? (2) Features list? (3) Deadline?\n\nOr click “Contact” and we’ll share a quote.";
    }

    if (lower.includes("website") || lower.includes("web")) {
      return "Nice! For websites: do you want a business site, e-commerce, or web app?";
    }

    if (
      lower.includes("app") ||
      lower.includes("android") ||
      lower.includes("ios") ||
      lower.includes("mobile")
    ) {
      return "Great! For mobile apps: do you need Android only, iOS only, or both (React Native)?";
    }

    if (lower.includes("marketing") || lower.includes("seo") || lower.includes("ads")) {
      return "We do SEO + Ads + Lead gen. What’s your business niche and target city/country?";
    }

    if (lower.includes("contact") || lower.includes("call") || lower.includes("meeting")) {
      return "Done ✅ Please fill the Contact form below or click ‘Get Started’ for a free strategy call.";
    }

    return "Got it ✅ Share a bit more details (your goal + timeline). I’ll guide you.";
  };

  const handleSend = async () => {
    const text = chatInput.trim();
    if (!text || chatLoading) return;

    pushUser(text);
    setChatInput("");
    setChatLoading(true);

    try {
      // ✅ Real-time AI reply
      const reply = await askAI(text);
      pushBot(reply);
    } catch (e: any) {
      // ✅ If AI not working -> fallback rules (no dead chat)
      const reply = fallbackReply(text);
      pushBot(reply);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onScroll={scrollToSection}
        onOpenContact={() => setContactModalOpen(true)}
      />

      <Hero
        onExploreServices={() => scrollToSection("services")}
        onOpenContact={() => setContactModalOpen(true)}
      />

      <About />

      <Services services={services} onSelectService={setSelectedService} />

      <Process />

      <Portfolio items={portfolioItems} onSelect={setSelectedPortfolio} />

      {/* ✅ TEAM SECTION */}
      <Team members={teamMembers} />

      <Testimonials />

      {/* ✅ NEW: PRICING */}
      <Pricing onOpenContact={() => setContactModalOpen(true)} />

      <CTA onOpenContact={() => setContactModalOpen(true)} />

      <Contact />

      <Footer
        onScroll={scrollToSection}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenTerms={() => setTermsModalOpen(true)}
      />

      <Modals
        contactModalOpen={contactModalOpen}
        setContactModalOpen={setContactModalOpen}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        selectedServiceData={selectedServiceData}
        selectedPortfolio={selectedPortfolio}
        setSelectedPortfolio={setSelectedPortfolio}
        selectedPortfolioData={selectedPortfolioData}
        privacyModalOpen={privacyModalOpen}
        setPrivacyModalOpen={setPrivacyModalOpen}
        termsModalOpen={termsModalOpen}
        setTermsModalOpen={setTermsModalOpen}
      />

      {/* ---------------- Floating Chatbot (REAL-TIME) ---------------- */}
      <div className="fixed bottom-6 right-6 z-[60]">
        {/* Chat Window */}
        {chatOpen && (
          <div className="mb-4 w-[92vw] max-w-sm sm:w-96">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-purple-200 bg-white/95 backdrop-blur">
              {/* Header */}
              <div className="px-4 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="leading-tight">
                    <div className="font-semibold">KrishnaTech Assistant</div>
                    <div className="text-xs text-white/90">
                      Online • Quick replies available
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setChatOpen(false)}
                  className="p-2 rounded-xl hover:bg-white/15 transition"
                  aria-label="Close chat"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="max-h-[55vh] sm:max-h-[420px] overflow-y-auto px-4 py-4 space-y-3">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-line ${
                        m.role === "user"
                          ? "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white shadow"
                          : "bg-slate-50 border border-purple-100 text-slate-700"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}

                {/* Loading bubble */}
                {chatLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl px-3 py-2 text-sm bg-slate-50 border border-purple-100 text-slate-700 flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Thinking…
                    </div>
                  </div>
                )}

                {/* Quick Replies */}
                <div className="pt-1 flex flex-wrap gap-2">
                  {quickReplies.map((q) => (
                    <button
                      key={q.label}
                      onClick={q.action}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border border-purple-200 bg-white hover:bg-purple-50 text-slate-700 transition"
                    >
                      {q.label}
                    </button>
                  ))}
                </div>

                {/* Auto-scroll anchor */}
                <div ref={listEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-purple-100 p-3">
                <div className="flex items-center gap-2">
                  <input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    placeholder="Type your message…"
                    className="flex-1 h-11 px-3 rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white"
                    disabled={chatLoading}
                  />
                  <button
                    onClick={handleSend}
                    disabled={chatLoading}
                    className="h-11 w-11 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white flex items-center justify-center shadow hover:opacity-95 transition disabled:opacity-60"
                    aria-label="Send"
                    title="Send"
                  >
                    {chatLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <div className="mt-2 text-[11px] text-slate-500">
                  Tip: Ask “pricing”, “website”, “mobile app”, or “SEO”.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Floating Button */}
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className="h-14 w-14 rounded-2xl shadow-2xl border border-purple-200 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white flex items-center justify-center hover:opacity-95 transition"
            aria-label="Open chat"
            title="Chat"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}

/** Safe-ish id helper (works without extra deps) */
function cryptoRandom() {
  try {
    // @ts-ignore
    return crypto?.randomUUID?.() ?? String(Math.random()).slice(2);
  } catch {
    return String(Math.random()).slice(2);
  }
}
