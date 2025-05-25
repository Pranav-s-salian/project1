import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronRight, CreditCard, ShieldCheck, Truck, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ShippingDetails, PaymentMethod } from '../types';

const initialShippingDetails: ShippingDetails = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  country: 'India'
};

const Checkout: React.FC = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>(initialShippingDetails);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>({ type: 'credit-card' });
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Calculate totals
  const subtotal = getCartTotal();
  const shipping = subtotal > 999 ? 0 : 100;
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + shipping + tax;
  
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
    window.scrollTo(0, 0);
  };
  
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
    window.scrollTo(0, 0);
  };
  
  const handlePlaceOrder = () => {
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      const orderId = `ORD-${Math.floor(Math.random() * 1000000)}`;
      const orderDate = new Date().toISOString();
      
      // Create order object
      const order = {
        id: orderId,
        items: [...cartItems],
        shippingDetails,
        paymentMethod,
        subtotal,
        shipping,
        tax,
        total,
        date: orderDate
      };
      
      // Save order to localStorage
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      orders.push(order);
      localStorage.setItem('orders', JSON.stringify(orders));
      localStorage.setItem('lastOrder', JSON.stringify(order));
      
      // Clear cart and redirect
      clearCart();
      navigate('/order-confirmation');
    }, 2000);
  };
  
  // Redirect to home if cart is empty
  if (cartItems.length === 0 && currentStep === 1) {
    navigate('/');
    return null;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-8">Checkout</h1>
      
      {/* Progress Steps */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
              currentStep >= 1 ? 'bg-primary-500 text-white' : 'bg-neutral-200 text-neutral-500'
            }`}>
              1
            </div>
            <span className={`text-sm ${
              currentStep >= 1 ? 'text-primary-500 font-medium' : 'text-neutral-500'
            }`}>
              Shipping
            </span>
          </div>
          
          <div className={`flex-1 h-1 mx-2 ${
            currentStep >= 2 ? 'bg-primary-500' : 'bg-neutral-200'
          }`}></div>
          
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
              currentStep >= 2 ? 'bg-primary-500 text-white' : 'bg-neutral-200 text-neutral-500'
            }`}>
              2
            </div>
            <span className={`text-sm ${
              currentStep >= 2 ? 'text-primary-500 font-medium' : 'text-neutral-500'
            }`}>
              Payment
            </span>
          </div>
          
          <div className={`flex-1 h-1 mx-2 ${
            currentStep >= 3 ? 'bg-primary-500' : 'bg-neutral-200'
          }`}></div>
          
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
              currentStep >= 3 ? 'bg-primary-500 text-white' : 'bg-neutral-200 text-neutral-500'
            }`}>
              3
            </div>
            <span className={`text-sm ${
              currentStep >= 3 ? 'text-primary-500 font-medium' : 'text-neutral-500'
            }`}>
              Review
            </span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Step 1: Shipping */}
          {currentStep === 1 && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-neutral-800 mb-4">Shipping Information</h2>
              
              <form onSubmit={handleShippingSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={shippingDetails.firstName}
                      onChange={(e) => setShippingDetails({...shippingDetails, firstName: e.target.value})}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={shippingDetails.lastName}
                      onChange={(e) => setShippingDetails({...shippingDetails, lastName: e.target.value})}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={shippingDetails.email}
                      onChange={(e) => setShippingDetails({...shippingDetails, email: e.target.value})}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={shippingDetails.phone}
                      onChange={(e) => setShippingDetails({...shippingDetails, phone: e.target.value})}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-1">
                    Address*
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={shippingDetails.address}
                    onChange={(e) => setShippingDetails({...shippingDetails, address: e.target.value})}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1">
                      City*
                    </label>
                    <input
                      type="text"
                      id="city"
                      value={shippingDetails.city}
                      onChange={(e) => setShippingDetails({...shippingDetails, city: e.target.value})}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-neutral-700 mb-1">
                      State*
                    </label>
                    <input
                      type="text"
                      id="state"
                      value={shippingDetails.state}
                      onChange={(e) => setShippingDetails({...shippingDetails, state: e.target.value})}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-neutral-700 mb-1">
                      Zip Code*
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      value={shippingDetails.zipCode}
                      onChange={(e) => setShippingDetails({...shippingDetails, zipCode: e.target.value})}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="country" className="block text-sm font-medium text-neutral-700 mb-1">
                    Country*
                  </label>
                  <select
                    id="country"
                    value={shippingDetails.country}
                    onChange={(e) => setShippingDetails({...shippingDetails, country: e.target.value})}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                    required
                  >
                    <option value="India">India</option>
                  </select>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center"
                  >
                    Continue to Payment
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {/* Step 2: Payment */}
          {currentStep === 2 && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-neutral-800 mb-4">Payment Method</h2>
              
              <form onSubmit={handlePaymentSubmit}>
                <div className="mb-6">
                  <div className="space-y-4">
                    <div className="border border-neutral-200 rounded-lg p-4 flex items-start">
                      <input
                        type="radio"
                        id="credit-card"
                        name="payment-method"
                        className="mt-1"
                        checked={paymentMethod.type === 'credit-card'}
                        onChange={() => setPaymentMethod({ type: 'credit-card' })}
                      />
                      <label htmlFor="credit-card" className="ml-3 flex-1">
                        <div className="flex items-center">
                          <CreditCard className="h-5 w-5 text-neutral-700 mr-2" />
                          <span className="font-medium text-neutral-800">Credit / Debit Card</span>
                        </div>
                        <p className="text-sm text-neutral-500 mt-1">Pay securely with your card</p>
                        
                        {paymentMethod.type === 'credit-card' && (
                          <div className="mt-4 space-y-4">
                            <div>
                              <label htmlFor="card-number" className="block text-sm font-medium text-neutral-700 mb-1">
                                Card Number*
                              </label>
                              <input
                                type="text"
                                id="card-number"
                                placeholder="1234 5678 9012 3456"
                                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                                required
                              />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="expiry" className="block text-sm font-medium text-neutral-700 mb-1">
                                  Expiry Date*
                                </label>
                                <input
                                  type="text"
                                  id="expiry"
                                  placeholder="MM/YY"
                                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  required
                                />
                              </div>
                              
                              <div>
                                <label htmlFor="cvv" className="block text-sm font-medium text-neutral-700 mb-1">
                                  CVV*
                                </label>
                                <input
                                  type="text"
                                  id="cvv"
                                  placeholder="123"
                                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                                  required
                                />
                              </div>
                            </div>
                            
                            <div>
                              <label htmlFor="card-name" className="block text-sm font-medium text-neutral-700 mb-1">
                                Name on Card*
                              </label>
                              <input
                                type="text"
                                id="card-name"
                                placeholder="John Doe"
                                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                                required
                              />
                            </div>
                          </div>
                        )}
                      </label>
                    </div>
                    
                    <div className="border border-neutral-200 rounded-lg p-4 flex items-start">
                      <input
                        type="radio"
                        id="upi"
                        name="payment-method"
                        className="mt-1"
                        checked={paymentMethod.type === 'upi'}
                        onChange={() => setPaymentMethod({ type: 'upi' })}
                      />
                      <label htmlFor="upi" className="ml-3 flex-1">
                        <div className="flex items-center">
                          <span className="font-medium text-neutral-800">UPI Payment</span>
                        </div>
                        <p className="text-sm text-neutral-500 mt-1">Pay using UPI apps like Google Pay, PhonePe, etc.</p>
                        
                        {paymentMethod.type === 'upi' && (
                          <div className="mt-4">
                            <label htmlFor="upi-id" className="block text-sm font-medium text-neutral-700 mb-1">
                              UPI ID*
                            </label>
                            <input
                              type="text"
                              id="upi-id"
                              placeholder="username@upi"
                              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                              required
                            />
                          </div>
                        )}
                      </label>
                    </div>
                    
                    <div className="border border-neutral-200 rounded-lg p-4 flex items-start">
                      <input
                        type="radio"
                        id="cod"
                        name="payment-method"
                        className="mt-1"
                        checked={paymentMethod.type === 'cod'}
                        onChange={() => setPaymentMethod({ type: 'cod' })}
                      />
                      <label htmlFor="cod" className="ml-3 flex-1">
                        <div className="flex items-center">
                          <span className="font-medium text-neutral-800">Cash on Delivery</span>
                        </div>
                        <p className="text-sm text-neutral-500 mt-1">Pay when your order is delivered</p>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <ShieldCheck className="h-5 w-5 text-success-500 mr-2" />
                  <span className="text-sm text-neutral-600">
                    All transactions are secure and encrypted.
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-neutral-600 hover:text-neutral-800 transition-colors flex items-center"
                  >
                    <ChevronRight className="h-5 w-5 mr-1 rotate-180" />
                    Back to Shipping
                  </button>
                  
                  <button
                    type="submit"
                    className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center"
                  >
                    Review Order
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {/* Step 3: Review */}
          {currentStep === 3 && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-neutral-800 mb-4">Review Your Order</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-neutral-800 mb-2 flex items-center">
                    <Truck className="h-5 w-5 mr-2 text-primary-500" />
                    Shipping Information
                  </h3>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <p className="text-neutral-700">
                      {shippingDetails.firstName} {shippingDetails.lastName}
                    </p>
                    <p className="text-neutral-700">{shippingDetails.address}</p>
                    <p className="text-neutral-700">
                      {shippingDetails.city}, {shippingDetails.state} {shippingDetails.zipCode}
                    </p>
                    <p className="text-neutral-700">{shippingDetails.country}</p>
                    <p className="text-neutral-700 mt-2">
                      {shippingDetails.email} | {shippingDetails.phone}
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-neutral-800 mb-2 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-primary-500" />
                    Payment Method
                  </h3>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <p className="text-neutral-700">
                      {paymentMethod.type === 'credit-card' && 'Credit/Debit Card'}
                      {paymentMethod.type === 'upi' && 'UPI Payment'}
                      {paymentMethod.type === 'cod' && 'Cash on Delivery'}
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-neutral-800 mb-2">Order Items</h3>
                  <div className="bg-neutral-50 p-4 rounded-lg divide-y divide-neutral-200">
                    {cartItems.map(item => (
                      <div key={item.product.id} className="py-3 first:pt-0 last:pb-0 flex items-center">
                        <div className="h-16 w-16 flex-shrink-0 rounded border border-neutral-200 overflow-hidden bg-white">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="ml-4 flex-1">
                          <p className="text-sm font-medium text-neutral-800">{item.product.name}</p>
                          <p className="text-sm text-neutral-500">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-sm font-medium text-neutral-800">
                          ₹{item.product.price * item.quantity}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-neutral-800 mb-2">Order Summary</h3>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="space-y-2 text-sm">
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
                      <div className="border-t border-neutral-200 pt-2 mt-2 flex justify-between">
                        <span className="font-medium text-neutral-800">Total</span>
                        <span className="font-bold text-neutral-900">₹{total}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-primary-500 mr-2" />
                  <span className="text-sm text-neutral-600">
                    Estimated delivery within 2-5 business days
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="text-neutral-600 hover:text-neutral-800 transition-colors flex items-center"
                  >
                    <ChevronRight className="h-5 w-5 mr-1 rotate-180" />
                    Back to Payment
                  </button>
                  
                  <button
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                    className={`bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center ${
                      isProcessing ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isProcessing ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Place Order
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-lg font-bold text-neutral-800 mb-4">Order Summary</h2>
            
            <div className="max-h-80 overflow-y-auto mb-4">
              {cartItems.map(item => (
                <div key={item.product.id} className="flex items-center py-3 border-b border-neutral-100 last:border-b-0">
                  <div className="h-16 w-16 flex-shrink-0 rounded border border-neutral-200 overflow-hidden bg-white">
                    <img 
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-neutral-800 line-clamp-1">{item.product.name}</p>
                    <div className="flex justify-between items-baseline mt-1">
                      <span className="text-sm text-neutral-500">Qty: {item.quantity}</span>
                      <span className="text-sm font-medium text-neutral-800">₹{item.product.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-2 text-sm border-t border-neutral-200 pt-4">
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
              <div className="border-t border-neutral-200 pt-2 mt-2 flex justify-between">
                <span className="font-medium text-neutral-800">Total</span>
                <span className="font-bold text-neutral-900">₹{total}</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-100">
              <div className="flex items-start">
                <ShieldCheck className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-primary-800">Secure Checkout</p>
                  <p className="text-xs text-primary-600 mt-1">
                    Your payment information is processed securely. We do not store credit card details nor have access to your credit card information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;