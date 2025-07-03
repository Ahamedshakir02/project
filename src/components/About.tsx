import React from 'react';
import { Shield, Users, Clock, Globe } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Your cargo is protected with comprehensive insurance and tracking.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional logistics specialists with years of experience.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Punctual service that meets your deadlines every time.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Worldwide shipping connections for seamless international trade.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            All About SEA SHARK SHIPPING SERVICES
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We are committed to providing fast, efficient, and honest shipping services 
            with open communication every step of the way. Our experienced team ensures 
            your cargo reaches its destination safely and on time, backed by our 
            unwavering commitment to excellence and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
              >
                <div className="bg-gradient-to-r from-blue-900 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;