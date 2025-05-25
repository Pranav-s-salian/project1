import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import Rating from '../components/ui/Rating';

const Wishlist: React.FC = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart, isInCart } = useCart();
  
  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <Heart className="h-16 w-16 mx-auto text-neutral-400 mb-4" />
            <h1 className="text-2xl font-bold text-neutral-800 mb-4">Your Wishlist is Empty</h1>
            <p className="text-neutral-600 mb-8">
              You haven't added any products to your wishlist yet.
              Browse our collection and save items you're interested in!
            </p>
            <Link
              to="/products"
              className="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-8 flex items-center">
        <Heart className="mr-3 h-6 w-6 text-secondary-500" />
        My Wishlist
      </h1>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
        <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-neutral-50 border-b border-neutral-200">
          <div className="col-span-6">
            <span className="font-medium text-neutral-700">Product</span>
          </div>
          <div className="col-span-2 text-center">
            <span className="font-medium text-neutral-700">Price</span>
          </div>
          <div className="col-span-2 text-center">
            <span className="font-medium text-neutral-700">Status</span>
          </div>
          <div className="col-span-2 text-right">
            <span className="font-medium text-neutral-700">Actions</span>
          </div>
        </div>
        
        <ul className="divide-y divide-neutral-200">
          {wishlistItems.map(product => (
            <li key={product.id} className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                {/* Product */}
                <div className="md:col-span-6 flex items-center">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded border border-neutral-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex flex-col">
                    <Link 
                      to={`/products/${product.id}`}
                      className="text-neutral-800 font-medium hover:text-primary-500 transition-colors"
                    >
                      {product.name}
                    </Link>
                    <div className="mt-1 flex items-center">
                      <Rating value={product.rating} size="sm" />
                      <span className="ml-2 text-xs text-neutral-500">({product.reviewCount})</span>
                    </div>
                    <p className="mt-1 text-sm text-neutral-500">{product.category}</p>
                  </div>
                </div>
                
                {/* Price */}
                <div className="md:col-span-2 md:text-center flex justify-between md:block">
                  <span className="md:hidden text-sm font-medium text-neutral-700">Price:</span>
                  <div>
                    <span className="font-medium text-neutral-800">₹{product.price}</span>
                    {product.oldPrice && (
                      <div className="text-sm text-neutral-400 line-through">₹{product.oldPrice}</div>
                    )}
                  </div>
                </div>
                
                {/* Status */}
                <div className="md:col-span-2 md:text-center flex justify-between md:block">
                  <span className="md:hidden text-sm font-medium text-neutral-700">Status:</span>
                  <span className={`inline-block px-2 py-1 rounded text-xs ${
                    product.stockStatus === 'In Stock' 
                      ? 'bg-success-100 text-success-700' 
                      : product.stockStatus === 'Low Stock'
                        ? 'bg-warning-100 text-warning-700'
                        : 'bg-error-100 text-error-700'
                  }`}>
                    {product.stockStatus}
                  </span>
                </div>
                
                {/* Actions */}
                <div className="md:col-span-2 md:text-right flex justify-between md:justify-end items-center">
                  <button
                    onClick={() => addToCart(product)}
                    disabled={isInCart(product.id) || product.stockStatus === 'Out of Stock'}
                    className={`flex items-center mr-4 px-3 py-1.5 rounded text-sm ${
                      isInCart(product.id)
                        ? 'bg-primary-50 text-primary-500 cursor-not-allowed'
                        : product.stockStatus === 'Out of Stock'
                          ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                          : 'bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors'
                    }`}
                  >
                    <ShoppingBag className="h-4 w-4 mr-1" />
                    {isInCart(product.id) ? 'In Cart' : 'Add to Cart'}
                  </button>
                  
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="flex items-center text-neutral-400 hover:text-error-500 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="ml-1 md:hidden text-sm">Remove</span>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <Link
          to="/products"
          className="text-primary-500 font-medium hover:text-primary-600 transition-colors"
        >
          Continue Shopping
        </Link>
        
        <button
          onClick={() => {
            const availableProducts = wishlistItems.filter(
              product => product.stockStatus !== 'Out of Stock' && !isInCart(product.id)
            );
            availableProducts.forEach(product => addToCart(product));
          }}
          className="bg-secondary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary-600 transition-colors flex items-center"
          disabled={wishlistItems.every(
            product => product.stockStatus === 'Out of Stock' || isInCart(product.id)
          )}
        >
          <ShoppingBag className="mr-2 h-5 w-5" />
          Add All Available to Cart
        </button>
      </div>
    </div>
  );
};

export default Wishlist;