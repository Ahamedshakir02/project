import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Anchor, Calendar, Users, Package } from 'lucide-react';

const FleetShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const fleet = [
    {
      id: 1,
      name: 'MV Sea Shark Pioneer',
      type: 'Container Vessel',
      capacity: '2,500 TEU',
      year: '2019',
      crew: '22',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern container vessel equipped with advanced navigation systems and climate-controlled cargo holds.'
    },
    {
      id: 2,
      name: 'MV Ocean Guardian',
      type: 'Bulk Carrier',
      capacity: '45,000 DWT',
      year: '2020',
      crew: '25',
      image: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Heavy-duty bulk carrier designed for efficient transport of dry bulk commodities worldwide.'
    },
    {
      id: 3,
      name: 'MV Dubai Express',
      type: 'General Cargo',
      capacity: '12,000 DWT',
      year: '2021',
      crew: '18',
      image: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Versatile general cargo vessel with multi-purpose holds and heavy-lift capabilities.'
    },
    {
      id: 4,
      name: 'MV Teal Voyager',
      type: 'Tanker',
      capacity: '25,000 DWT',
      year: '2018',
      crew: '20',
      image: 'https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Chemical tanker with specialized coating systems for safe transport of liquid cargo.'
    },
    {
      id: 5,
      name: 'MV Shark Navigator',
      type: 'RoRo Vessel',
      capacity: '180 Vehicles',
      year: '2022',
      crew: '24',
      image: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Roll-on/roll-off vessel designed for efficient vehicle and trailer transportation.'
    },
    {
      id: 6,
      name: 'MV Maritime Star',
      type: 'Multipurpose',
      capacity: '15,000 DWT',
      year: '2020',
      crew: '21',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Multipurpose vessel with flexible cargo handling systems for diverse shipping needs.'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(fleet.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(fleet.length / 3)) % Math.ceil(fleet.length / 3));
  };

  const getVisibleFleet = () => {
    const startIndex = currentIndex * 3;
    return fleet.slice(startIndex, startIndex + 3);
  };

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Our Fleet
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Modern vessels equipped with state-of-the-art technology and operated by experienced maritime professionals. 
            Our diverse fleet ensures we can handle any shipping requirement with reliability and efficiency.
          </p>
        </div>

        {/* Fleet Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-r from-navy-900 to-ocean-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Anchor className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-navy-900 mb-2">12+</div>
            <div className="text-gray-600">Active Vessels</div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-navy-900 to-ocean-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-navy-900 mb-2">50K+</div>
            <div className="text-gray-600">TEU Capacity</div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-navy-900 to-ocean-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-navy-900 mb-2">250+</div>
            <div className="text-gray-600">Crew Members</div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-navy-900 to-ocean-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-navy-900 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>

        {/* Fleet Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleFleet().map((vessel) => (
              <div 
                key={vessel.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* Vessel Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={vessel.image}
                    alt={`${vessel.name} - ${vessel.type}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{vessel.name}</h3>
                    <p className="text-ocean-300">{vessel.type}</p>
                  </div>
                </div>

                {/* Vessel Details */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {vessel.description}
                  </p>
                  
                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Capacity</div>
                      <div className="font-semibold text-navy-900">{vessel.capacity}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Built</div>
                      <div className="font-semibold text-navy-900">{vessel.year}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{vessel.crew} Crew</span>
                    </div>
                    <button className="text-ocean-500 hover:text-ocean-600 font-semibold text-sm transition-colors duration-300">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {fleet.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg hover:shadow-xl text-navy-900 p-3 rounded-full transition-all duration-300 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg hover:shadow-xl text-navy-900 p-3 rounded-full transition-all duration-300 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {fleet.length > 3 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(fleet.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-ocean-500 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}

        {/* Fleet Certifications */}
        <div className="mt-16 bg-gradient-to-r from-navy-900 to-ocean-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Fleet Certifications & Standards</h3>
          <p className="text-lg text-gray-200 mb-6">
            All our vessels meet international maritime standards and hold valid certifications
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-xl font-bold">ISO 9001</div>
              <div className="text-sm text-gray-300">Quality Management</div>
            </div>
            <div>
              <div className="text-xl font-bold">ISPS</div>
              <div className="text-sm text-gray-300">Security Certified</div>
            </div>
            <div>
              <div className="text-xl font-bold">MARPOL</div>
              <div className="text-sm text-gray-300">Environmental Compliance</div>
            </div>
            <div>
              <div className="text-xl font-bold">SOLAS</div>
              <div className="text-sm text-gray-300">Safety Standards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetShowcase;