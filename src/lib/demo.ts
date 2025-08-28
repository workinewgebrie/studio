import { registerUser } from './auth';

// Create demo users for testing
export const createDemoUsers = () => {
  try {
    // Demo user 1
    registerUser('demo@ethioglobal.com', 'demo123', 'Demo User');
    
    // Demo user 2
    registerUser('customer@ethioglobal.com', 'customer123', 'John Customer');
    
    console.log('Demo users created successfully!');
    console.log('Email: demo@ethioglobal.com, Password: demo123');
    console.log('Email: customer@ethioglobal.com, Password: customer123');
  } catch (error) {
    console.log('Demo users already exist or error occurred:', error);
  }
};


