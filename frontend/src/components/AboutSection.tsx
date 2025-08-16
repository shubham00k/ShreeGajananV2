import { Button } from "@/components/ui/button";
import panditPortrait from "@/assets/mayur-guruji.jpeg";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 relative bg-space-indigo/30">
      {/* Sacred geometry background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-celestial-gold/30 rounded-full" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-celestial-gold/20 rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-celestial-gold/15 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-celestial-gold mb-6">
            About Panditji
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-celestial-gold to-transparent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group flex justify-center items-center bg-black/5 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-divine rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <img
              src={panditPortrait}
              alt="Pandit Shri Mayur Kapse Guruji"
              className="relative z-10 w-full max-h-[500px] object-contain rounded-xl shadow-cosmic hover:shadow-sacred transition-all duration-500"
            />
            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-celestial-gold" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-celestial-gold" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-celestial-gold" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-celestial-gold" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="font-cinzel text-3xl font-semibold text-celestial-gold-glow">
              Pandit Shri Mayur Kapse Guruji
            </h3>

            <div className="space-y-4 text-foreground/90 font-inter text-lg leading-relaxed">
              <p>
                A certified Vedic astrologer, Gemstone Astro Consultant, and Vastu expert based in
                <span className="text-celestial-gold"> Nerul, Navi Mumbai</span>.
              </p>

              <p>
                Known for disciplined rituals and precise predictions, Panditji offers deep guidance through
                <span className="text-celestial-gold-glow"> Kundli analysis, Graha dosh remedies, Muhurat selection</span>,
                and authentic pooja vidhi based on sacred Vedic scriptures.
              </p>

              <p>
                With years of dedicated study and practice, he bridges ancient wisdom with modern understanding,
                helping devotees navigate life's journey with divine guidance and
                <span className="text-celestial-gold"> spiritual clarity</span>.
              </p>
            </div>

            <div className="pt-6">
              <Button
                variant="divine"
                size="lg"
                className="group"
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="group-hover:animate-pulse">✨</span>
                Explore Gemstone Guidance
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
