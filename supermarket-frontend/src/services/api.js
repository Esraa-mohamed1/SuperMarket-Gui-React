// API service for handling backend requests

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Helper function for handling fetch requests
const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Product related API calls
export const productApi = {
  // Get all products with optional filtering
  getProducts: async (params = {}) => {
    const queryParams = new URLSearchParams();
    
    // Add any filters to the query params
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        queryParams.append(key, value);
      }
    });
    
    const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';
    return fetchData(`/products${queryString}`);
  },
  
  // Get a single product by ID
  getProductById: async (id) => {
    return fetchData(`/products/${id}`);
  },
  
  // Get products by category
  getProductsByCategory: async (categoryId) => {
    return fetchData(`/categories/${categoryId}/products`);
  },
  
  // Search products
  searchProducts: async (query) => {
    return fetchData(`/products/search?q=${encodeURIComponent(query)}`);
  },
};

// Category related API calls
export const categoryApi = {
  // Get all categories
  getCategories: async () => {
    return fetchData('/categories');
  },
  
  // Get a single category by ID
  getCategoryById: async (id) => {
    return fetchData(`/categories/${id}`);
  },
};

// Order related API calls
export const orderApi = {
  // Create a new order
  createOrder: async (orderData) => {
    return fetchData('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  },
  
  // Get order history for a user
  getOrderHistory: async (userId) => {
    return fetchData(`/users/${userId}/orders`);
  },
  
  // Get order details
  getOrderById: async (orderId) => {
    return fetchData(`/orders/${orderId}`);
  },
};

// User related API calls
export const userApi = {
  // Register a new user
  register: async (userData) => {
    return fetchData('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },
  
  // Login a user
  login: async (credentials) => {
    return fetchData('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },
  
  // Get user profile
  getProfile: async () => {
    // Assuming we store the token in localStorage
    const token = localStorage.getItem('token');
    
    return fetchData('/users/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  
  // Update user profile
  updateProfile: async (userData) => {
    const token = localStorage.getItem('token');
    
    return fetchData('/users/profile', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });
  },
};