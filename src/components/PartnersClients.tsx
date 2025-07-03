import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PartnersClients: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample partner/client logos - replace with actual company logos
  const partners = [
    {
      name: 'Emirates Group',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Aviation'
    },
    {
      name: 'DP World',
      logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Ports & Terminals'
    },
    {
      name: 'ADNOC',
      logo: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Energy'
    },
    {
      name: 'Aramex',
      logo: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Logistics'
    },
    {
      name: 'Etisalat',
      logo: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Telecommunications'
    },
    {
      name: 'Al Futtaim Group',
      logo: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Retail & Automotive'
    },
    {
      name: 'Majid Al Futtaim',
      logo: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Real Estate'
    },
    {
      name: 'Dubai Ports',
      logo: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Maritime'
    },
    {
      name: 'Emaar Properties',
      logo: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Construction'
    },
    {
      name: 'Dubai Aluminum',
      logo: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=200&h=100',
      category: 'Manufacturing'
    }
  ];

  const testimonials = [
    {
      quote: "Sea Shark Shipping has been our trusted logistics partner for over 5 years. Their reliability and professional service have been instrumental in our supply chain success.",
      author: "Ahmed Al-Mansouri",
      position: "Supply Chain Director",
      company: "Emirates Trading Co."
    },
    {
      quote: "The team at Sea Shark consistently delivers on time and handles our complex project cargo with expertise. Their attention to detail is unmatched.",
      author: "Sarah Johnson",
      position: "Logistics Manager", 
      company: "Global Construction Ltd."
    },
    {
      quote: "From documentation to final delivery, Sea Shark Shipping provides end-to-end solutions that have streamlined our international operations significantly.",
      author: "Mohammed Hassan",
      position: "Operations Director",
      company: "Dubai Manufacturing Group"
    }
  ];

  // Auto-rotate partners carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / 5));
    }, 4000);
    return () => clearInterval(timer);
  }, [partners.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(partners.length / 5));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(partners.length / 5)) % Math.ceil(partners.length / 5));
  };

  const getVisiblePartners = () => {
    const startIndex = currentIndex * 5;
    return partners.slice(startIndex, startIndex + 5);
  };

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Partners Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Our Partners & Clients
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Trusted by leading companies across the UAE and beyond. We're proud to serve 
            businesses of all sizes with our comprehensive shipping and logistics solutions.
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="relative mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {getVisiblePartners().map((partner, index) => (
                <div 
                  key={`${partner.name}-${currentIndex}-${index}`}
                  className="group flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-3 group-hover:shadow-md transition-shadow duration-300">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-navy-900 text-sm mb-1">{partner.name}</div>
                    <div className="text-xs text-gray-500">{partner.category}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl text-navy-900 p-2 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl text-navy-900 p-2 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(partners.length / 5) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-ocean-500 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">
            What Our Clients Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6">
                  <div className="text-4xl text-ocean-500 mb-4">"</div>
                  <p className="text-gray-700 leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="font-semibold text-navy-900 mb-1">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-ocean-500 font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Recognition */}
        <div className="bg-gradient-to-r from-navy-900 to-ocean-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Industry Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-2">2023</div>
              <div className="text-sm text-gray-200">Best Shipping Service Award</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-2">ISO</div>
              <div className="text-sm text-gray-200">9001:2015 Certified</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm text-gray-200">Satisfied Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm text-gray-200">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersClients;