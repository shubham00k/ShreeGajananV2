import { Button } from "@/components/ui/button";
const horoscopeWheel = "/new-wheel-removebg-preview.png";
import starsBackground from "@/assets/stars-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-8 md:pb-16">
      {/* Background layers */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${starsBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-cosmic opacity-40" />
      
      {/* Animated horoscope wheel - oversized to prevent edge visibility */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40">
        <div 
      className="bg-contain bg-center animate-horoscope-rotate bg-no-repeat"
       style={{
       backgroundImage: `url(${horoscopeWheel})`,
      width: '100vmin', // fit inside smallest screen dimension
      height: '100vmin'
        }}
     />

      </div>
      
      {/* Floating stars */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-celestial-gold rounded-full animate-star-twinkle" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-celestial-gold-glow rounded-full animate-star-twinkle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-celestial-gold rounded-full animate-star-twinkle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-celestial-gold-glow rounded-full animate-star-twinkle" style={{ animationDelay: '0.5s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-celestial-gold mb-4 md:mb-6 animate-glow-pulse leading-tight">
            Shree Gajanan
          </h1>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-celestial-gold-glow mb-6 md:mb-8 leading-tight">
            Vastu Jyotish
          </h2>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="font-inter text-base sm:text-lg md:text-xl lg:text-2xl text-foreground mb-3 md:mb-4 max-w-2xl mx-auto px-2">
            Vedic Astrology • Vastu Shastra • Gemstone Consultation
          </p>
          <p className="font-inter text-sm sm:text-base md:text-lg text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            Sacred wisdom meets modern guidance. Discover your divine path through ancient Vedic sciences.
          </p>
        </div>
        
        <div className="animate-divine-scale" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="sacred" 
            size="xl"
            className="hover:shadow-sacred hover:scale-105 transition-all duration-500"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Consultation
          </Button>
        </div>
      </div>
      
      {/* Mystical gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;