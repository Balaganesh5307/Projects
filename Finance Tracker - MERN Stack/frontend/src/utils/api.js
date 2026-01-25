import axios from 'axios';

// API base URL - uses environment variable in production, proxy in development
const API_URL = import.meta.env.VITE_API_URL || '';

// Debug: Log the API URL being used
console.log('🔗 API URL configured:', API_URL || '(empty - using relative URLs)');

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: true,
    timeout: 30000, // 30 second timeout for Render cold starts
});

// Request interceptor - log outgoing requests and add auth token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log(`📤 ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`, config.data);
        return config;
    },
    (error) => {
        console.error('❌ Request error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor - log responses and handle errors
api.interceptors.response.use(
    (response) => {
        console.log(`📥 Response ${response.status}:`, response.data);
        return response;
    },
    (error) => {
        console.error('❌ API Error:', {
            status: error.response?.status,
            message: error.response?.data?.message || error.message,
            url: error.config?.url,
            data: error.response?.data
        });
        return Promise.reject(error);
    }
);

export default api;
