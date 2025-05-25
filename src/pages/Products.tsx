import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, ArrowUpDown } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { products } from '../data/products';
import { Product } from '../types';

const Products: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [category, setCategory] = useState<string>(categoryParam || 'All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortOption, setSortOption] = useState<string>('newest');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  
  const categories = ['All', ...new Set(products.map(product => product.category))];
  const brands = ['All', ...new Set(products.map(product => product.brand))];
  
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (category !== 'All') {
      result = result.filter(product => product.category === category);
    }
    
    // Apply price range filter
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        result.sort((a, b) => b.id - a.id);
        break;
    }
    
    setFilteredProducts(result);
  }, [category, priceRange, sortOption]);
  
  // Update category when URL param changes
  useEffect(() => {
    if (categoryParam) {
      setCategory(categoryParam);
    } else {
      setCategory('All');
    }
  }, [categoryParam]);
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-neutral-800">Products</h1>
        <button 
          onClick={toggleFilters}
          className="md:hidden bg-neutral-100 p-2 rounded-lg flex items-center"
        >
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters */}
        <aside className={`md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden'} md:block`}>
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <h2 className="font-semibold text-lg mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map((cat, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    id={`category-${index}`}
                    name="category"
                    className="h-4 w-4 text-primary-500 focus:ring-primary-400"
                    checked={category === cat}
                    onChange={() => setCategory(cat)}
                  />
                  <label htmlFor={`category-${index}`} className="ml-2 text-sm text-neutral-700">
                    {cat}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <h2 className="font-semibold text-lg mb-4">Price Range</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-700">₹{priceRange[0]}</span>
                <span className="text-sm text-neutral-700">₹{priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </aside>
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-neutral-500">
                Showing <span className="font-medium">{filteredProducts.length}</span> products
              </p>
              
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-sm text-neutral-600">Sort by:</label>
                <div className="relative">
                  <select
                    id="sort"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="appearance-none bg-neutral-50 border border-neutral-200 text-neutral-700 py-2 pl-3 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 text-sm"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="rating">Best Rating</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-500">
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <h3 className="text-lg font-medium text-neutral-800 mb-2">No products found</h3>
                <p className="text-neutral-500">Try adjusting your filters to find what you're looking for.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;