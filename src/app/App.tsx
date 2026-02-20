import { useEffect, useRef, useState } from "react";
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
import Founder from "./sections/Founder";
import Footer from "./sections/Footer";
import Modals from "./sections/Modals";

import { services } from "./data/services";
import { portfolioItems } from "./data/portfolio";
import { teamMembers } from "./data/team";

type ChatRole = "user" | "bot";
type ChatMsg = { id: string; role: ChatRole; text: string; ts: number };

const API_BASE =
  (import.meta.env.VITE_API_BASE_URL || "").replace(/\/$/, "");

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedPortfolio, setSelectedPortfolio] = useState<number | null>(null);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);

  const [messages, setMessages] = useState<ChatMsg[]>([
    {
      id: "m1",
      role: "bot",
      text:
        "Hi 👋 I’m KrishnaTech Assistant. What do you want to build today?",
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
  const selectedPortfolioData = portfolioItems.find(
    (p) => p.id === selectedPortfolio
  );

  const pushMessage = (role: ChatRole, text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: cryptoRandom(), role, text, ts: Date.now() },
    ]);
  };

  useEffect(() => {
    if (chatOpen) {
      listEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, chatOpen]);

  const handleSend = async () => {
    const text = chatInput.trim();
    if (!text || chatLoading) return;

    pushMessage("user", text);
    setChatInput("");
    setChatLoading(true);

    try {
      if (!API_BASE) {
        pushMessage("bot", "Backend URL not configured.");
        return;
      }

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);

      const res = await fetch(`${API_BASE}/api/ai/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();

      pushMessage(
        "bot",
        data?.answer ||
          data?.reply ||
          "Thanks! Tell me more about your project."
      );
    } catch (error: any) {
      if (error.name === "AbortError") {
        pushMessage("bot", "Server is waking up. Try again in a moment.");
      } else {
        pushMessage("bot", "Server connection issue. Please try again.");
      }
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
      <Team members={teamMembers} />
      <Testimonials />
      <Pricing onOpenContact={() => setContactModalOpen(true)} />
      <CTA onOpenContact={() => setContactModalOpen(true)} />
      <Contact />
      <Founder />

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

      {/* Floating Chat */}
      <div className="fixed bottom-6 right-6 z-[60]">
        {chatOpen ? (
          <div className="mb-4 w-[92vw] max-w-sm sm:w-96 bg-white rounded-2xl shadow-2xl border border-purple-200">
            <div className="px-4 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white flex justify-between">
              <span className="font-semibold">KrishnaTech Assistant</span>
              <button onClick={() => setChatOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[420px] overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`rounded-2xl px-3 py-2 text-sm ${
                      m.role === "user"
                        ? "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {chatLoading && (
                <Loader2 className="w-4 h-4 animate-spin text-purple-600" />
              )}
              <div ref={listEndRef} />
            </div>

            <div className="border-t p-3 flex gap-2">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message…"
                className="flex-1 px-3 py-2 rounded-xl border border-purple-200"
              />
              <button
                onClick={handleSend}
                className="px-3 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setChatOpen(true)}
            className="h-14 w-14 rounded-2xl shadow-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white flex items-center justify-center"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}

function cryptoRandom() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).substring(2);
}