import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/home/HeroBanner';
import ProductCarousel from '../components/ui/ProductCarousel';
import CategoryCard from '../components/ui/CategoryCard';
import { products, categories } from '../data/products';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <div className="pb-12">
      <HeroBanner />
      
      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-neutral-800">Product Categories</h2>
            <Link 
              to="/products" 
              className="text-primary-500 hover:text-primary-600 flex items-center text-sm font-medium"
            >
              View All Categories
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map(category => (
              <CategoryCard 
                key={category.id}
                id={category.id}
                name={category.name}
                image={category.image}
                count={category.count}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <ProductCarousel title="Featured Products" products={featuredProducts} />
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="py-12 bg-gradient-to-r from-primary-50 to-blue-50">
        <div className="container mx-auto px-4">
          <ProductCarousel 
            title="New Arrivals" 
            products={products.slice(0, 6)} 
          />
        </div>
      </section>
      
      {/* Info Banners */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary-50 p-6 rounded-lg flex items-center">
              <div className="bg-primary-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg text-neutral-800">Free Shipping</h3>
                <p className="text-neutral-600 text-sm">On orders over ₹999</p>
              </div>
            </div>
            
            <div className="bg-secondary-50 p-6 rounded-lg flex items-center">
              <div className="bg-secondary-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg text-neutral-800">Secure Payments</h3>
                <p className="text-neutral-600 text-sm">Protected by encryption</p>
              </div>
            </div>
            
            <div className="bg-success-50 p-6 rounded-lg flex items-center">
              <div className="bg-success-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg text-neutral-800">Customer Support</h3>
                <p className="text-neutral-600 text-sm">24/7 dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;