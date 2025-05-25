export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  stockStatus: 'In Stock' | 'Out of Stock' | 'Low Stock';
  tags: string[];
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ShippingDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface PaymentMethod {
  type: 'credit-card' | 'paypal' | 'upi' | 'cod';
  details?: any;
}

export interface Order {
  id: string;
  items: CartItem[];
  shippingDetails: ShippingDetails;
  paymentMethod: PaymentMethod;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  date: string;
}