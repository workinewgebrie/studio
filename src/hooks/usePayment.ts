"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addTransaction } from '@/lib/transactions';
import type { CartItem } from '@/types';

export function usePayment() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const processPayment = async (amount: number, currency: string = 'usd', cartItems?: CartItem[]) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate payment processing delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate successful payment (90% success rate)
      const isSuccess = Math.random() > 0.1;

      if (isSuccess) {
        // Record the transaction if cart items are provided
        if (cartItems && cartItems.length > 0) {
          addTransaction(cartItems, amount);
        }
        
        // Redirect to success page
        router.push('/success');
      } else {
        throw new Error('Payment failed. Please try again.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    processPayment,
    isLoading,
    error,
  };
}
