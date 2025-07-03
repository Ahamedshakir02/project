import React from 'react';
import { Ship, Plane, Package, Warehouse, ArrowRight } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: Ship,
      title: 'Ocean Freight',
      description: 'Full container load (FCL) and less than container load (LCL) services with competitive rates and reliable schedules.',
      features: ['FCL & LCL Services', 'Port-to-Port Delivery', 'Customs Clearance', 'Insurance Coverage'],
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'Fast and secure air cargo services for time-sensitive shipments with global airline partnerships.',
      features: ['Express Delivery', 'Temperature Control', 'Dangerous Goods', 'Charter Services'],
      image: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Package,
      title: 'Project Cargo',
      description: 'Specialized handling of oversized, heavy-lift, and complex cargo requiring custom logistics solutions.',
      features: ['Heavy Lift Cargo', 'Route Surveys', 'Special Equipment', 'Project Management'],
      image: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Warehouse,
      title: 'Warehousing',
      description: 'Modern storage facilities with inventory management, distribution, and value-added services.',
      features: ['Climate Control', 'Inventory Management', 'Pick & Pack', 'Distribution'],
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive shipping and logistics solutions tailored to meet your business needs. 
            From ocean freight to specialized project cargo, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} service`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-ocean-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <button className="group/btn flex items-center text-ocean-500 hover:text-ocean-600 font-semibold transition-colors duration-300">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-navy-900 to-ocean-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg mb-6 text-gray-200">
              Our experts are ready to design a logistics solution tailored to your specific requirements.
            </p>
            <button className="bg-white text-navy-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;