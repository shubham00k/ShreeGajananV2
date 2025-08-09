import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface FileItem { name: string; id?: string }

export default function Gallery() {
  const [items, setItems] = useState<{ name: string; url: string }[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { document.title = "Gallery – Sacred Images"; }, []);

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      const { data: list, error } = await supabase.storage.from("gallery").list("", { limit: 100 });
      if (error) {
        setItems([]);
      } else {
        const withUrls = (list as FileItem[]).filter(Boolean).map((f) => {
          const { data } = supabase.storage.from("gallery").getPublicUrl(f.name);
          return { name: f.name, url: data.publicUrl };
        });
        setItems(withUrls);
      }
      setLoading(false);
    };
    run();
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <p className="text-muted-foreground">A public collection from our sacred "gallery" bucket.</p>
      </header>

      {loading && <p className="text-muted-foreground">Loading...</p>}
      {!loading && items.length === 0 && (
        <p className="text-muted-foreground">No images found yet.</p>
      )}

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((it) => (
          <figure key={it.name} className="rounded-lg overflow-hidden border bg-card">
            <img
              src={it.url}
              alt={`Gallery image ${it.name}`}
              loading="lazy"
              className="h-40 w-full object-cover"
            />
            <figcaption className="p-2 text-xs text-muted-foreground truncate">{it.name}</figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}
