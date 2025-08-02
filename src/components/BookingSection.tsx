import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle } from "lucide-react";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const openWhatsApp = () => {
    const message = "Namaste Guruji, I'd like to book a pooja consultation.";
    const phoneNumber = "919767494564";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-20 px-4 relative bg-space-charcoal/50">
      {/* Sacred geometry background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="sacred-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-celestial-gold/20" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#sacred-pattern)" />
          </svg>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-celestial-gold mb-6">
            Book Your Sacred Consultation
          </h2>
          <p className="font-inter text-xl text-foreground/80 max-w-2xl mx-auto">
            Begin your spiritual journey with personalized guidance from Pandit Shri Mayur Kapse Guruji
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-celestial-gold to-transparent mx-auto mt-6" />
        </div>
        
        <div className="bg-space-indigo/30 backdrop-blur-sm rounded-2xl p-8 border border-celestial-gold/20 shadow-cosmic">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-celestial-gold font-inter font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-space-navy/50 border-celestial-gold/30 text-foreground focus:border-celestial-gold focus:shadow-divine"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-celestial-gold font-inter font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-space-navy/50 border-celestial-gold/30 text-foreground focus:border-celestial-gold focus:shadow-divine"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="service" className="text-celestial-gold font-inter font-medium">
                  Service Required *
                </Label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className="bg-space-navy/50 border-celestial-gold/30 text-foreground focus:border-celestial-gold">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-space-indigo border-celestial-gold/30">
                    <SelectItem value="kundli">Kundli Analysis</SelectItem>
                    <SelectItem value="graha-dosh">Graha Dosh Nivaran</SelectItem>
                    <SelectItem value="navagraha">Navagraha Pooja</SelectItem>
                    <SelectItem value="vastu">Vastu Consultation</SelectItem>
                    <SelectItem value="muhurat">Muhurat Selection</SelectItem>
                    <SelectItem value="rudrabhishek">Rudrabhishek</SelectItem>
                    <SelectItem value="horoscope">Online Horoscope</SelectItem>
                    <SelectItem value="gemstone">Gemstone Recommendation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date" className="text-celestial-gold font-inter font-medium">
                  Preferred Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-space-navy/50 border-celestial-gold/30 text-foreground focus:border-celestial-gold focus:shadow-divine"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-celestial-gold font-inter font-medium">
                Additional Message
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-space-navy/50 border-celestial-gold/30 text-foreground focus:border-celestial-gold focus:shadow-divine min-h-[100px]"
                placeholder="Share any specific concerns or questions..."
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                type="submit"
                variant="sacred" 
                size="lg"
                className="flex-1"
              >
                Book My Ritual
              </Button>
              
              <Button 
                type="button"
                variant="mystical"
                size="lg"
                onClick={openWhatsApp}
                className="flex-1 group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                WhatsApp Consultation
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={openWhatsApp}
          variant="sacred"
          size="icon"
          className="w-14 h-14 rounded-full shadow-divine animate-float-sacred"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default BookingSection;