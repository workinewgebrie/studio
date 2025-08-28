import type { ShippingOption } from '@/types';

export const shippingOptions: ShippingOption[] = [
  {
    id: 'standard',
    name: 'Standard Shipping',
    description: 'Regular delivery with tracking',
    price: 5.99,
    estimatedDays: '7-14 days',
    isRecommended: false,
  },
  {
    id: 'express',
    name: 'Express Shipping',
    description: 'Fast delivery with priority handling',
    price: 12.99,
    estimatedDays: '3-7 days',
    isRecommended: true,
  },
  {
    id: 'premium',
    name: 'Premium Shipping',
    description: 'Express delivery with insurance',
    price: 19.99,
    estimatedDays: '2-5 days',
    isRecommended: false,
  },
  {
    id: 'free',
    name: 'Free Shipping',
    description: 'Free delivery on orders over $50',
    price: 0,
    estimatedDays: '10-21 days',
    isRecommended: false,
  },
];

export const getShippingOptions = (subtotal: number): ShippingOption[] => {
  const options = [...shippingOptions];
  
  // Enable free shipping if order is over $50
  const freeShippingOption = options.find(option => option.id === 'free');
  if (freeShippingOption && subtotal >= 50) {
    freeShippingOption.isRecommended = true;
  }
  
  return options;
};

export const calculateShippingCost = (optionId: string, subtotal: number): number => {
  const option = shippingOptions.find(opt => opt.id === optionId);
  
  if (!option) return 0;
  
  // Free shipping if order is over $50
  if (option.id === 'free' && subtotal >= 50) {
    return 0;
  }
  
  return option.price;
};

export const getEstimatedDeliveryDate = (optionId: string): Date => {
  const option = shippingOptions.find(opt => opt.id === optionId);
  if (!option) return new Date();
  
  const days = parseInt(option.estimatedDays.split('-')[0]);
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + days);
  
  return deliveryDate;
};


