const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch"); // add this dependency

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

const validSigns = [
  "aries", "taurus", "gemini", "cancer", "leo", "virgo",
  "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"
];

app.get("/api/horoscope/:sign", async (req, res) => {
  try {
    const sign = req.params.sign.toLowerCase();

    if (!validSigns.includes(sign)) {
      return res.status(400).json({ error: "Invalid zodiac sign" });
    }

    const response = await fetch(`https://aztro.sameerkumar.website/?sign=${sign}&day=today`, {
      method: "POST"
    });

    if (!response.ok) {
      return res.status(500).json({ error: "Failed to fetch from horoscope API" });
    }

    const data = await response.json();

    // Send only description back to frontend
    res.json({ description: data.description });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
