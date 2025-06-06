import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="ml-2 text-xl font-bold">PoultryFresh</span>
            </div>
            <p className="text-gray-400 mb-4">
              Fresh, high-quality poultry products delivered straight to your door. 
              Farm-to-table freshness you can trust.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Quality Promise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Delivery Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Whole Birds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chicken Cuts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Turkey</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Specialty Items</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fresh Eggs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-emerald-600 mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-emerald-600 mr-3" />
                <span className="text-gray-400">orders@poultryfresh.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-emerald-600 mr-3 mt-0.5" />
                <span className="text-gray-400">
                  123 Farm Road<br />
                  Fresh Valley, FV 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 PoultryFresh. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}