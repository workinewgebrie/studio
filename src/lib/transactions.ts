import type { Transaction, CartItem } from '@/types';

// Generate a unique order number
export const generateOrderNumber = (): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `ETH-${timestamp}-${random}`;
};

// Get today's date in YYYY-MM-DD format
export const getTodayDate = (): string => {
  return new Date().toISOString().split('T')[0];
};

// Get transactions from localStorage
export const getTransactions = (): Transaction[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem('transactions');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to parse transactions from localStorage', error);
    return [];
  }
};

// Save transactions to localStorage
export const saveTransactions = (transactions: Transaction[]): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  } catch (error) {
    console.error('Failed to save transactions to localStorage', error);
  }
};

// Add a new transaction
export const addTransaction = (items: CartItem[], totalAmount: number): Transaction => {
  const transactions = getTransactions();
  
  const newTransaction: Transaction = {
    id: Date.now().toString(),
    date: getTodayDate(),
    items: items,
    totalAmount: totalAmount,
    status: 'completed',
    orderNumber: generateOrderNumber(),
  };
  
  const updatedTransactions = [newTransaction, ...transactions];
  saveTransactions(updatedTransactions);
  
  return newTransaction;
};

// Get today's transactions
export const getTodayTransactions = (): Transaction[] => {
  const transactions = getTransactions();
  const today = getTodayDate();
  
  return transactions.filter(transaction => transaction.date === today);
};

// Get total sales for today
export const getTodayTotalSales = (): number => {
  const todayTransactions = getTodayTransactions();
  return todayTransactions.reduce((total, transaction) => total + transaction.totalAmount, 0);
};

// Get total orders for today
export const getTodayOrderCount = (): number => {
  return getTodayTransactions().length;
};


