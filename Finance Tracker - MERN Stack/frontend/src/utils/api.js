import axios from 'axios';

// API base URL - uses environment variable in production, proxy in development
const API_URL = import.meta.env.VITE_API_URL || '';

console.log('API URL configured:', API_URL);

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
