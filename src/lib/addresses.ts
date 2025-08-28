import type { DeliveryAddress } from '@/types';

// Generate unique address ID
export const generateAddressId = (): string => {
  return `addr_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Get addresses from localStorage
export const getAddresses = (userId: string): DeliveryAddress[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(`addresses_${userId}`);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to parse addresses from localStorage', error);
    return [];
  }
};

// Save addresses to localStorage
export const saveAddresses = (userId: string, addresses: DeliveryAddress[]): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(`addresses_${userId}`, JSON.stringify(addresses));
  } catch (error) {
    console.error('Failed to save addresses to localStorage', error);
  }
};

// Add new address
export const addAddress = (userId: string, address: Omit<DeliveryAddress, 'id' | 'userId' | 'createdAt'>): DeliveryAddress => {
  const addresses = getAddresses(userId);
  
  const newAddress: DeliveryAddress = {
    ...address,
    id: generateAddressId(),
    userId,
    createdAt: new Date().toISOString(),
  };
  
  // If this is the first address or marked as default, set it as default
  if (address.isDefault || addresses.length === 0) {
    addresses.forEach(addr => addr.isDefault = false);
    newAddress.isDefault = true;
  }
  
  const updatedAddresses = [...addresses, newAddress];
  saveAddresses(userId, updatedAddresses);
  
  return newAddress;
};

// Update address
export const updateAddress = (userId: string, addressId: string, updates: Partial<DeliveryAddress>): DeliveryAddress | null => {
  const addresses = getAddresses(userId);
  const addressIndex = addresses.findIndex(addr => addr.id === addressId);
  
  if (addressIndex === -1) return null;
  
  const updatedAddress = { ...addresses[addressIndex], ...updates };
  
  // If setting as default, unset others
  if (updates.isDefault) {
    addresses.forEach(addr => addr.isDefault = false);
  }
  
  addresses[addressIndex] = updatedAddress;
  saveAddresses(userId, addresses);
  
  return updatedAddress;
};

// Delete address
export const deleteAddress = (userId: string, addressId: string): boolean => {
  const addresses = getAddresses(userId);
  const filteredAddresses = addresses.filter(addr => addr.id !== addressId);
  
  // If we deleted the default address and there are others, set the first as default
  const deletedAddress = addresses.find(addr => addr.id === addressId);
  if (deletedAddress?.isDefault && filteredAddresses.length > 0) {
    filteredAddresses[0].isDefault = true;
  }
  
  saveAddresses(userId, filteredAddresses);
  return addresses.length !== filteredAddresses.length;
};

// Get default address
export const getDefaultAddress = (userId: string): DeliveryAddress | null => {
  const addresses = getAddresses(userId);
  return addresses.find(addr => addr.isDefault) || addresses[0] || null;
};

// Set address as default
export const setDefaultAddress = (userId: string, addressId: string): boolean => {
  const addresses = getAddresses(userId);
  const address = addresses.find(addr => addr.id === addressId);
  
  if (!address) return false;
  
  addresses.forEach(addr => addr.isDefault = false);
  address.isDefault = true;
  
  saveAddresses(userId, addresses);
  return true;
};


