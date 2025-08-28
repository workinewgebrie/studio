"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { AddressList } from '@/components/AddressList';
import { addAddress, getAddresses, updateAddress, deleteAddress, setDefaultAddress } from '@/lib/addresses';
import type { DeliveryAddress } from '@/types';

export default function AddressesPage() {
  const { user } = useAuth();
  const [addresses, setAddresses] = useState<DeliveryAddress[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      const userAddresses = getAddresses(user.id);
      setAddresses(userAddresses);
    }
  }, [user]);

  const handleAddAddress = async (addressData: Omit<DeliveryAddress, 'id' | 'userId' | 'createdAt'>) => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      const newAddress = addAddress(user.id, addressData);
      setAddresses(prev => [...prev, newAddress]);
    } catch (error) {
      console.error('Failed to add address:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateAddress = async (addressId: string, updates: Partial<DeliveryAddress>) => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      const updatedAddress = updateAddress(user.id, addressId, updates);
      if (updatedAddress) {
        setAddresses(prev => prev.map(addr => 
          addr.id === addressId ? updatedAddress : addr
        ));
      }
    } catch (error) {
      console.error('Failed to update address:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAddress = async (addressId: string) => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      const success = deleteAddress(user.id, addressId);
      if (success) {
        setAddresses(prev => prev.filter(addr => addr.id !== addressId));
      }
    } catch (error) {
      console.error('Failed to delete address:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSetDefault = async (addressId: string) => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      const success = setDefaultAddress(user.id, addressId);
      if (success) {
        setAddresses(prev => prev.map(addr => ({
          ...addr,
          isDefault: addr.id === addressId
        })));
      }
    } catch (error) {
      console.error('Failed to set default address:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-3xl font-headline mb-4">Please Sign In</h1>
          <p className="text-muted-foreground mb-6">
            You need to be signed in to manage your addresses.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <AddressList
          addresses={addresses}
          onAddAddress={handleAddAddress}
          onUpdateAddress={handleUpdateAddress}
          onDeleteAddress={handleDeleteAddress}
          onSetDefault={handleSetDefault}
        />
      </div>
    </div>
  );
}


