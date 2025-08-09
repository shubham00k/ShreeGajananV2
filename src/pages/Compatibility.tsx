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

export default function Compatibility() {
  const { toast } = useToast();
  const [a, setA] = useState<string>("Aries");
  const [b, setB] = useState<string>("Taurus");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any | null>(null);

  const aDb = useMemo(() => a.toLowerCase(), [a]);
  const bDb = useMemo(() => b.toLowerCase(), [b]);

  useEffect(() => { document.title = `Compatibility – ${a} & ${b}`; }, [a, b]);

  const fetchCompatibility = async () => {
    setLoading(true);
    setData(null);
    const filter = `and(sign_a.eq.${aDb},sign_b.eq.${bDb}),and(sign_a.eq.${bDb},sign_b.eq.${aDb})`;
    const { data, error } = await supabase
      .from("compatibility")
      .select("*")
      .or(filter)
      .limit(1)
      .maybeSingle();

    if (error) {
      toast({ title: "Failed to load compatibility", description: error.message, variant: "destructive" });
    }
    setData(data ?? null);
    setLoading(false);
  };

  useEffect(() => {
    fetchCompatibility();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Zodiac Compatibility</h1>
        <p className="text-muted-foreground">Select two signs to see love, career, and friendship harmony.</p>
      </header>

      <section className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium">Sign A</label>
          <Select value={a} onValueChange={setA}>
            <SelectTrigger>
              <SelectValue placeholder="Select sign" />
            </SelectTrigger>
            <SelectContent>
              {SIGNS.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">Sign B</label>
          <Select value={b} onValueChange={setB}>
            <SelectTrigger>
              <SelectValue placeholder="Select sign" />
            </SelectTrigger>
            <SelectContent>
              {SIGNS.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-end">
          <Button onClick={fetchCompatibility} disabled={loading} className="w-full">{loading ? "Loading..." : "Check"}</Button>
        </div>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>{a} & {b}</CardTitle>
            <CardDescription>
              {data ? "Scores are indicative and for guidance." : "No entry found yet."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {data ? (
              <>
                {typeof data.love_score === "number" && (
                  <article>
                    <h2 className="font-semibold mb-1">Love ({data.love_score}/100)</h2>
                    <p className="text-sm leading-6">{data.love_text ?? "No details provided."}</p>
                  </article>
                )}
                {typeof data.career_score === "number" && (
                  <article>
                    <h2 className="font-semibold mb-1">Career ({data.career_score}/100)</h2>
                    <p className="text-sm leading-6">{data.career_text ?? "No details provided."}</p>
                  </article>
                )}
                {typeof data.friendship_score === "number" && (
                  <article>
                    <h2 className="font-semibold mb-1">Friendship ({data.friendship_score}/100)</h2>
                    <p className="text-sm leading-6">{data.friendship_text ?? "No details provided."}</p>
                  </article>
                )}
              </>
            ) : (
              <p className="text-muted-foreground">Try another pair or check back later.</p>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
