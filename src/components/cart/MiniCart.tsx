import React from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const MiniCart: React.FC = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsCartOpen(false)}
      />
      
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
            <h2 className="text-xl font-semibold flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Your Cart ({cartItems.length})
            </h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-10">
                <ShoppingBag className="h-12 w-12 mx-auto text-neutral-400 mb-4" />
                <h3 className="text-lg font-medium text-neutral-800 mb-2">Your cart is empty</h3>
                <p className="text-neutral-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
                <Link 
                  to="/products" 
                  onClick={() => setIsCartOpen(false)}
                  className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              <ul className="divide-y divide-neutral-200">
                {cartItems.map(item => (
                  <li key={item.product.id} className="py-4 flex">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-neutral-200">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-neutral-800">
                          <h3>
                            <Link 
                              to={`/products/${item.product.id}`}
                              onClick={() => setIsCartOpen(false)}
                            >
                              {item.product.name}
                            </Link>
                          </h3>
                          <p className="ml-4">₹{item.product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-neutral-500">{item.product.category}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm mt-2">
                        <div className="flex items-center border rounded-md">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-3 py-1 border-r hover:bg-neutral-100 transition-colors"
                          >
                            -
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-3 py-1 border-l hover:bg-neutral-100 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-secondary-500 hover:text-secondary-600 transition-colors flex items-center"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Summary & Checkout */}
          {cartItems.length > 0 && (
            <div className="border-t border-neutral-200 p-4 bg-neutral-50">
              <div className="flex justify-between text-base font-medium text-neutral-800">
                <p>Subtotal</p>
                <p>₹{getCartTotal()}</p>
              </div>
              <p className="mt-0.5 text-sm text-neutral-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-4 space-y-2">
                <Link
                  to="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="flex items-center justify-center w-full bg-primary-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-600 transition-colors rounded-lg"
                >
                  View Cart
                </Link>
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="flex items-center justify-center w-full bg-secondary-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-secondary-600 transition-colors rounded-lg"
                >
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniCart;