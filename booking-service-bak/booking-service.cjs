require("dotenv").config(); // Load .env variables
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
const { Resend } = require("resend");

const app = express();
app.use(cors({ origin: '*' }))
;
app.use(express.json());

// Connect to Supabase using env variables
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// Booking microservice
app.post("/bookings", async (req, res) => {
  const { name, phone, service, date, message } = req.body;

  console.log("Received booking:", req.body); // Log for debugging

  if (!name || !phone || !service) {
    return res.status(400).json({ error: "Name, phone, and service are required." });
  }

  try {
    // Save booking in Supabase
    const { data, error } = await supabase
      .from("sacred_consultations")
      .insert([{ name, phone, service, date, message }]);

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: "Failed to save booking." });
    }

    // Send notification email via Resend
    try {
      await resend.emails.send({
        from: "Mayur Kapse Guruji <onboarding@resend.dev>",
        to: "gajananvastu46@gmail.com",
        subject: "New Consultation Booking",
        text: `Client ${name} booked a consultation on ${date || "N/A"} for ${service}.\nPhone: ${phone}\nMessage: ${message || "No message"}`,
      });
    } catch (emailError) {
      console.error("Email failed:", emailError);
      // Do not block response if email fails
    }

    res.status(200).json({ message: "Booking saved successfully!" });
  } catch (err) {
    console.error("Unexpected error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Listen on port 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Booking microservice running on port ${PORT}`);
});
