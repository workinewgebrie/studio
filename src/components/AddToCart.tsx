"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/hooks/useCart';
import type { Product } from '@/types';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

interface AddToCartProps {
  product: Product;
}

export function AddToCart({ product }: AddToCartProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // The toast was misconfigured and not appearing correctly.
    // toast({
    //   title: "Added to cart!",
    //   description: `${quantity} x ${product.name} has been added to your cart.`,
    // })
  };

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="h-11 w-11 rounded-r-none"
          onClick={() => handleQuantityChange(-1)}
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          className="h-11 w-16 text-center rounded-none focus-visible:ring-primary"
          aria-label="Product quantity"
        />
        <Button
          variant="outline"
          size="icon"
          className="h-11 w-11 rounded-l-none"
          onClick={() => handleQuantityChange(1)}
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button size="lg" className="flex-grow" onClick={handleAddToCart}>
        <ShoppingCart className="mr-2 h-5 w-5" />
        Add to Cart
      </Button>
    </div>
  );
}