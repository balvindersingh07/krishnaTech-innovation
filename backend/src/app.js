// backend/src/app.js
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const env = require("./config/env");

// ✅ correct route imports (exact filenames)
const healthRoutes = require("./routes/health.routes");
const contactRoutes = require("./routes/contact.routes");
const leadsRoutes = require("./routes/leads.routes");
const aiRoutes = require("./routes/ai.routes");

const app = express();

// --------------------- security ---------------------
app.use(helmet());

// --------------------- parsers ----------------------
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// --------------------- CORS (PRODUCTION READY) ---------------------
// Supports env.CORS_ORIGINS as:
// 1) Array: ["http://localhost:5173", "https://abc.vercel.app"]
// 2) String: "http://localhost:5173,https://abc.vercel.app"
const normalizeOrigins = (value) => {
  if (!value) return [];
  if (Array.isArray(value)) return value.map((s) => String(s).trim()).filter(Boolean);
  return String(value)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
};

const allowedOrigins = normalizeOrigins(env.CORS_ORIGINS);

app.use(
  cors({
    origin: (origin, cb) => {
      // allow server-to-server / Postman / curl (no Origin header)
      if (!origin) return cb(null, true);

      // if not configured, block browser calls
      if (!allowedOrigins.length) {
        return cb(new Error("CORS_ORIGINS not configured"), false);
      }

      if (allowedOrigins.includes(origin)) return cb(null, true);
      return cb(new Error(`CORS blocked for origin: ${origin}`), false);
    },
    credentials: true,
  })
);

// (optional but useful) handle preflight quickly
app.options("*", cors());

// --------------------- base -------------------------
app.get("/", (_req, res) => {
  res.json({
    ok: true,
    name: "KrishnaTech Innovations API",
    endpoints: {
      health: "/health",
      contact: "POST /api/contact",
      leads: "POST /api/leads",
      ai: "POST /api/ai/ask",
    },
  });
});

// ✅ mount routes
// Your API index shows "/health", so keep it exactly:
app.use("/health", healthRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/leads", leadsRoutes);
app.use("/api/ai", aiRoutes);

// --------------------- 404 --------------------------
app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// --------------------- error handler ----------------
app.use((err, _req, res, _next) => {
  console.error("❌ API Error:", err);

  // CORS errors usually come here
  const msg = err?.message || "Server error";

  res.status(500).json({
    success: false,
    message: msg,
  });
});

module.exports = app;
