import React from 'react';
import { Package, Truck, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Package,
      title: 'Tracking Shipments',
      subtitle: 'Expert Service',
      description: 'Real-time tracking and monitoring of your cargo with detailed updates and professional handling throughout the journey.',
      features: ['24/7 Tracking', 'SMS Updates', 'Online Portal', 'Expert Support']
    },
    {
      icon: Truck,
      title: 'Home Delivery',
      subtitle: 'Always Prepared',
      description: 'Door-to-door delivery service with careful handling and flexible scheduling to meet your convenience.',
      features: ['Flexible Timing', 'Secure Handling', 'Professional Drivers', 'Insurance Coverage']
    },
    {
      icon: Zap,
      title: 'Express Shipping',
      subtitle: 'Attention to Detail',
      description: 'Fast-track shipping solutions for urgent cargo with priority handling and expedited customs clearance.',
      features: ['Priority Processing', 'Express Customs', 'Dedicated Support', 'Time Guarantee']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive shipping solutions tailored to meet your unique logistics needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-900 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-teal-600 font-semibold mb-4">
                  {service.subtitle}
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;