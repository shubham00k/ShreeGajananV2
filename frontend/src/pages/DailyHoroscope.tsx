import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

// Different images for each sign (place your images in /public/signs/)
const SIGN_IMAGES: Record<string, string> = {
  Aries: "/zodiac/aries.jpg",
  Taurus: "/zodiac/taurus.jpg",
  Gemini: "/zodiac/gemini.jpg",
  Cancer: "/zodiac/cancer.jpg",
  Leo: "/zodiac/leo.jpg",
  Virgo: "/zodiac/virgo.jpg",
  Libra: "/zodiac/libra.jpg",
  Scorpio: "/zodiac/scorpio.jpg",
  Sagittarius: "/zodiac/sagittarius.jpg",
  Capricorn: "/zodiac/capricorn.jpg",
  Aquarius: "/zodiac/aquarius.jpg",
  Pisces: "/zodiac/pisces.jpg",
};

const SIGNS = Object.keys(SIGN_IMAGES);

export default function DailyHoroscope() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    document.title = "Daily Horoscope";
  }, []);

  // Fetch horoscope for all signs
  const fetchAll = async () => {
    setLoading(true);

    const results: Record<string, string> = {};
    for (const sign of SIGNS) {
      try {
        const res = await fetch(
          `http://localhost:5000/api/horoscope/${sign.toLowerCase()}`
        );
        const astroData = await res.json();
        let text = astroData.description || "No data available.";

        // Store only short text (1-2 sentences max)
        results[sign] = text.split(". ").slice(0, 2).join(". ") + ".";
      } catch (err) {
        results[sign] = "Unable to fetch horoscope.";
      }
    }

    setData(results);
    setLoading(false);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const title = useMemo(() => `Daily Horoscope`, []);

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-muted-foreground">
          Automated daily horoscopes for all zodiac signs.
        </p>
      </header>

      <section className="mb-6 flex justify-end">
        <Button onClick={fetchAll} disabled={loading}>
          {loading ? "Loading..." : "Refresh"}
        </Button>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SIGNS.map((s) => (
          <article
            key={s}
            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
          >
            <img
              src={SIGN_IMAGES[s]}
              alt={`${s} daily horoscope`}
              loading="lazy"
              className="w-full h-36 object-cover"
            />
            <div className="p-5">
              <h2 className="font-semibold mb-1">{s}</h2>
              <p className="text-sm leading-6 text-muted-foreground">
                {data?.[s] ?? "Fetching..."}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
