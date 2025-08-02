import { Star, Sun, Moon, Home, Clock, Gem, ScrollText, Sparkles } from "lucide-react";

const services = [
  {
    icon: ScrollText,
    title: "Kundli Analysis",
    description: "Detailed birth chart reading revealing your life's cosmic blueprint and destined path.",
    gradient: "from-celestial-gold to-celestial-gold-glow"
  },
  {
    icon: Star,
    title: "Graha Dosh Nivaran",
    description: "Sacred remedies to balance planetary influences and remove astrological obstacles.",
    gradient: "from-space-indigo to-celestial-gold-dim"
  },
  {
    icon: Sun,
    title: "Navagraha Pooja",
    description: "Divine rituals to appease the nine planets and enhance positive cosmic energies.",
    gradient: "from-celestial-gold-dim to-celestial-gold"
  },
  {
    icon: Home,
    title: "Vastu Consultation",
    description: "Harmonize your living and working spaces with ancient architectural wisdom.",
    gradient: "from-space-charcoal to-celestial-gold-glow"
  },
  {
    icon: Clock,
    title: "Muhurat Selection",
    description: "Perfect timing for life's important events based on cosmic alignments.",
    gradient: "from-celestial-gold to-space-indigo"
  },
  {
    icon: Moon,
    title: "Rudrabhishek",
    description: "Sacred Shiva worship rituals for spiritual purification and divine blessings.",
    gradient: "from-space-indigo to-celestial-gold-dim"
  },
  {
    icon: Sparkles,
    title: "Online Horoscope",
    description: "Comprehensive digital astrological readings accessible from anywhere.",
    gradient: "from-celestial-gold-glow to-space-charcoal"
  },
  {
    icon: Gem,
    title: "Gemstone Recommendation",
    description: "Personalized gemstone guidance to amplify positive planetary influences.",
    gradient: "from-space-navy to-celestial-gold"
  }
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
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className="group relative p-6 rounded-xl bg-space-indigo/40 backdrop-blur-sm border border-celestial-gold/20 hover:border-celestial-gold/60 transition-all duration-500 hover:shadow-sacred hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-celestial-gold/10 group-hover:bg-celestial-gold/20 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-celestial-gold group-hover:animate-pulse" />
                  </div>
                  
                  <h3 className="font-cinzel text-xl font-semibold text-celestial-gold-glow mb-3 text-center">
                    {service.title}
                  </h3>
                  
                  <p className="font-inter text-foreground/80 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Mystical corner decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-celestial-gold/30 group-hover:border-celestial-gold transition-colors duration-300" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-celestial-gold/30 group-hover:border-celestial-gold transition-colors duration-300" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-celestial-gold/30 group-hover:border-celestial-gold transition-colors duration-300" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-celestial-gold/30 group-hover:border-celestial-gold transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;