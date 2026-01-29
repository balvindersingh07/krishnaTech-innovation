// backend/src/config/env.js
const dotenv = require("dotenv");

// load .env from backend root
dotenv.config();

const env = {
  PORT: Number(process.env.PORT || 8080),
  NODE_ENV: process.env.NODE_ENV || "development",

  // Mongo (support both names)
  MONGO_URI: process.env.MONGO_URI || process.env.MONGODB_URI || "",

  // CORS
  CORS_ORIGINS: (process.env.CORS_ORIGINS || process.env.FRONTEND_URL || "http://localhost:5173")
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean),

  // Email
  EMAIL_HOST: process.env.EMAIL_HOST || "",
  EMAIL_PORT: Number(process.env.EMAIL_PORT || 587),
  EMAIL_USER: process.env.EMAIL_USER || "",
  EMAIL_PASS: process.env.EMAIL_PASS || "",
  EMAIL_TO: process.env.EMAIL_TO || "",

  // OpenAI
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  OPENAI_MODEL: process.env.OPENAI_MODEL || "gpt-4o-mini",
};

module.exports = env;
