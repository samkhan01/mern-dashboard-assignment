// Create a file, e.g., api.js

import axios from 'axios';

// Create an instance of axios with a custom configuration
const api = axios.create({
  baseURL: 'http://localhost:1573', // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests (optional)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
