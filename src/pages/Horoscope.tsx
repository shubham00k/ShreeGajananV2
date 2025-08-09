import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const SIGNS = [
  "Aries","Taurus","Gemini","Cancer","Leo","Virgo",
  "Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"
];
const PERIODS = ["daily","weekly","monthly"] as const;

type Period = (typeof PERIODS)[number];

export default function Horoscope() {
  const { toast } = useToast();
  const [sign, setSign] = useState<string>("Aries");
  const [period, setPeriod] = useState<Period>("daily");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any | null>(null);

  const dbSign = useMemo(() => sign.toLowerCase(), [sign]);
  const dbPeriod = period;

  useEffect(() => {
    document.title = `Horoscope – ${sign} (${period})`;
  }, [sign, period]);

  const fetchHoroscope = async () => {
    setLoading(true);
    setData(null);
    const { data, error } = await supabase
      .from("horoscopes")
      .select("id, sign, period, general_text, love_text, career_text, friendship_text, date_start, date_end")
      .eq("sign", dbSign)
      .eq("period", dbPeriod)
      .order("date_start", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) {
      toast({ title: "Failed to load horoscope", description: error.message, variant: "destructive" });
    }
    setData(data ?? null);
    setLoading(false);
  };

  useEffect(() => {
    fetchHoroscope();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Daily Horoscope</h1>
        <p className="text-muted-foreground">Choose your zodiac sign and period to view guidance.</p>
      </header>

      <section className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium">Zodiac Sign</label>
          <Select value={sign} onValueChange={(v) => setSign(v)}>
            <SelectTrigger>
              <SelectValue placeholder="Select sign" />
            </SelectTrigger>
            <SelectContent>
              {SIGNS.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Period</label>
          <Select value={period} onValueChange={(v) => setPeriod(v as Period)}>
            <SelectTrigger>
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              {PERIODS.map((p) => (
                <SelectItem key={p} value={p}>{p[0].toUpperCase() + p.slice(1)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-end">
          <Button onClick={fetchHoroscope} disabled={loading} className="w-full">{loading ? "Loading..." : "Fetch Horoscope"}</Button>
        </div>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>{sign} – {period[0].toUpperCase() + period.slice(1)}</CardTitle>
            <CardDescription>
              {data ? `Valid ${data.date_start} to ${data.date_end}` : "No entry found yet."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {data ? (
              <>
                <article>
                  <h2 className="font-semibold mb-1">General</h2>
                  <p className="text-sm leading-6">{data.general_text}</p>
                </article>
                {data.love_text && (
                  <article>
                    <h2 className="font-semibold mb-1">Love</h2>
                    <p className="text-sm leading-6">{data.love_text}</p>
                  </article>
                )}
                {data.career_text && (
                  <article>
                    <h2 className="font-semibold mb-1">Career</h2>
                    <p className="text-sm leading-6">{data.career_text}</p>
                  </article>
                )}
                {data.friendship_text && (
                  <article>
                    <h2 className="font-semibold mb-1">Friendship</h2>
                    <p className="text-sm leading-6">{data.friendship_text}</p>
                  </article>
                )}
              </>
            ) : (
              <p className="text-muted-foreground">Try another period or check back later.</p>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
