import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Heart, Menu, X, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { getCartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-500">Robu</span>
            <span className="text-2xl font-bold text-secondary-500">.in</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`font-medium hover:text-primary-500 transition-colors ${
                location.pathname === '/' ? 'text-primary-500' : 'text-neutral-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`font-medium hover:text-primary-500 transition-colors ${
                location.pathname === '/products' ? 'text-primary-500' : 'text-neutral-700'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`font-medium hover:text-primary-500 transition-colors ${
                location.pathname === '/about' ? 'text-primary-500' : 'text-neutral-700'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium hover:text-primary-500 transition-colors ${
                location.pathname === '/contact' ? 'text-primary-500' : 'text-neutral-700'
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/faq" 
              className={`font-medium hover:text-primary-500 transition-colors ${
                location.pathname === '/faq' ? 'text-primary-500' : 'text-neutral-700'
              }`}
            >
              FAQ
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center relative w-1/3">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 px-4 pr-10 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 h-5 w-5" />
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/account" className="hidden md:block p-2 rounded-full hover:bg-neutral-100 transition-colors">
              <User className="h-5 w-5 text-neutral-700" />
            </Link>
            <Link to="/wishlist" className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
              <Heart className="h-5 w-5 text-neutral-700" />
            </Link>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 rounded-full hover:bg-neutral-100 transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5 text-neutral-700" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {getCartCount()}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2 rounded-full hover:bg-neutral-100 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-neutral-700" />
              ) : (
                <Menu className="h-6 w-6 text-neutral-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 px-4 pr-10 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 h-5 w-5" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium py-2 border-b border-neutral-100 ${
                  location.pathname === '/' ? 'text-primary-500' : 'text-neutral-700'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`font-medium py-2 border-b border-neutral-100 ${
                  location.pathname === '/products' ? 'text-primary-500' : 'text-neutral-700'
                }`}
              >
                Products
              </Link>
              <Link 
                to="/about" 
                className={`font-medium py-2 border-b border-neutral-100 ${
                  location.pathname === '/about' ? 'text-primary-500' : 'text-neutral-700'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium py-2 border-b border-neutral-100 ${
                  location.pathname === '/contact' ? 'text-primary-500' : 'text-neutral-700'
                }`}
              >
                Contact
              </Link>
              <Link 
                to="/faq" 
                className={`font-medium py-2 ${
                  location.pathname === '/faq' ? 'text-primary-500' : 'text-neutral-700'
                }`}
              >
                FAQ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;