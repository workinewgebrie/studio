import type { User } from '@/types';

// Generate a unique user ID
export const generateUserId = (): string => {
  return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Get users from localStorage
export const getUsers = (): User[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem('users');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Failed to parse users from localStorage', error);
    return [];
  }
};

// Save users to localStorage
export const saveUsers = (users: User[]): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('users', JSON.stringify(users));
  } catch (error) {
    console.error('Failed to save users to localStorage', error);
  }
};

// Get current user from localStorage
export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem('currentUser');
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Failed to parse current user from localStorage', error);
    return null;
  }
};

// Save current user to localStorage
export const saveCurrentUser = (user: User | null): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem('currentUser', JSON.stringify(user));
  } catch (error) {
    console.error('Failed to save current user to localStorage', error);
  }
};

// Register a new user
export const registerUser = (email: string, password: string, name: string): User => {
  const users = getUsers();
  
  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    throw new Error('User with this email already exists');
  }
  
  const newUser: User = {
    id: generateUserId(),
    email,
    name,
    role: 'customer',
    createdAt: new Date().toISOString(),
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
  };
  
  // Add user to users list
  const updatedUsers = [...users, newUser];
  saveUsers(updatedUsers);
  
  // Set as current user
  saveCurrentUser(newUser);
  
  return newUser;
};

// Login user
export const loginUser = (email: string, password: string): User => {
  const users = getUsers();
  
  // In a real app, you'd hash the password
  // For demo purposes, we'll use email as password
  const user = users.find(user => user.email === email);
  
  if (!user) {
    throw new Error('User not found');
  }
  
  // Set as current user
  saveCurrentUser(user);
  
  return user;
};

// Logout user
export const logoutUser = (): void => {
  saveCurrentUser(null);
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};

// Get current user
export const getCurrentUserData = (): User | null => {
  return getCurrentUser();
};


