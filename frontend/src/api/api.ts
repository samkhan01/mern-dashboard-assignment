import axios from 'axios';

/** Create an instance of axios with a custom configuration */
const api = axios.create({
  baseURL: 'http://localhost:1573', 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
