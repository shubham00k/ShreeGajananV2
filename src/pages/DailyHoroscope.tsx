import { useEffect, useMemo, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import wheel from "@/assets/horoscope-wheel.jpg";

const SIGNS = [
  "Aries","Taurus","Gemini","Cancer","Leo","Virgo",
  "Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"
];

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "Hindi" },
  { code: "mr", label: "Marathi" },
] as const;

type Language = typeof LANGUAGES[number]["code"];

export default function DailyHoroscope() {
  const [language, setLanguage] = useState<Language>("en");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Record<string, string> | null>(null);

  useEffect(() => { document.title = `Daily Horoscope (${language.toUpperCase()})`; }, [language]);

  const fetchAll = async () => {
    setLoading(true);
    // Placeholder: will be wired to backend/Prokerala next.
    await new Promise((r) => setTimeout(r, 500));
    const mock: Record<string, string> = Object.fromEntries(
      SIGNS.map((s) => [s, `Your ${s} guidance will appear here (${language.toUpperCase()}).`])
    );
    setData(mock);
    setLoading(false);
  };

  useEffect(() => { fetchAll(); }, []);

  const title = useMemo(() => `Daily Horoscope`, []);

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-muted-foreground">Automated daily horoscopes for all zodiac signs with language support.</p>
      </header>

      <section className="mb-6 flex flex-col sm:flex-row items-stretch sm:items-end gap-4">
        <div className="flex-1">
          <label className="mb-2 block text-sm font-medium">Language</label>
          <Select value={language} onValueChange={(v) => setLanguage(v as Language)}>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              {LANGUAGES.map((l) => (
                <SelectItem key={l.code} value={l.code}>{l.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex-none sm:self-end">
          <Button onClick={fetchAll} disabled={loading}>{loading ? "Loading..." : "Refresh"}</Button>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SIGNS.map((s) => (
          <article key={s} className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
            <img src={wheel} alt={`${s} daily horoscope wheel`} loading="lazy" className="w-full h-36 object-cover" />
            <div className="p-5">
              <h2 className="font-semibold mb-1">{s}</h2>
              <p className="text-sm leading-6 text-muted-foreground">{data?.[s] ?? "Fetching..."}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
