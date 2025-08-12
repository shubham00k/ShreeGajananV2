import { MessageCircle, Youtube, Home, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    const message = "Namaste Guruji, I'd like to book a pooja consultation.";
    const phoneNumber = "919767494564";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="relative bg-cosmic-deep border-t border-celestial-gold/20">
      {/* Sacred texture background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
            <defs>
              <pattern id="footer-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <text x="5" y="7" textAnchor="middle" className="text-celestial-gold fill-current text-xs">ॐ</text>
              </pattern>
            </defs>
            <rect width="100" height="50" fill="url(#footer-pattern)" />
          </svg>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-cinzel text-2xl font-bold text-celestial-gold mb-4">
              Shree Gajanan Vastu Jyotish
            </h3>
            <p className="font-inter text-foreground/70 leading-relaxed mb-4">
              Sacred wisdom meets modern guidance. Discover your divine path through ancient Vedic sciences.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <button
                onClick={openWhatsApp}
                className="w-10 h-10 bg-celestial-gold/10 hover:bg-celestial-gold/20 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-divine group"
              >
                <MessageCircle className="w-5 h-5 text-celestial-gold group-hover:animate-pulse" />
              </button>
              <a
                href="https://www.instagram.com/vaidik_sanskruti15?igsh=c2t3eXRzeGlyMGl4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-celestial-gold/10 hover:bg-celestial-gold/20 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-divine group"
              >
                <Instagram className="w-5 h-5 text-celestial-gold group-hover:animate-pulse" />
              </a>
              <button className="w-10 h-10 bg-celestial-gold/10 hover:bg-celestial-gold/20 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-divine group">
                <Youtube className="w-5 h-5 text-celestial-gold group-hover:animate-pulse" />
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-cinzel text-xl font-semibold text-celestial-gold-glow mb-4">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block mx-auto font-inter text-foreground/70 hover:text-celestial-gold transition-colors duration-300"
              >
                <Home className="w-4 h-4 inline mr-2" />
                Home
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto font-inter text-foreground/70 hover:text-celestial-gold transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto font-inter text-foreground/70 hover:text-celestial-gold transition-colors duration-300"
              >
                Contact
              </button>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-cinzel text-xl font-semibold text-celestial-gold-glow mb-4">
              Divine Contact
            </h4>
            <div className="space-y-3">
              <a 
                href="tel:+919767494564"
                className="flex items-center justify-center md:justify-end font-inter text-foreground/70 hover:text-celestial-gold transition-colors duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 97674 94564
              </a>
              <a 
                href="mailto:mayurkapse040@gmail.com"
                className="flex items-center justify-center md:justify-end font-inter text-foreground/70 hover:text-celestial-gold transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                mayurkapse040@gmail.com
              </a>
              <p className="font-inter text-foreground/70 text-sm">
                Nerul, Navi Mumbai
              </p>
            </div>
          </div>
        </div>
        
        {/* Sacred divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-celestial-gold/20" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-cosmic-deep px-4 text-celestial-gold text-2xl">ॐ</div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="font-inter text-foreground/50 text-sm">
            © {currentYear} Shree Gajanan Vastu Jyotish. All rights reserved.
          </p>
          <p className="font-inter text-foreground/30 text-xs mt-2">
            May divine blessings guide your spiritual journey
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;