import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const OfficeMap: React.FC = () => {
  const openMap = () => {
    const address = "Al Bada'a, Dubai, United Arab Emirates";
    const encodedAddress = encodeURIComponent(address);
    
    // Detect device and open appropriate map app
    const userAgent = navigator.userAgent;
    
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      // iOS - try Apple Maps first, fallback to Google Maps
      window.open(`maps://maps.google.com/maps?daddr=${encodedAddress}`, '_blank');
      setTimeout(() => {
        window.open(`https://maps.google.com/maps?daddr=${encodedAddress}`, '_blank');
      }, 25);
    } else if (/android/i.test(userAgent)) {
      // Android - try Google Maps app first
      window.open(`intent://maps.google.com/maps?daddr=${encodedAddress}#Intent;scheme=https;package=com.google.android.apps.maps;end`, '_blank');
      setTimeout(() => {
        window.open(`https://maps.google.com/maps?daddr=${encodedAddress}`, '_blank');
      }, 25);
    } else {
      // Desktop/Other - open Google Maps in browser
      window.open(`https://maps.google.com/maps?daddr=${encodedAddress}`, '_blank');
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Our Location
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Strategically located in the heart of Dubai's business district, 
            we're perfectly positioned to serve your shipping and logistics needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
          <div className="relative">
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-96 relative">
              {/* Interactive Map Placeholder */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1234567890!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTQuOSJF!5e0!3m2!1sen!2sae!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sea Shark Shipping Services Location"
                className="rounded-2xl"
              />
              
              {/* Map Overlay with Company Info */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-navy-900 to-ocean-500 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900">Sea Shark Shipping</div>
                    <div className="text-sm text-gray-600">Dubai, UAE</div>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <button
                onClick={openMap}
                className="absolute bottom-4 right-4 bg-gradient-to-r from-navy-900 to-ocean-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </button>
            </div>
          </div>

          {/* Office Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-navy-900 mb-6">
                Visit Our Office
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our modern office facility is equipped with the latest technology and staffed 
                by experienced professionals ready to assist with all your shipping requirements. 
                We welcome clients to visit us for consultations and service discussions.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="bg-gradient-to-r from-navy-900 to-ocean-500 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-2">Head Office Address</h4>
                  <button
                    onClick={openMap}
                    className="text-gray-600 hover:text-ocean-500 transition-colors duration-300 text-left"
                  >
                    Al Bada'a – Dubai – United Arab Emirates
                    <span className="block text-sm text-ocean-500 mt-1">
                      📍 Click for directions
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="bg-gradient-to-r from-navy-900 to-ocean-500 p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-2">Phone Numbers</h4>
                  <div className="space-y-1">
                    <a
                      href="tel:+97144XXXXXX"
                      className="block text-gray-600 hover:text-ocean-500 transition-colors duration-300"
                    >
                      +971 4 XXX XXXX (Main)
                    </a>
                    <a
                      href="tel:+97150XXXXXXX"
                      className="block text-gray-600 hover:text-ocean-500 transition-colors duration-300"
                    >
                      +971 50 XXX XXXX (Mobile)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="bg-gradient-to-r from-navy-900 to-ocean-500 p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-2">Email Addresses</h4>
                  <div className="space-y-1">
                    <a
                      href="mailto:info@seasharkshipping.com"
                      className="block text-gray-600 hover:text-ocean-500 transition-colors duration-300"
                    >
                      info@seasharkshipping.com
                    </a>
                    <a
                      href="mailto:operations@seasharkshipping.com"
                      className="block text-gray-600 hover:text-ocean-500 transition-colors duration-300"
                    >
                      operations@seasharkshipping.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="bg-gradient-to-r from-navy-900 to-ocean-500 p-3 rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-2">Business Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                    <div>Saturday: 9:00 AM - 2:00 PM</div>
                    <div>Sunday: Closed</div>
                    <div className="text-sm text-ocean-500 mt-2">
                      24/7 Emergency Support Available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-gradient-to-r from-navy-900 to-ocean-500 p-6 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-4">On-Site Services</h4>
              <ul className="space-y-2 text-gray-200">
                <li>• Free shipping consultations</li>
                <li>• Documentation assistance</li>
                <li>• Cargo inspection facilities</li>
                <li>• Customer service desk</li>
                <li>• Secure parking available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeMap;