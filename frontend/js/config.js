// File: frontend/js/config.js
// Detect environment
const isLocalhost = window.location.hostname === 'localhost' || 
                    window.location.hostname === '127.0.0.1';

// API URLs
const API_URLS = {
  development: 'http://localhost:3000/api',
  production: 'https://shinkansen.proxy.rlwy.net/api'  // ← GANTI dengan URL backend Anda
};

// Select based on environment
const API_BASE_URL = isLocalhost ? API_URLS.development : API_URLS.production;

console.log('🔧 Environment:', isLocalhost ? 'Development' : 'Production');
console.log('🌐 API URL:', API_BASE_URL);

// Make available globally
window.API_CONFIG = {
  BASE_URL: API_BASE_URL,
  TIMEOUT: 30000
};