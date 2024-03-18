import axios from 'axios';

const baseURL = 'http://localhost:8080/api'; // Adjust the base URL according to your backend API endpoint

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
    // You can add other headers here as needed
  }
});

export default api;
