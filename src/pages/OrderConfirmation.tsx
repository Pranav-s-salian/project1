import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Truck, Check, ArrowRight, CalendarClock } from 'lucide-react';
import { Order } from '../types';

const OrderConfirmation: React.FC = () => {
  const [order, setOrder] = useState<Order | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const lastOrder = localStorage.getItem('lastOrder');
    
    if (lastOrder) {
      setOrder(JSON.parse(lastOrder));
    } else {
      // Redirect to home if no order is found
      navigate('/');
    }
  }, [navigate]);
  
  if (!order) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
        </div>
      </div>
    );
  }
  
  // Format date
  const orderDate = new Date(order.date);
  const formattedDate = new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(orderDate);
  
  // Calculate estimated delivery date (5 days from order date)
  const deliveryDate = new Date(orderDate);
  deliveryDate.setDate(deliveryDate.getDate() + 5);
  const formattedDeliveryDate = new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(deliveryDate);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="bg-success-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-10 w-10 text-success-500" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">Order Confirmed!</h1>
          <p className="text-neutral-600">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center border-b border-neutral-200 pb-4 mb-4">
            <ShoppingBag className="h-5 w-5 text-primary-500 mr-2" />
            <h2 className="text-lg font-bold text-neutral-800">Order Details</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-neutral-500 mb-1">Order Number</p>
              <p className="font-medium text-neutral-800">{order.id}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500 mb-1">Date Placed</p>
              <p className="font-medium text-neutral-800">{formattedDate}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500 mb-1">Total Amount</p>
              <p className="font-medium text-neutral-800">₹{order.total}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500 mb-1">Payment Method</p>
              <p className="font-medium text-neutral-800">
                {order.paymentMethod.type === 'credit-card' && 'Credit/Debit Card'}
                {order.paymentMethod.type === 'upi' && 'UPI Payment'}
                {order.paymentMethod.type === 'cod' && 'Cash on Delivery'}
              </p>
            </div>
          </div>
          
          <div className="border-t border-b border-neutral-200 py-4 mb-4">
            <div className="flex items-center mb-4">
              <Truck className="h-5 w-5 text-primary-500 mr-2" />
              <h3 className="font-medium text-neutral-800">Shipping Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-neutral-500 mb-1">Contact</p>
                <p className="font-medium text-neutral-800">
                  {order.shippingDetails.firstName} {order.shippingDetails.lastName}
                </p>
                <p className="text-neutral-600">{order.shippingDetails.email}</p>
                <p className="text-neutral-600">{order.shippingDetails.phone}</p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-1">Address</p>
                <p className="font-medium text-neutral-800">{order.shippingDetails.address}</p>
                <p className="text-neutral-600">
                  {order.shippingDetails.city}, {order.shippingDetails.state} {order.shippingDetails.zipCode}
                </p>
                <p className="text-neutral-600">{order.shippingDetails.country}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex items-start mb-4">
              <CalendarClock className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
              <div>
                <h3 className="font-medium text-neutral-800">Delivery Estimate</h3>
                <p className="text-neutral-600 text-sm mt-1">
                  Your order should arrive by <span className="font-medium">{formattedDeliveryDate}</span>
                </p>
              </div>
            </div>
            
            <div className="bg-neutral-50 rounded-lg p-4">
              <div className="relative">
                <div className="absolute left-0 top-2.5 w-full h-1 bg-neutral-200">
                  <div className="absolute left-0 top-0 h-1 bg-primary-500 w-1/4"></div>
                </div>
                
                <div className="flex justify-between relative">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs z-10">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-xs mt-2 text-primary-500 font-medium">Ordered</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center text-xs z-10">
                      2
                    </div>
                    <span className="text-xs mt-2 text-neutral-500">Processing</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center text-xs z-10">
                      3
                    </div>
                    <span className="text-xs mt-2 text-neutral-500">Shipped</span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center text-xs z-10">
                      4
                    </div>
                    <span className="text-xs mt-2 text-neutral-500">Delivered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-neutral-800 mb-4">Order Items</h3>
            <div className="space-y-4">
              {order.items.map(item => (
                <div key={item.product.id} className="flex items-center border-b border-neutral-100 pb-4 last:border-b-0 last:pb-0">
                  <div className="h-16 w-16 flex-shrink-0 rounded border border-neutral-200 overflow-hidden bg-white">
                    <img 
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="font-medium text-neutral-800">{item.product.name}</p>
                    <div className="flex justify-between items-baseline mt-1">
                      <span className="text-sm text-neutral-500">Qty: {item.quantity}</span>
                      <span className="font-medium text-neutral-800">₹{item.product.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 border-t border-neutral-200 pt-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-600">Subtotal</span>
                <span className="font-medium text-neutral-800">₹{order.subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Shipping</span>
                <span className="font-medium text-neutral-800">
                  {order.shipping === 0 ? 'Free' : `₹${order.shipping}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Tax</span>
                <span className="font-medium text-neutral-800">₹{order.tax}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-neutral-100">
                <span className="font-medium text-neutral-800">Total</span>
                <span className="font-bold text-neutral-900">₹{order.total}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <Link
            to="/"
            className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center"
          >
            Continue Shopping
          </Link>
          
          <Link
            to="/products"
            className="text-neutral-600 hover:text-neutral-800 transition-colors flex items-center"
          >
            Browse More Products
            <ArrowRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;