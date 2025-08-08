export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'clothing' | 'crafts' | 'accessories';
  currency?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
