import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingCart, Truck, Shield, ArrowRight, ChevronRight } from 'lucide-react';
import Rating from '../components/ui/Rating';
import ProductCarousel from '../components/ui/ProductCarousel';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products';
import { Product } from '../types';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  const { addToCart, isInCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  
  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Find related products (same category)
        const related = products.filter(p => 
          p.category === foundProduct.category && p.id !== foundProduct.id
        ).slice(0, 4);
        setRelatedProducts(related);
      }
    }
    
    // Reset quantity when product changes
    setQuantity(1);
    
    // Scroll to top on product change
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-2.5"></div>
          <div className="h-4 bg-gray-200 rounded mb-2.5 w-5/6 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
        </div>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (!isInCart(product.id)) {
      addToCart(product, quantity);
    }
  };
  
  const handleWishlist = () => {
    toggleWishlist(product);
  };
  
  const isAddedToCart = isInCart(product.id);
  const isWishlisted = isInWishlist(product.id);
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm mb-6">
        <Link to="/" className="text-neutral-500 hover:text-primary-500">Home</Link>
        <ChevronRight className="h-4 w-4 mx-1 text-neutral-400" />
        <Link to="/products" className="text-neutral-500 hover:text-primary-500">Products</Link>
        <ChevronRight className="h-4 w-4 mx-1 text-neutral-400" />
        <Link to={`/products?category=${product.category}`} className="text-neutral-500 hover:text-primary-500">
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1 text-neutral-400" />
        <span className="text-neutral-700 font-medium truncate">{product.name}</span>
      </nav>
      
      {/* Product Detail */}
      <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden border border-neutral-200">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain aspect-square bg-white"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-2xl font-bold text-neutral-800 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <Rating value={product.rating} reviews={product.reviewCount} />
              <span className="mx-2 text-neutral-300">|</span>
              <span className="text-sm text-neutral-500">Brand: <span className="text-neutral-700">{product.brand}</span></span>
            </div>
            
            <div className="flex items-baseline mb-6">
              <span className="text-2xl font-bold text-neutral-800">₹{product.price}</span>
              {product.oldPrice && (
                <>
                  <span className="ml-2 text-neutral-400 line-through">₹{product.oldPrice}</span>
                  <span className="ml-2 bg-secondary-100 text-secondary-800 text-xs px-2 py-0.5 rounded">
                    {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>
            
            <div className="mb-6">
              <p className="text-neutral-600">{product.description}</p>
            </div>
            
            <div className={`inline-block px-3 py-1 rounded text-sm mb-6 ${
              product.stockStatus === 'In Stock' 
                ? 'bg-success-100 text-success-700' 
                : product.stockStatus === 'Low Stock'
                  ? 'bg-warning-100 text-warning-700'
                  : 'bg-error-100 text-error-700'
            }`}>
              {product.stockStatus}
            </div>
            
            {/* Quantity Selector */}
            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="p-2 border border-neutral-300 rounded-l-lg hover:bg-neutral-100 transition-colors"
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 p-2 text-center border-t border-b border-neutral-300 focus:outline-none"
                />
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="p-2 border border-neutral-300 rounded-r-lg hover:bg-neutral-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={isAddedToCart}
                className={`flex-1 py-3 px-6 rounded-lg flex items-center justify-center font-medium ${
                  isAddedToCart
                    ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                    : 'bg-primary-500 text-white hover:bg-primary-600 transition-colors'
                }`}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
              </button>
              
              <button
                onClick={handleWishlist}
                className={`px-4 rounded-lg flex items-center justify-center border ${
                  isWishlisted
                    ? 'bg-secondary-50 border-secondary-200 text-secondary-500'
                    : 'border-neutral-300 hover:border-neutral-400 text-neutral-700'
                } transition-colors`}
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-secondary-500' : ''}`} />
              </button>
            </div>
            
            {/* Product Meta */}
            <div className="space-y-3 border-t border-neutral-200 pt-6">
              <div className="flex items-center text-sm text-neutral-600">
                <Truck className="h-5 w-5 mr-2 text-primary-500" />
                Free shipping on orders over ₹999
              </div>
              <div className="flex items-center text-sm text-neutral-600">
                <Shield className="h-5 w-5 mr-2 text-primary-500" />
                1 Year Warranty
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm mb-12">
        <div className="border-b border-neutral-200">
          <nav className="flex overflow-x-auto">
            <button
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === 'description'
                  ? 'border-b-2 border-primary-500 text-primary-500'
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === 'specifications'
                  ? 'border-b-2 border-primary-500 text-primary-500'
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
            <button
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-primary-500 text-primary-500'
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({product.reviewCount})
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'description' && (
            <div>
              <p className="text-neutral-700 mb-4">{product.description}</p>
              <p className="text-neutral-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. 
                Duis vulputate commodo lectus, ac blandit elit tincidunt id.
              </p>
              <p className="text-neutral-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          )}
          
          {activeTab === 'specifications' && (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="py-3 text-sm font-medium text-neutral-700 w-1/3">Brand</td>
                    <td className="py-3 text-sm text-neutral-600">{product.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-sm font-medium text-neutral-700">Category</td>
                    <td className="py-3 text-sm text-neutral-600">{product.category}</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-sm font-medium text-neutral-700">Rating</td>
                    <td className="py-3 text-sm text-neutral-600">{product.rating} out of 5</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-sm font-medium text-neutral-700">Tags</td>
                    <td className="py-3 text-sm text-neutral-600">{product.tags.join(', ')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-medium text-neutral-800">Customer Reviews</h3>
                  <div className="flex items-center mt-1">
                    <Rating value={product.rating} />
                    <span className="ml-2 text-sm text-neutral-500">Based on {product.reviewCount} reviews</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-primary-50 text-primary-600 rounded-lg text-sm font-medium hover:bg-primary-100 transition-colors">
                  Write a Review
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="border-b border-neutral-200 pb-6">
                  <div className="flex items-center mb-2">
                    <span className="font-medium text-neutral-800 mr-3">John D.</span>
                    <Rating value={5} size="sm" />
                    <span className="ml-auto text-sm text-neutral-500">2 months ago</span>
                  </div>
                  <p className="text-neutral-600">
                    Great product! Works exactly as described and the quality is excellent.
                    Would definitely recommend to anyone interested in electronics projects.
                  </p>
                </div>
                
                <div className="border-b border-neutral-200 pb-6">
                  <div className="flex items-center mb-2">
                    <span className="font-medium text-neutral-800 mr-3">Sarah M.</span>
                    <Rating value={4} size="sm" />
                    <span className="ml-auto text-sm text-neutral-500">3 months ago</span>
                  </div>
                  <p className="text-neutral-600">
                    Good quality for the price. Shipping was fast and customer service was helpful
                    when I had questions about the setup.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-primary-500 font-medium flex items-center mx-auto hover:text-primary-600 transition-colors">
                  View all reviews
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mb-12">
          <ProductCarousel title="You May Also Like" products={relatedProducts} />
        </section>
      )}
    </div>
  );
};

export default ProductDetail;