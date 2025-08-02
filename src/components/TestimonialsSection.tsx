import { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Panditji's gemstone recommendation completely transformed my life. The ruby he suggested for my career brought unprecedented success within months. His knowledge of Vedic astrology is truly divine.",
    service: "Gemstone Consultation"
  },
  {
    name: "Rajesh Patel",
    location: "Navi Mumbai",
    rating: 5,
    text: "The Vastu consultation for our new home was incredibly detailed. Panditji's guidance on room placement and energy flow brought such peace and prosperity to our family. Highly recommended!",
    service: "Vastu Consultation"
  },
  {
    name: "Anita Desai",
    location: "Thane",
    rating: 5,
    text: "The Navagraha Pooja performed by Panditji was deeply spiritual. His disciplined approach and authentic rituals created a profound sense of divine connection. Truly blessed experience.",
    service: "Navagraha Pooja"
  },
  {
    name: "Vikram Singh",
    location: "Pune",
    rating: 5,
    text: "My Kundli analysis was remarkably accurate. Panditji predicted major life events that came true exactly as foretold. His insights helped me make important decisions with confidence.",
    service: "Kundli Analysis"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 relative bg-gradient-to-b from-space-indigo/30 to-space-charcoal/50 overflow-hidden">
      {/* Mystical background mandala */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="w-96 h-96 border-4 border-celestial-gold rounded-full">
          <div className="w-full h-full border-2 border-celestial-gold/50 rounded-full m-8">
            <div className="w-full h-full border border-celestial-gold/30 rounded-full m-8">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-celestial-gold text-8xl">ॐ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-celestial-gold mb-6">
            Sacred Testimonials
          </h2>
          <p className="font-inter text-xl text-foreground/80 max-w-2xl mx-auto">
            Voices of transformation from souls touched by divine guidance
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-celestial-gold to-transparent mx-auto mt-6" />
        </div>
        
        <div className="relative">
          <div className="bg-space-indigo/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-celestial-gold/20 shadow-cosmic min-h-[300px] flex items-center">
            <div className="w-full">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentIndex 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 absolute transform translate-x-8'
                  }`}
                >
                  <div className="text-center">
                    <Quote className="w-12 h-12 text-celestial-gold mx-auto mb-6 opacity-50" />
                    
                    <blockquote className="font-inter text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 max-w-3xl mx-auto italic">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-celestial-gold fill-celestial-gold" />
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-cinzel text-xl font-semibold text-celestial-gold-glow">
                        {testimonial.name}
                      </h4>
                      <p className="text-foreground/60 font-inter">
                        {testimonial.location} • {testimonial.service}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-celestial-gold shadow-sacred' 
                    : 'bg-celestial-gold/30 hover:bg-celestial-gold/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;