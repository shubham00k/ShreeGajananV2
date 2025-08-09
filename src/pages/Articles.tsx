import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface Article { id: string; title: string; slug: string; created_at: string; content: string }

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { document.title = "Articles – Insights & Guidance"; }, []);

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      const { data } = await supabase
        .from("articles")
        .select("id,title,slug,created_at,content")
        .order("created_at", { ascending: false });
      setArticles(data ?? []);
      setLoading(false);
    };
    run();
  }, []);

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Articles</h1>
        <p className="text-muted-foreground">Published insights from our mystic writers.</p>
      </header>

      <section className="grid gap-4">
        {loading && <p className="text-muted-foreground">Loading...</p>}
        {!loading && articles.length === 0 && (
          <p className="text-muted-foreground">No articles published yet.</p>
        )}
        {articles.map((a) => (
          <Card key={a.id} as-child="true">
            <article>
              <CardHeader>
                <CardTitle>{a.title}</CardTitle>
                <CardDescription>{new Date(a.created_at).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-sm leading-6">
                  {a.content.length > 220 ? a.content.slice(0, 220) + "…" : a.content}
                </p>
                <div className="mt-3 text-sm">
                  <Link to="#" className="underline underline-offset-4">Read more</Link>
                </div>
              </CardContent>
            </article>
          </Card>
        ))}
      </section>
    </main>
  );
}
