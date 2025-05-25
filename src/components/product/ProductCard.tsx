import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, isInCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  
  const isWishlisted = isInWishlist(product.id);
  const isAddedToCart = isInCart(product.id);

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
      {/* Product Image */}
      <div className="relative">
        <Link to={`/products/${product.id}`} className="block h-48 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Wishlist Button */}
        <button 
          className={`absolute top-2 right-2 p-2 rounded-full ${
            isWishlisted ? 'bg-secondary-50 text-secondary-500' : 'bg-white/80 text-neutral-400 hover:text-secondary-500'
          } transition-colors`}
          onClick={() => toggleWishlist(product)}
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-secondary-500' : ''}`} />
        </button>
        
        {/* Discount Badge */}
        {product.oldPrice && (
          <div className="absolute top-2 left-2 bg-secondary-500 text-white text-xs px-2 py-1 rounded">
            {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
          </div>
        )}

        {/* Stock Status */}
        <div className={`absolute bottom-2 left-2 text-xs px-2 py-1 rounded ${
          product.stockStatus === 'In Stock' 
            ? 'bg-success-500 text-white' 
            : product.stockStatus === 'Low Stock'
              ? 'bg-warning-500 text-white'
              : 'bg-error-500 text-white'
        }`}>
          {product.stockStatus}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-neutral-500">{product.category}</span>
        </div>
        
        <Link to={`/products/${product.id}`}>
          <h3 className="text-sm sm:text-base font-medium text-neutral-800 mb-1 line-clamp-2 hover:text-primary-500 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        {/* Ratings */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating) 
                    ? 'text-warning-500 fill-warning-500' 
                    : 'text-neutral-300'
                }`} 
              />
            ))}
          </div>
          <span className="text-xs text-neutral-500 ml-1">({product.reviewCount})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-semibold text-lg text-neutral-800">
              ₹{product.price}
            </span>
            {product.oldPrice && (
              <span className="ml-2 text-sm text-neutral-400 line-through">
                ₹{product.oldPrice}
              </span>
            )}
          </div>
          
          {/* Add to Cart Button */}
          <button 
            onClick={() => addToCart(product)}
            disabled={isAddedToCart}
            className={`p-2 rounded-full ${
              isAddedToCart 
                ? 'bg-primary-50 text-primary-500 cursor-not-allowed' 
                : 'bg-primary-500 text-white hover:bg-primary-600'
            } transition-colors`}
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;