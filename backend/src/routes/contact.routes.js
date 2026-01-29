const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");
const { sendContactEmail } = require("../services/email.service"); // ✅ exact file name

/**
 * POST /api/contact
 * body: { name, email, phone?, message }
 */
router.post("/", async (req, res) => {
  try {
    const name = String(req.body?.name || "").trim();
    const email = String(req.body?.email || "").trim().toLowerCase();
    const phone = String(req.body?.phone || "").trim();
    const message = String(req.body?.message || "").trim();

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, Email and Message are required.",
      });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
    if (!emailOk) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address.",
      });
    }

    const doc = await Contact.create({
      name,
      email,
      phone: phone || undefined,
      message,
      source: "website",
      status: "new",
    });

    // email send (try, but lead save success anyway)
    try {
      await sendContactEmail({
        id: String(doc._id),
        name,
        email,
        phone,
        message,
      });
    } catch (mailErr) {
      console.warn("⚠️ Email send failed:", mailErr?.message || mailErr);
    }

    return res.json({
      success: true,
      message: "Message received. We will contact you within 24 hours.",
      id: doc._id,
    });
  } catch (err) {
    console.error("❌ /api/contact error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again.",
    });
  }
});

module.exports = router;
