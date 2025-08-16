import { useEffect } from "react";

interface GalleryItem {
  src: string;
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/devi.jpeg",
    title: "Navchandi",
    description: "A sacred Navchandi Pujan, invoking the blessings of the nine forms of Goddess Durga through elaborate rituals and devotion."
  },
  {
    src: "/gallery/pran.jpeg",
    title: "Pran Pratistha",
    description: "The auspicious Pran Pratishtha ceremony, infusing the deity’s idol with divine presence through Vedic mantras and rituals."
  },
  {
    src: "/gallery/saptapadi.jpeg",
    title: "Saptapadi",
    description: "An intricate Saptapadi design, hand-drawn by Guruji, symbolizing the seven sacred steps of unity and commitment."
  },

    {
    src: "/gallery/dutta.jpeg",
    title: "Dutta Yag",
    description: "The holy Dutta Yag, a sacred fire ritual dedicated to Lord Dattatreya, performed to invoke divine blessings and spiritual prosperity", 
}, 
{
  src: "/gallery/navC2.jpeg",
    title: "Durga Pujan",
    description: "A devotional Durga Pujan, honoring the Goddess with prayers, offerings, and rituals to seek her strength and protection.",
},
{
  src: "/gallery/kalbhairav.jpeg",
    title: "Kalbhairav Pujan",
    description: "The revered KalBhairav Pujan, honoring the fierce guardian deity for protection, courage, and the removal of negative energies.",
}, 
{
  src: "/gallery/vastu.jpeg",
    title: "Vastu Shanti",
    description: "The Vastu Shanti ceremony, performed to purify and harmonize a space, invoking divine blessings for peace, prosperity, and well-being.",
},
{
      src: "/gallery/vastu.jpeg",
    title: "Vastu Shanti",
    description:"",
},
{
  src: "/gallery/navchandi.jpeg",
    title: "Chandi Havan ",
    description: "Fire ritual performed with recitation of Devi Mahatmyam for strength and protection.",
},

];

export default function Gallery() {
  useEffect(() => {
    document.title = "Gallery – Sacred Images";
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <p className="text-muted-foreground">
          A curated collection of sacred images with their stories.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <figure
            key={index}
            className="rounded-lg overflow-hidden border bg-card shadow hover:shadow-lg transition"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-auto object-contain"
              />

            
            <figcaption className="p-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
  );
}
