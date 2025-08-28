export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'clothing' | 'crafts' | 'accessories';
  currency?: string;
  rating?: number;
  reviews?: number;
  featured?: boolean;
  bestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Transaction {
  id: string;
  date: string;
  items: CartItem[];
  totalAmount: number;
  status: 'completed' | 'pending' | 'failed';
  orderNumber: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin';
  createdAt: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface DeliveryAddress {
  id: string;
  userId: string;
  type: 'home' | 'work' | 'other';
  name: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  addressLine1: string;
  addressLine2?: string;
  postalCode: string;
  isDefault: boolean;
  createdAt: string;
}

export interface ShippingOption {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: string;
  isRecommended: boolean;
}
