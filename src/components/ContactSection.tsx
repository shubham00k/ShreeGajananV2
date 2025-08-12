import { MapPin, Phone, Mail, Clock, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const openMap = () => {
    const address = "22Q6+8W7, Dharshana Society, Sector 14, Nerul, Navi Mumbai, Maharashtra 400706";
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapUrl, '_blank');
  };

  return (
    <section className="py-20 px-4 relative bg-space-navy">
      {/* Sacred background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-celestial-gold text-4xl">🕉️</div>
        <div className="absolute top-20 right-20 text-celestial-gold text-6xl">॥</div>
        <div className="absolute bottom-20 left-1/4 text-celestial-gold text-8xl">ॐ</div>
        <div className="absolute bottom-10 right-10 text-celestial-gold text-4xl">🔱</div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-celestial-gold mb-6">
            Sacred Contact
          </h2>
          <p className="font-inter text-xl text-foreground/80 max-w-2xl mx-auto">
            Connect with us for divine guidance and spiritual transformation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-celestial-gold to-transparent mx-auto mt-6" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-space-indigo/40 backdrop-blur-sm rounded-xl p-6 border border-celestial-gold/20 hover:border-celestial-gold/40 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-celestial-gold/10 rounded-full flex items-center justify-center group-hover:bg-celestial-gold/20 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-celestial-gold" />
                </div>
                <div>
                  <h3 className="font-cinzel text-xl font-semibold text-celestial-gold-glow mb-2">
                    Sacred Location
                  </h3>
                  <p className="font-inter text-foreground/80 leading-relaxed">
                    <span className="text-celestial-gold font-medium">Shree Vitthal Rakhumai Mandir</span><br />
                    22Q6+8W7, Dharshana Society,<br />
                    Sector 14, Nerul, Navi Mumbai,<br />
                    Maharashtra 400706
                  </p>
                  <Button 
                    variant="mystical" 
                    size="sm" 
                    onClick={openMap}
                    className="mt-3"
                  >
                    View on Map
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-space-indigo/40 backdrop-blur-sm rounded-xl p-6 border border-celestial-gold/20 hover:border-celestial-gold/40 transition-all duration-300 group">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-celestial-gold/10 rounded-full flex items-center justify-center group-hover:bg-celestial-gold/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-celestial-gold" />
                  </div>
                  <h3 className="font-cinzel text-lg font-semibold text-celestial-gold-glow">
                    Phone
                  </h3>
                </div>
                <a 
                  href="tel:+919767494564" 
                  className="font-inter text-foreground/80 hover:text-celestial-gold transition-colors duration-300"
                >
                  +91 97674 94564
                </a>
              </div>
              
              <div className="bg-space-indigo/40 backdrop-blur-sm rounded-xl p-6 border border-celestial-gold/20 hover:border-celestial-gold/40 transition-all duration-300 group">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-celestial-gold/10 rounded-full flex items-center justify-center group-hover:bg-celestial-gold/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-celestial-gold" />
                  </div>
                  <h3 className="font-cinzel text-lg font-semibold text-celestial-gold-glow">
                    Email
                  </h3>
                </div>
                <a 
                  href="mailto:mayurkapse040@gmail.com" 
                  className="font-inter text-foreground/80 hover:text-celestial-gold transition-colors duration-300 break-all"
                >
                  mayurkapse040@gmail.com
                </a>
              </div>
            </div>
            
            <div className="bg-space-indigo/40 backdrop-blur-sm rounded-xl p-6 border border-celestial-gold/20 hover:border-celestial-gold/40 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-celestial-gold/10 rounded-full flex items-center justify-center group-hover:bg-celestial-gold/20 transition-colors duration-300">
                  <Clock className="w-5 h-5 text-celestial-gold" />
                </div>
                <h3 className="font-cinzel text-lg font-semibold text-celestial-gold-glow">
                  Availability
                </h3>
              </div>
              <p className="font-inter text-foreground/80">
                <span className="text-celestial-gold font-medium">By Appointment Only</span><br />
                Call or WhatsApp to schedule your sacred consultation
              </p>
            </div>

            <div className="bg-space-indigo/40 backdrop-blur-sm rounded-xl p-6 border border-celestial-gold/20 hover:border-celestial-gold/40 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-celestial-gold/10 rounded-full flex items-center justify-center group-hover:bg-celestial-gold/20 transition-colors duration-300">
                  <Instagram className="w-5 h-5 text-celestial-gold" />
                </div>
                <h3 className="font-cinzel text-lg font-semibold text-celestial-gold-glow">
                  Instagram
                </h3>
              </div>
              <p className="font-inter text-foreground/80 mb-3">
                Follow our spiritual updates and pooja highlights.
              </p>
              <a
                href="https://www.instagram.com/vaidik_sanskruti15?igsh=c2t3eXRzeGlyMGl4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="mystical" size="sm">Visit Instagram</Button>
              </a>
            </div>
          </div>
          
          {/* Map */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-divine rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative z-10 bg-space-indigo/40 backdrop-blur-sm rounded-xl p-4 border border-celestial-gold/20 hover:border-celestial-gold/40 transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5234567890123!2d73.0186!3d19.0330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAyJzAxLjAiTiA3M8KwMDEnMDcuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Shree Vitthal Rakhumai Mandir Location"
              />
            </div>
            
            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-celestial-gold" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-celestial-gold" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-celestial-gold" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-celestial-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;