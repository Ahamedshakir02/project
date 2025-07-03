import React from 'react';
import { Mail, Phone, Anchor } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-teal-600 to-blue-700 p-2 rounded-lg">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SEA SHARK</h3>
                <p className="text-sm text-gray-300">SHIPPING SERVICES</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Reliable shipping solutions with a commitment to excellence, 
              connecting businesses worldwide through secure and efficient logistics.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">info@seasharkshipping.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">+971 4 XXX XXXX</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Tracking Shipments</li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Home Delivery</li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Express Shipping</li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">International Freight</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2023 Sea Shark Shipping Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;