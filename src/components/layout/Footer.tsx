import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-primary-300">Robu</span>
              <span className="text-2xl font-bold text-secondary-400">.in</span>
            </Link>
            <p className="text-neutral-400 mb-4">
              Your one-stop shop for robotics, electronics, and DIY components. Quality products for makers, hobbyists, and professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-300 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-primary-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-400 hover:text-primary-300 transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-primary-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-primary-300 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="text-neutral-400 hover:text-primary-300 transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=Development%20Boards" className="text-neutral-400 hover:text-primary-300 transition-colors">
                  Development Boards
                </Link>
              </li>
              <li>
                <Link to="/products?category=Sensors" className="text-neutral-400 hover:text-primary-300 transition-colors">
                  Sensors
                </Link>
              </li>
              <li>
                <Link to="/products?category=Motors" className="text-neutral-400 hover:text-primary-300 transition-colors">
                  Motors
                </Link>
              </li>
              <li>
                <Link to="/products?category=Displays" className="text-neutral-400 hover:text-primary-300 transition-colors">
                  Displays
                </Link>
              </li>
              <li>
                <Link to="/products?category=Tools" className="text-neutral-400 hover:text-primary-300 transition-colors">
                  Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 text-primary-300 flex-shrink-0 mt-1" size={18} />
                <span className="text-neutral-400">123 Electronics Street, Tech City, 560001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-primary-300 flex-shrink-0" size={18} />
                <span className="text-neutral-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-primary-300 flex-shrink-0" size={18} />
                <span className="text-neutral-400">support@robu.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter and Payment Info */}
        <div className="mt-10 pt-6 border-t border-neutral-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Subscribe to Our Newsletter</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="py-2 px-4 rounded-l-lg focus:outline-none text-neutral-800 w-full max-w-xs"
                />
                <button className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="text-right">
              <h3 className="text-lg font-semibold mb-3 text-white text-left md:text-right">Secure Payments</h3>
              <div className="flex space-x-2 justify-start md:justify-end">
                <div className="bg-white text-neutral-800 rounded p-1 h-8 w-12 flex items-center justify-center text-xs font-bold">VISA</div>
                <div className="bg-white text-neutral-800 rounded p-1 h-8 w-12 flex items-center justify-center text-xs font-bold">MC</div>
                <div className="bg-white text-neutral-800 rounded p-1 h-8 w-12 flex items-center justify-center text-xs font-bold">AMEX</div>
                <div className="bg-white text-neutral-800 rounded p-1 h-8 w-12 flex items-center justify-center text-xs font-bold">PayPal</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-neutral-700 text-center text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} Robu.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;