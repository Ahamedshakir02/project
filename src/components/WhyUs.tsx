import React from 'react';
import { Clock, Shield, Globe, Headphones, TrendingUp, Award } from 'lucide-react';

const WhyUs: React.FC = () => {
  const features = [
    {
      icon: Clock,
      title: '24/7 Real-Time Tracking',
      description: 'Monitor your shipments around the clock with our advanced tracking system and instant notifications.'
    },
    {
      icon: Shield,
      title: 'Door-to-Door Service',
      description: 'Complete logistics solutions from pickup to final delivery, handling all documentation and customs.'
    },
    {
      icon: Globe,
      title: 'Customs Expertise',
      description: 'Navigate complex international regulations with our experienced customs clearance specialists.'
    },
    {
      icon: Headphones,
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges. Clear, competitive pricing with detailed cost breakdowns.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Reliability',
      description: 'Over 99% on-time delivery rate with a track record of successful international shipments.'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning service quality recognized by leading maritime and logistics associations.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sea Shark shipping operations at Dubai port"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-900 mb-1">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
                Why Choose Sea Shark Shipping?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                As Dubai's premier shipping and logistics partner, we combine cutting-edge technology 
                with decades of maritime expertise to deliver exceptional results. Our commitment to 
                excellence has made us the trusted choice for businesses worldwide.
              </p>
              
              <div className="flex items-center space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-ocean-500">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-ocean-500">50+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-ocean-500">99%</div>
                  <div className="text-sm text-gray-600">On-Time Delivery</div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="bg-gradient-to-r from-navy-900 to-ocean-500 p-3 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;