import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingCart, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  
  // Calculate subtotal, shipping, and tax
  const subtotal = getCartTotal();
  const shipping = subtotal > 999 ? 0 : 100;
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + shipping + tax;
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <ShoppingCart className="h-16 w-16 mx-auto text-neutral-400 mb-4" />
            <h1 className="text-2xl font-bold text-neutral-800 mb-4">Your Cart is Empty</h1>
            <p className="text-neutral-600 mb-8">
              Looks like you haven't added any products to your cart yet.
              Browse our collection and find something you'll love!
            </p>
            <Link
              to="/products"
              className="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-neutral-50 border-b border-neutral-200">
              <div className="col-span-6">
                <span className="font-medium text-neutral-700">Product</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-medium text-neutral-700">Price</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="font-medium text-neutral-700">Quantity</span>
              </div>
              <div className="col-span-2 text-right">
                <span className="font-medium text-neutral-700">Subtotal</span>
              </div>
            </div>
            
            <ul className="divide-y divide-neutral-200">
              {cartItems.map((item) => (
                <li key={item.product.id} className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {/* Product */}
                    <div className="col-span-6 flex items-center">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded border border-neutral-200">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-col">
                        <Link 
                          to={`/products/${item.product.id}`}
                          className="text-neutral-800 font-medium hover:text-primary-500 transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <p className="mt-1 text-sm text-neutral-500">{item.product.category}</p>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="md:col-span-2 md:text-center flex justify-between md:block">
                      <span className="md:hidden text-sm font-medium text-neutral-700">Price:</span>
                      <span className="text-neutral-700">₹{item.product.price}</span>
                    </div>
                    
                    {/* Quantity */}
                    <div className="md:col-span-2 md:text-center flex justify-between md:justify-center items-center">
                      <span className="md:hidden text-sm font-medium text-neutral-700">Quantity:</span>
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 px-2 hover:bg-neutral-100 transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-2 py-1 min-w-[40px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 px-2 hover:bg-neutral-100 transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Subtotal & Remove */}
                    <div className="md:col-span-2 md:text-right flex justify-between md:block items-center">
                      <div className="flex items-center md:justify-end">
                        <span className="md:hidden text-sm font-medium text-neutral-700 mr-2">Subtotal:</span>
                        <span className="font-medium text-neutral-800">₹{item.product.price * item.quantity}</span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-neutral-400 hover:text-error-500 transition-colors ml-4"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-6 flex justify-between">
            <Link
              to="/products"
              className="flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors"
            >
              <ChevronRight className="h-4 w-4 rotate-180 mr-1" />
              Continue Shopping
            </Link>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-bold text-neutral-800 mb-4">Order Summary</h2>
            
            <div className="space-y-3 border-b border-neutral-200 pb-4 mb-4">
              <div className="flex justify-between">
                <span className="text-neutral-600">Subtotal</span>
                <span className="font-medium text-neutral-800">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Shipping</span>
                <span className="font-medium text-neutral-800">
                  {shipping === 0 ? 'Free' : `₹${shipping}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Tax (18% GST)</span>
                <span className="font-medium text-neutral-800">₹{tax}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-medium text-neutral-800">Total</span>
              <span className="text-xl font-bold text-neutral-900">₹{total}</span>
            </div>
            
            {/* Promo Code */}
            <div className="mb-6">
              <label htmlFor="promo" className="block text-sm font-medium text-neutral-700 mb-2">
                Promo Code
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="promo"
                  className="flex-1 rounded-l-lg border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300"
                  placeholder="Enter code"
                />
                <button className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-r-lg border border-neutral-300 border-l-0 hover:bg-neutral-200 transition-colors">
                  Apply
                </button>
              </div>
            </div>
            
            <Link
              to="/checkout"
              className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center justify-center"
            >
              Proceed to Checkout
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            
            <div className="mt-6 flex flex-col items-center text-center">
              <div className="flex items-center justify-center space-x-4 mb-2">
                <div className="bg-white w-10 h-6 flex items-center justify-center rounded border border-neutral-200">
                  <span className="text-xs font-bold">VISA</span>
                </div>
                <div className="bg-white w-10 h-6 flex items-center justify-center rounded border border-neutral-200">
                  <span className="text-xs font-bold">MC</span>
                </div>
                <div className="bg-white w-10 h-6 flex items-center justify-center rounded border border-neutral-200">
                  <span className="text-xs font-bold">AMEX</span>
                </div>
                <div className="bg-white w-10 h-6 flex items-center justify-center rounded border border-neutral-200">
                  <span className="text-xs font-bold">UPI</span>
                </div>
              </div>
              <p className="text-xs text-neutral-500">
                We accept all major credit cards and UPI payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;