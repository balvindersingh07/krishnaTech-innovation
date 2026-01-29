import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

type Msg = {
  from: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "bot",
      text: "Hi 👋 I’m KrishnaTech Assistant. What do you want to build today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput("");

    setMessages((m) => [...m, { from: "user", text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/ai/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMsg }),
      });

      const data = await res.json();

      setMessages((m) => [
        ...m,
        { from: "bot", text: data.answer || "Sorry, I didn’t get that." },
      ]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        { from: "bot", text: "Server error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, width: 320 }}>
      <div style={{ background: "#fff", borderRadius: 12, padding: 12 }}>
        <div style={{ maxHeight: 300, overflowY: "auto" }}>
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                textAlign: m.from === "user" ? "right" : "left",
                margin: "6px 0",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "8px 12px",
                  borderRadius: 16,
                  background: m.from === "user" ? "#6366f1" : "#f3f4f6",
                  color: m.from === "user" ? "#fff" : "#000",
                }}
              >
                {m.text}
              </span>
            </div>
          ))}
          {loading && <div>Typing…</div>}
        </div>

        <div style={{ display: "flex", marginTop: 8 }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message…"
            style={{ flex: 1, padding: 8 }}
          />
          <button onClick={sendMessage} style={{ marginLeft: 6 }}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
