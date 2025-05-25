import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ShoppingBag, HelpCircle } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="text-8xl font-bold text-primary-500 mb-4">404</div>
          <h1 className="text-2xl font-bold text-neutral-800 mb-4">Page Not Found</h1>
          <p className="text-neutral-600 mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link
              to="/"
              className="flex items-center justify-center bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            
            <Link
              to="/products"
              className="flex items-center justify-center bg-secondary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary-600 transition-colors"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Browse Products
            </Link>
          </div>
          
          <div className="border-t border-neutral-200 pt-6 space-y-4">
            <p className="text-neutral-700 font-medium">Looking for something specific?</p>
            
            <div className="flex items-center max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 py-2 px-4 rounded-l-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
              <button className="bg-neutral-100 text-neutral-700 py-2 px-4 rounded-r-lg border border-neutral-300 border-l-0 hover:bg-neutral-200 transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
            
            <p className="text-sm text-neutral-500">
              Need help? <Link to="/contact" className="text-primary-500 hover:text-primary-600">Contact our support team</Link> or 
              check our <Link to="/faq" className="text-primary-500 hover:text-primary-600">FAQ</Link>.
            </p>
          </div>
        </div>
        
        <div className="mt-8 flex items-center justify-center">
          <HelpCircle className="text-neutral-400 h-5 w-5 mr-2" />
          <span className="text-neutral-500">
            Error code: 404 - Page not found
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;