import ganesh from "@/assets/services/ganesh-pujan.jpg";
import pran from "@/assets/services/pran-pratishtha.jpg";
import vivah from "@/assets/services/vivah-wedding.jpg";
import satyanarayan from "@/assets/services/satyanarayan-puja.jpg";
import kalsarp from "@/assets/services/kalsarp-shanti.jpg";
import upanayan from "@/assets/services/upanayan-sanskar.jpg";
import navgrah from "@/assets/services/navgrah-shanti.jpg";
import nakshatra from "@/assets/services/nakshatra-shanti.jpg";
import navchandi from "@/assets/services/navchandi-yadnya.jpg";
import vastuShanti from "@/assets/services/vastu-shanti.jpg";
import kalbhairav from "@/assets/services/kalbhairav-pujan.jpg";
import rudra from "@/assets/services/rudra-abhishek.jpg";
import ratna from "@/assets/services/ratna-sanskar.jpg";
import vastuParikshan from "@/assets/services/vastu-parikshan.jpg";
import patrika from "@/assets/services/patrika-nirakshan.jpg";

const services = [
  { image: ganesh, title: "Shree Ganesh Pujan", description: "Invoke Lord Ganesha's blessings for auspicious beginnings and success." },
  { image: pran, title: "Pran Pratishtha", description: "Consecration of deity idols with sacred Vedic rites for divine presence." },
  { image: vivah, title: "Vivah (Wedding Ceremony)", description: "Traditional Vedic marriage rituals for a blissful lifelong union." },
  { image: satyanarayan, title: "Satyanarayan Puja", description: "Devotional puja for prosperity, harmony, and fulfillment of wishes." },
  { image: kalsarp, title: "Kal Sarp Shanti", description: "Remedial rites to pacify Kal Sarp dosh and restore life balance." },
  { image: upanayan, title: "Upanayan Sanskar", description: "Sacred thread ceremony marking the beginning of Vedic education." },
  { image: navgrah, title: "Navgrah Shanti", description: "Balance planetary influences to invite positivity and overall growth." },
  { image: nakshatra, title: "Nakshatra Shanti", description: "Pacify birth star influences for peace, protection, and well‑being." },
  { image: navchandi, title: "Navchandi Yadnya", description: "Powerful Chandi homa for strength, protection, and divine grace." },
  { image: vastuShanti, title: "Vastu Shanti", description: "Energize your home or office to align with cosmic harmony." },
  { image: kalbhairav, title: "Kalbhairav Pujan", description: "Seek Lord Bhairav's protection, courage, and removal of obstacles." },
  { image: rudra, title: "Rudra Abhishek", description: "Abhishek of Shiva for spiritual purification and blessings." },
  { image: ratna, title: "Ratna Sanskar", description: "Energizing gemstones through mantras for beneficial effects." },
  { image: vastuParikshan, title: "Vastu Parikshan", description: "Comprehensive Vastu inspection with practical corrective guidance." },
  { image: patrika, title: "Patrika Nirakshan", description: "Detailed horoscope analysis for life guidance and remedies." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 relative bg-gradient-cosmic">
      {/* Mystical background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 text-celestial-gold text-6xl">॥</div>
        <div className="absolute bottom-32 right-1/4 text-celestial-gold text-8xl">ॐ</div>
        <div className="absolute top-1/2 left-10 text-celestial-gold text-4xl">🕉️</div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-celestial-gold mb-6">
            Sacred Services
          </h2>
          <p className="font-inter text-xl text-foreground/80 max-w-3xl mx-auto">
            Ancient wisdom for modern souls. Experience the transformative power of Vedic sciences.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-celestial-gold to-transparent mx-auto mt-8" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            return (
              <div 
                key={service.title}
                className="group relative rounded-xl bg-space-indigo/40 backdrop-blur-sm border border-celestial-gold/20 hover:border-celestial-gold/60 transition-all duration-500 hover:shadow-sacred overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} service thumbnail`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-cinzel text-lg font-semibold text-celestial-gold-glow mb-2 text-center">
                    {service.title}
                  </h3>
                  <p className="font-inter text-foreground/80 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;